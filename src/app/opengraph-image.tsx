/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from 'next/og'

export default async function Image() {
  const logoImage = 'logo-image.png'
  const logoSrc = new URL(
    logoImage,
    'https://report-formatter.vercel.app',
  ).toString()

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
  )
}
