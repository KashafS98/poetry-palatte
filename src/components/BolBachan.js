import React from "react";

export default function BolBachan({ paratha, halwaState, isPlaying }) {
  return (
    <div>
        {
            halwaState
            ?
            <audio style={{visibility: 'hidden'}} controls="controls" autoPlay='true' onPlay={()=>isPlaying(true)} onPause={()=>isPlaying(false)}>
                <source src={halwaState} />
            </audio>
            : ''
        }
    </div>
  );
}
