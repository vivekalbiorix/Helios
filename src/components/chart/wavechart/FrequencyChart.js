import { useRef, useEffect, useState } from "react";
import wavesurfer from "wavesurfer.js";
import "./FrequencyChart.css";

const FrequencyChart = () => {
  const audioRef = useRef();
  const [audioTrack, setAudioTrack] = useState();

  useEffect(() => {
    if (audioRef.current && !audioTrack) {
      const track = wavesurfer.create({
        container: audioRef.current,
        waveColor: [
          "#BD212F",
          "#38B64A",
          "#608942",
          "#974C37",
          "rgba(0,255,255,.5)",
        ],
        progressColor: [
          "#BD212F",
          "#38B64A",
          "#608942",
          "#974C37",
          "rgba(0,255,255,.5)",
        ],
        barHeight: 5,
      });
      track.load(
        "https://actions.google.com/sounds/v1/science_fiction/creature_distortion_white_noise.ogg"
      );
      setAudioTrack(track);
    }
  }, [audioRef]);

  return (
    <>
      {audioRef && <div id="waveform" className="audio" ref={audioRef}></div>}
    </>
  );
};

export default FrequencyChart;
