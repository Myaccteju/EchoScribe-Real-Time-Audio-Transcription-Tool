import React from 'react';
import './Player.css';
import { BsFillPlayCircleFill,BsFillPauseCircleFill } from 'react-icons/bs';
import { GiOldMicrophone } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa";


const Player = ({ isListening, startListening, stopListening }) => {
    return(
        
        <div className='player-container'>
            
            <div className="left-side"></div>
                
            <div className="microphone-icon">
                
                <GiOldMicrophone size={166}/>
                </div>

            <div className='circle-icon'>
                <FaRegCircle size={175}/>
            </div>

            <div className={`wrapper ${isListening ? "wave-animation" : ''}`}>

            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
        </div>
                  
            <div className="player-controls">
                
                <div 
                  className="play-button"
                  onClick={startListening}
                  style={{ display: isListening ? 'none' : 'flex'}}>
                    <BsFillPlayCircleFill size={50}/> 
                </div>
                <div 
                  className="pause-button"
                  onClick={stopListening}
                  style={{ display: isListening ? 'flex' : 'none'}}>
                    <BsFillPauseCircleFill size={50}/>
                </div>


                
            </div>
        </div> 
        
         

    );
};

export default Player 