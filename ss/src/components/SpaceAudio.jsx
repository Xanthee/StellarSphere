import { useEffect, useRef } from "react";

const SpaceAudio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.9; // volume
      const play = () => {
        audio.play().catch((err) => {
          console.warn("Autoplay may be blocked until user interacts:", err.message);
        });
      };

      play();

      const onInteraction = () => {
        play();
        window.removeEventListener("click", onInteraction);
      };

      window.addEventListener("click", onInteraction);
    }
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay hidden>
      <source src="/sounds/space-ambience.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default SpaceAudio;
