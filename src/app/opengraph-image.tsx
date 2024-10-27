/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from 'next/og'
export const size = {
  width: 1200,
  height: 630,
}
export const alt = 'report-formatter'

export default async function Image() {
  const logoSrc = await fetch(
    new URL('./logo-image.png', import.meta.url),
  ).then((res) => res.url)

  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={logoSrc}
          alt=""
          style={{ width: '60%' }}
          height={60}
          width={60}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
