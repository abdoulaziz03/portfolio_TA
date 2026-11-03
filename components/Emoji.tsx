'use client'

import { useEffect, useRef } from 'react'

// Jeu d'images utilisé par emoji-mart : 'native' | 'apple' | 'facebook' | 'google' | 'twitter'
const EMOJI_SET = 'twitter'

// emoji-mart et ses données (~500 Ko) ne sont chargés qu'une fois, côté navigateur
let emojiMart: Promise<typeof import('emoji-mart')> | null = null

function loadEmojiMart() {
  if (!emojiMart) {
    emojiMart = Promise.all([import('emoji-mart'), import('@emoji-mart/data')]).then(
      async ([mod, data]) => {
        await mod.init({ data: data.default, set: EMOJI_SET })
        return mod
      }
    )
  }
  return emojiMart
}

interface EmojiProps {
  native: string
  size?: string
  className?: string
}

export default function Emoji({ native, size = '1em', className }: EmojiProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let cancelled = false
    loadEmojiMart().then(({ Emoji: EmojiElement }) => {
      if (cancelled || !ref.current) return
      // Remplace l'emoji natif (rendu serveur) par l'élément <em-emoji>
      new EmojiElement({ native, size, set: EMOJI_SET, ref })
    })
    return () => {
      cancelled = true
    }
  }, [native, size])

  return (
    <span key={native} ref={ref} className={`inline-flex items-center leading-none ${className ?? ''}`}>
      {native}
    </span>
  )
}
