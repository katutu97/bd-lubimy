import { useState, useRef, useEffect } from 'react'


export default function AudioTrack({ src, caption }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0) // 0..100
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    function onTimeUpdate() {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100)
    }
    function onLoadedMetadata() {
      setDuration(audio.duration)
    }
    function onEnded() {
      setPlaying(false)
      setProgress(0)
    }

    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('ended', onEnded)
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
    setPlaying(!playing)
  }

  function handleSeek(e) {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    audio.currentTime = ratio * duration
  }

  function formatTime(sec) {
    if (!sec || Number.isNaN(sec)) return '0:00'
    const m = Math.floor(sec / 60)
    const s = Math.floor(sec % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  return (
    <div className="audio-track">
      <audio ref={audioRef} src={src} preload="metadata" />

      <button type="button" className="audio-play-btn" onClick={togglePlay}>
        {playing ? '❚❚' : '▶'}
      </button>

      <div className="audio-body">
        {caption && <p className="audio-caption">{caption}</p>}
        <div className="audio-progress-track" onClick={handleSeek}>
          <div className="audio-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="audio-time">
          {formatTime((progress / 100) * duration)} / {formatTime(duration)}
        </span>
      </div>
    </div>
  )
}