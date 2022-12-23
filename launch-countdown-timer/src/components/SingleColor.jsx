import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ index, weight, hexColor }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyText = () => {
    navigator.clipboard.writeText(`#${hexColor}`)
    setIsCopied(!isCopied)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }, [isCopied])

  const copiedText = () => {}
  return (
    <article
      className={`${index > 10 ? 'color color-light' : 'color'}`}
      style={{ backgroundColor: `#${hexColor}` }}
      onClick={handleCopyText}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hexColor}</p>
      {isCopied && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
