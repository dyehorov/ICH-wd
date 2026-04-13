import "./App.css"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  playPause,
  setTime,
  changeVolume,
  toggleMute,
  nextRepeatMode,
  setPlaybackRate,
  seekForward,
  seekBackward,
} from "./redux/slices/playerSlice"

export default function App() {
  const dispatch = useDispatch()

  const [seekValue, setSeekValue] = useState("")

  const {
    volume,
    isPlaying,
    currentTime,
    maxTime,
    isMuted,
    previousVolume,
    repeatMode,
    playbackRate,
  } = useSelector(state => state.player)

  return (
    <>
      <h1>{isPlaying ? "Playing" : "On pause"}</h1>
      <button onClick={() => dispatch(playPause())}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      <div style={{ marginTop: 16 }}>
        <div>{`${currentTime} / ${maxTime}`}</div>

        <input
          type="number"
          placeholder="Enter time"
          onChange={e => dispatch(setTime(Number(e.target.value)))}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <p>Volume: {volume}</p>
        <p>{isMuted ? "muted" : "not muted"}</p>
        <p>Previous Volume: {previousVolume}</p>

        <input
          type="number"
          placeholder="Enter volume"
          onChange={e => dispatch(changeVolume(Number(e.target.value)))}
        />
        <button onClick={() => dispatch(toggleMute())}>
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>

      <div style={{ marginTop: 16 }}>
        <button onClick={() => dispatch(nextRepeatMode())}>
          Repeat: {repeatMode}
        </button>
      </div>

      <div style={{ marginTop: 16 }}>
        <p>Playback Rate: {playbackRate}</p>

        <input
          type="number"
          placeholder="Enter volume"
          onChange={e => dispatch(setPlaybackRate(Number(e.target.value)))}
        />
      </div>

      <div style={{ marginTop: 16 }}>
        <p>Current time: {currentTime}</p>

        <input
          type="number"
          placeholder="Seconds"
          value={seekValue}
          onChange={event => {
            setSeekValue(Number(event.target.value))
          }}
        />

        <button onClick={() => dispatch(seekBackward(seekValue))}>
          Backward
        </button>
        <button onClick={() => dispatch(seekForward(seekValue))}>
          Forward
        </button>
      </div>
    </>
  )
}
