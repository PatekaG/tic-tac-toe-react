// import { useEffect, useState } from "react";

// const useSound = (url, options) => {
//   const [sound, setSound] = useState(false);
//   useEffect(() => {
//     const audio = new Audio(url);

//     audio.load();
//     audio.volume = options.volume;
//     setSound(audio);
//   }, []); //eslint-disable-line react-hooks/exhaustive-deps

//   return () => {
//     if (sound) {
//       sound.play();
//     }
//     setTimeout(() => {
//       sound.pause();
//       sound.currentTime = 0;
//     }, options.timeout);
//   };
// };

// export default useSound;


import { useEffect, useRef } from "react";

const useSound = (url, options) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(url);
    audio.load();
    audio.volume = options.volume ?? 1;

    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [url, options.volume]);

const playSound = () => {
  if (audioRef.current) {
    audioRef.current.play().catch(() => {
      // Optionally handle error (e.g. user didn't interact yet)
      console.log("User hasn't interacted yet. Sound play blocked.");
    });
    setTimeout(() => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }, options.timeout ?? 1000);
  }
};


  return playSound;
};

export default useSound;
