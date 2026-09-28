import { useEffect } from 'react'

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = resolve
    img.onerror = resolve // даже если фото не найдётся — не блокируем остальное
  })
}

// Просто запускает загрузку картинок в фоне, ничего не рендерит и ничего не блокирует
export function usePreloadImages(urls) {
  useEffect(() => {
    urls.forEach(preloadImage)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
}