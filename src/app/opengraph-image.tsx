/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from 'next/og'

export default async function Image() {
  const logoImage = new URL('logo-image.png', import.meta.url)

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
          src={logoImage.href}
          alt=""
          style={{ width: '60%' }}
          height={100}
          width={100}
        />
      </div>
    ),
  )
}
