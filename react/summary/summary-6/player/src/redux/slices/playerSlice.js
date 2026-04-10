import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isPlaying: false, // воспроизведение активно или нет
  currentTime: 0, // текущая позиция трека в секундах (0 .. maxTime)
  maxTime: 180, // максимальная длительность трека (3 минуты = 180 сек) — константа, не меняется
  volume: 50, // громкость от 0 до 100
  isMuted: false, // включён ли мут
  previousVolume: 50, // громкость до мута (нужно для восстановления)
  playbackRate: 1.0, // скорость воспроизведения
  repeatMode: "none", // режим повтора: "none", "one", "all"
}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playPause: state => {
      state.isPlaying = !state.isPlaying
    },
    setTime: (state, action) => {
      if (action.payload < 0) {
        state.currentTime = 0
      } else if (action.payload > state.maxTime) {
        state.currentTime = state.maxTime
      } else {
        state.currentTime = action.payload
      }
    },
    changeVolume: (state, action) => {
      const newVolume = action.payload

      if (newVolume > 0) {
        state.previousVolume = newVolume
      }

      if (newVolume > 100) {
        state.volume = 100
      } else {
        state.volume = newVolume
      }

      if (newVolume === 0) {
        state.isMuted = true
      } else {
        state.isMuted = false
      }
    },
    toggleMute: state => {
      if (!state.isMuted) {
        if (state.volume > 0) {
          state.previousVolume = state.volume
        }

        state.volume = 0
        state.isMuted = true
      } else {
        state.volume = state.previousVolume
        state.isMuted = false
      }
    },
    nextRepeatMode: state => {
      const modes = ["none", "one", "all"]
      const currentIndex = modes.indexOf(state.repeatMode)

      if (currentIndex === -1) currentIndex = 0

      let nextIndex

      if (currentIndex === modes.length - 1) {
        nextIndex = 0
      } else {
        nextIndex = currentIndex + 1
      }

      state.repeatMode = modes[nextIndex]
    },
    setPlaybackRate: (state, action) => {
      const allowedRates = [0.5, 0.75, 1.0, 1.25, 1.5]

      const isValueAllowed = allowedRates.find(item => item === action.payload)

      if (isValueAllowed) {
        state.playbackRate = action.payload
      }
    },
    seekForward: (state, action) => {
      const seconds = action.payload

      state.currentTime = Math.min(state.currentTime + seconds, state.maxTime)
    },

    seekBackward: (state, action) => {
      const seconds = action.payload

      state.currentTime = Math.max(state.currentTime - seconds, 0)
    },
  },
})

export const {
  playPause,
  setTime,
  changeVolume,
  toggleMute,
  nextRepeatMode,
  setPlaybackRate,
  seekForward,
  seekBackward,
} = playerSlice.actions

export default playerSlice.reducer
