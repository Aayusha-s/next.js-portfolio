'use client'
import Script from 'next/script'

export default function Scripts() {
  return (
    <>
      <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  )
}