import {useState} from 'react';
import React from 'react';
import './App.css';
import Player from './Player.jsx';
import './Player.css';
import { MdOutlineCopyAll } from "react-icons/md";


const App = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [socket, setSocket] = useState(null);
  const [savedTranscriptions, setSavedTranscriptions] = useState([]);

  const handleCopy=() =>{
   if (transcript.trim()){
    navigator.clipboard.writeText(transcript)
    .then(() => {
      alert("Transcript copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy transcript: ", err);
    })
   }else{
    alert("Transcript is empty")
  }
};
  // Start recording and connect to WebSocket for transcription
  const startListening = () => {
    navigator.mediaDevices.getUserMedia({audio:true}).then((stream) => {
      const newMediaRecorder = new MediaRecorder(stream, {mimeType: 'audio/webm'});
      setMediaRecorder(newMediaRecorder);

      // Establishes a WebSocket connection with Deepgram
      const newSocket = new WebSocket('wss://api.deepgram.com/v1/listen', [
        'token',
        process.env.REACT_APP_DG_KEY, // Deepgram API key for authorization
      ]);
      setSocket(newSocket);

      newSocket.onopen = () => {
        newMediaRecorder.addEventListener('dataavailable' , event => {
          newSocket.send(event.data);
        });
        newMediaRecorder.start(250);
     };

      newSocket.onmessage = (message) => {
        const received = JSON.parse(message.data);
        const transcript = received.channel.alternatives[0].transcript || '';
        setTranscript((prev) => prev + ' ' + transcript);
        // console.log(transcript);
      };
    });

    setIsListening(true); // Update UI to indicate recording is active
  }

  // Stop recording and close the WebSocket connection
  const stopListening = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      socket.close();
    }
    setIsListening(false); // Update UI to indicate recording has stopped
};

  const saveTranscription = () => {
    if (transcript.trim()) {
      setSavedTranscriptions((prev) => [...prev, transcript.trim()]);
      setTranscript(""); // Clear current transcription
    }
};

  return (
    <div>
      <h1>Welcome to EchoScribe</h1>
          <div className="left-side"></div>
          <div className="right-side">
      <Player
       isListening={isListening}
       startListening={startListening}
       stopListening={stopListening}
       />
       <button onClick={saveTranscription} className="save-button">
          Save Transcription
        </button>
    </div>
      
      <div className="transcript">
       <p>{transcript}</p> 
       </div>   

      <div className="copy-icon" onClick={handleCopy}>
        <MdOutlineCopyAll size={25} />
        {/* <span>Copy</span> */}
      </div> 
      

      <div className="saved-transcriptions">
        <h2>Past Transcriptions:</h2>
        <ul>
          {savedTranscriptions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;  