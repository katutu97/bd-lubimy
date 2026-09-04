export default function QuoteBlock({ text, author, type = 'quote' }) {
  // type: 'quote' — цитата, 'joke' — анекдот
  const isQuote = type === 'quote'
  
  return (
    <div className={`quote-block ${isQuote ? 'quote-type' : 'joke-type'}`}>
      {isQuote && <span className="quote-mark">❝</span>}
      {!isQuote && <span className="quote-mark">⚘</span>}
      
      <p className="quote-text">{text}</p>
      
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