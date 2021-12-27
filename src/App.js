import './App.css';
import { React, useEffect, useRef, useState } from 'react';
function App() {
  const [text, textHandel] = useState("");
  const [comeText, comeTextHandel] = useState(false);
  const vidRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);
  const handlePlayVideo = async () => {
    await vidRef.current.play();
  }
  useEffect(() => {
    if (text !== "") {
      comeTextHandel(false);
    } else {
      comeTextHandel(true);
    }
  }, [text, comeText])
  return (
    <div className='container'>
      <h1>اكتب انجازك يا اخويا </h1>
      <input className='form-control' onChange={(e) => textHandel(e.target.value)} value={text} type="text" />
      <h2 >{comeText ? "خد تعالا فين الانجاز يا  علق" : ""}</h2>
      <button onClick={handlePlayVideo} className='btn'>خدلك واحدة برافو</button>
      <div className="vedioContainer">
        <video ref={vidRef} src={comeText ? './video/bad.mp4' : './video/bravo.mp4'} type="video/mp4"></video>
      </div>
    </div>
  );
}

export default App;
