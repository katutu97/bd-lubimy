export default function QuoteBlock({ text, author, type = 'quote', align = 'center' }) {
  const isQuote = type === 'quote'
  const isJoke = type === 'joke'
  const isLesson = type === 'lesson'

  const getMark = () => {
    if (isQuote) return '✎'
    if (isJoke) return '⚘'
    if (isLesson) return '⚔'
  }

  return (
    <div className={`quote-block ${isQuote ? 'quote-type' : ''} ${isJoke ? 'joke-type' : ''} ${isLesson ? 'lesson-type' : ''}`}>
      <span className="quote-mark">{getMark()}</span>

      <p className={`quote-text pre-line ${align === 'left' ? 'text-left' : ''}`}>
        {text}
      </p>

      {author && (
        <p className="quote-author">— {author}</p>
      )}

      <div className="quote-decoration">
        <span className="deco-line">✦</span>
        <span className="deco-line">✧</span>
        <span className="deco-line">✦</span>
      </div>
    </div>
  )
}