# "EchoScribe: Real-Time Audio Transcription Tool"  

This project is a **"EchoScribe: Real-Time Audio Transcription Tool"** built with React.js. It allows users to record audio, transcribe it live using the **Deepgram Speech-to-Text API**, and save transcriptions for later reference. The sleek and interactive UI provides an effortless experience with custom player controls, animated audio waves, and a transcript history section.

---

## Features  

- 🎤 **Live Audio Transcription**: Records audio in real-time and processes it using the Deepgram API.  
- 💾 **Save Transcriptions**: Save your transcriptions for future reference.  
- 🖥️ **Interactive UI**:  
  - Modern audio player with **play** and **pause** buttons.  
  - Animated waves while recording to indicate active listening.  
- 📝 **Transcription History**: Displays a list of all saved transcriptions.  
- 💡 **Environment Configurations**: Uses `.env` file for API key storage for secure integrations.
- 📝 Infinite Scrolling Transcript:
The transcription area supports infinite scrolling, ensuring that new transcriptions automatically appear without disrupting the scroll position.  

---

## Installation  

### Prerequisites  
- Node.js (v14 or higher)  
- NPM or Yarn package manager  

### Steps to Run the Project  

1. **Clone the Repository**  
   ```bash
   https://github.com/Myaccteju/EchoScribe-Real-Time-Audio-Transcription-Tool.git
   cd EchoScribe-Real-Time-Audio-Transcription-Tool

2. **Install Dependencies**
    npm install

3. **Setup Environment Variables**
    Setup Environment Variables

    Create a .env file in the root directory.
    Add the following line with your Deepgram API key
    REACT_APP_DG_KEY=your_deepgram_api_key

4. **Start the Development Server**
    npm start
    The app will run on http://localhost:3000.

**Usage**
    1. Click the Play button to start recording and transcription.
    2. View live transcription updates in the Transcription Section.
    3. Click the Pause button to stop recording.
    4. Use the Save Transcription button to store the transcription in the History Section.   

**File Structure**
    1. src/App.js:
        Core logic for audio recording, WebSocket communication with Deepgram, and managing transcriptions.
    2. src/Player.jsx:
        Custom audio player component with interactive play/pause functionality and animated waves.
    3. src/Player.css:
        Styles for the audio player, transcription UI, and buttons.
    4. .env:
        Stores the Deepgram API key for secure API calls.

**Technologies Used**
    1. React.js: For building the user interface.
    2. Deepgram API: For speech-to-text transcription.
    3. CSS3: For styling and animations.
    4. WebSockets: For real-time audio processing.

# EchoScribe-Real-Time-Audio-Transcription-Tool
