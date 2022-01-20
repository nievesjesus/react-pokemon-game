import theme from '../assets/music/pokemon-theme.mp3';
import { useEffect, useState } from 'react';

const Gamesound = () => {
    const [audio] = useState(new Audio(theme));
    const [playing, setPlaying] = useState(false);


  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
  [playing]
);

useEffect(() => {
  audio.addEventListener('ended', () => setPlaying(false));
  return () => {
    audio.removeEventListener('ended', () => setPlaying(false));
  };
}, []);

  const toggle = () => setPlaying(!playing)
    return (
        <div onClick={toggle} className="audio-button">{playing ? "Pause" : "Play"}</div>
    )
}

export default Gamesound;