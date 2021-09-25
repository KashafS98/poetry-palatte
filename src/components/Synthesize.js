import React, { useEffect, useState } from "react";
import BolBachan from "./BolBachan";
import Buttons from "./Buttons.js";
import { synthText } from "../services";
import sound from "../assets/sound.gif";

export default function Synthesize() {
  const [halwaState, sethalwaState] = useState("");
  const [paratha, setParatha] = useState("");
  const [playingSound, setplayingSound] = useState(false);
  const [textType, settextType] = useState(true)

  useEffect(() => {
    console.log("rang badal");
  }, [halwaState]);

  const doSomething = () => {
    sethalwaState("");
    const tt = !textType ? 'text' : 'ssml'
    synthText(paratha, tt).then((res) => {
      const someValue = `data:audio/wav;base64,${res.data.audioContent}`;
      sethalwaState(someValue);
    });
  };

  const isPlaying = (booly) => {
    setplayingSound(booly);
  };

  return (
    <div className="w-4/5 mx-auto my-10 flex">
      <div className="w-1/2 flex flex-col p-2">
        <div className="flex items-center w-full mb-3">
          <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="mr-3 text-white font-medium">Text</div>
            <div className="relative">
              <input type="checkbox" id="toggleB" className="sr-only" checked={textType} onChange={e=>settextType(e.target.checked)}/>
              <div className="block bg-white w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-dark w-6 h-6 rounded-full transition"></div>
            </div>
            <div className="ml-3 text-white font-medium">SSML</div>
          </label>
        </div>
        <textarea
          className="w-full rounded-3xl p-5 outline-none mb-5 bg-dark border border-white text-white"
          placeholder="Enter a text"
          rows="20"
          value={paratha}
          onChange={(e) => {
            setParatha(e.target.value);
          }}
        />
        <Buttons handleClick={doSomething}>Speak</Buttons>
      </div>
      <div className="w-1/2 flex flex-col p-2 items-center justify-center">
        {playingSound ? <img src={sound} width="50%" alt='playing audio' /> : ""}
        <BolBachan
          paratha={paratha}
          halwaState={halwaState}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
}
