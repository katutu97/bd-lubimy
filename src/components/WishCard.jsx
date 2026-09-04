export default function WishCard({ text }) {
  return (
    <div className="framed-card">
      <span className="corner corner--tl" />
      <span className="corner corner--tr" />
      <span className="corner corner--bl" />
      <span className="corner corner--br" />

      <p className="framed-card-text">{text}</p>
    </div>
  )
}