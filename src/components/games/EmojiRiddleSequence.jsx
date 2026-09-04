import { useState } from 'react'

// Легенда — просто для красоты и атмосферы, реальная проверка идёт по RIDDLES ниже
const ALPHABET_LEGEND = [
  ['А', '✵'], ['Б', '𓀠'], ['В', 'ಥ'], ['Г', '☘'], ['Д', '✿'],
  ['Е', '☂'], ['Ж', '↩︎'], ['З', '⚘'], ['И', '◬'], ['Й', '⊛'], ['К', '◭'],
  ['Л', '⋁'], ['М', '◪'], ['Н', '⋀'], ['О', '‖'], ['П', '⊠'],
  ['Р', '⿴'], ['С', '㊂'], ['Т', '◮'], ['У', '〠'], ['Ф', '✾'],
  ['Х', '∅'], ['Ц', '❁'], ['Ч', '✡'], ['Ш', '◙'], ['Щ', '●'],
  ['Ъ', 'დ'], ['Ы', 'ツ'], ['Ь', '↪︎'], ['Э', '☯'], ['Ю', '※'],
  ['Я', '❋'], ['.', '∀'], [',', '○'], ['?', 'Ψ'], ['-', '♦︎'],
]

// Каждая загадка — эмодзи-код и ответ (слово). Решил одну — сразу следующая.
const RIDDLES = [
  { cipher: '〠  ✾ ☂ ⿴ ◪ ☂ ⿴ ✵  𓀠 ツ ⋁ ‖  ㊂ ☂ ◪ ⋀ ✵ ✿ ❁ ✵ ◮ ↪︎  ‖ ಥ ☂ ❁  ∀   ಥ ㊂ ☂  ○  ◭ ⿴ ‖ ◪ ☂   ✿ ☂ ಥ ❋ ◮ ◬  ○  ⊠ ‖ ☘ ◬ 𓀠 ⋁ ◬  ∀ ㊂ ◭ ‖ ⋁ ↪︎ ◭ ‖   ‖ ㊂ ◮ ✵ ⋁ ‖ ㊂ ↪︎  Ψ', answer: 'девять' },
  {
    cipher:
      '◮ ツ  ㊂ ⋁ ツ ◙ ◬ ◙ ↪︎  ♦︎  ⋀ ‖  ⋀ ☂  ☘ ‖ ⋁ ‖ ㊂  ◪ ‖ ⊛  ○\n' +
      '⋁ ※ 𓀠 〠 ※  ✾ ⿴ ✵ ⚘ 〠   ⊠ ‖ ಥ ◮ ‖ ⿴ ※  ㊂  ◮ ‖ 𓀠 ‖ ⊛  ∀',
    answer: 'эхо',
  },
  { cipher: '✡ ◮ ‖  ⊠ ⿴ ◬ ⋀ ✵ ✿ ⋁ ☂  ↩︎ ◬ ◮  ◮ ☂ 𓀠 ☂  ○  ⋀ ‖  ✿ ⿴ 〠 ☘ ◬ ☂   ◬ ㊂ ⊠ ‖ ⋁ ↪︎ ⚘ 〠 ※ ◮   ☂ ☘ ‖  𓀠 ‖ ⋁ ↪︎ ◙ ☂  ○  ✡ ☂ ◪  ◮ ツ  Ψ', answer: 'имя' },
]

// riddleIndex приходит снаружи и определяет, какая именно загадка сейчас показана
export default function EmojiRiddleSequence({ riddleIndex, solved, onSolved }) {
  const [value, setValue] = useState('')
  const riddle = RIDDLES[riddleIndex % RIDDLES.length]

  function handleChange(e) {
    const v = e.target.value
    setValue(v)
    if (v.trim().toLowerCase() === riddle.answer.toLowerCase()) {
      onSolved()
    }
  }

  return (
    <div className="emoji-riddle-section">
      <div className="emoji-legend">
        {ALPHABET_LEGEND.map(([letter, emoji]) => (
          <span key={letter} className="legend-pair">{letter} {emoji}</span>
        ))}
      </div>

      <p className="emoji-cipher">{riddle.cipher}</p>

      {solved ? (
        <p className="emoji-solved-answer">Правильный ответ: {riddle.answer}</p>
      ) : (
        <input
          className="emoji-answer-input"
          value={value}
          onChange={handleChange}
          placeholder="Впиши ответ"
          autoComplete="off"
        />
      )}
    </div>
  )
}