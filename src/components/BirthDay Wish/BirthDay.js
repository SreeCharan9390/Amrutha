import React, { useState, useRef } from 'react';
import './BirthDay.css';
import audioFile from './charlie.mp3';
import img1 from './OIP.jpg';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
      <img src={img1} alt=' ' align="right" height= {"250px"} /> 
        <div className='wish'>
        My dear Amrutha🖤,<br />
        On this special day, I wanted to take a moment to celebrate you—the incredible person you are and the wonderful friend you've always been.<br/><br/>I have Enjoyrd Each and Every moment I spent with you.You have always been my best company<br/><b>Wish You A many more happy returns of the day</b><br/>
        always yours,<br />
        @Sri Charan
        </div>
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
