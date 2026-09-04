export default function ChapterLabel({ number, title }) {
  return (
    <div className="chapter-label">
      <span className="chapter-flourish">——— ✧ ———</span>
      <span className="chapter-text">
        {number}
      </span>
      <span className="chapter-flourish">——— ✧ ———</span>
    </div>
  )
}