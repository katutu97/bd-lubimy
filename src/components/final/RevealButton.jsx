export default function RevealButton({ onClick, label = 'Открыть следующую часть' }) {
  return (
    <button type="button" className="reveal-button" onClick={onClick}>
      {label}
    </button>
  )
}