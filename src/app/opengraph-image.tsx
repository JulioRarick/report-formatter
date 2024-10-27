/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from 'next/og'

export default async function Image() {
  const logoImage = new URL('/public/logo-image.png', import.meta.url)
  const logoSrc = await fetch(new URL(logoImage, import.meta.url)).then(
    (res) => res.url,
  )

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
          height={100}
          width={100}
        />
      </div>
    ),
  )
}
