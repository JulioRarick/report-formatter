/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from 'next/og'

export default async function Image() {
  const logo = 'http://localhost:3000/logo-image.png'
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
          src={logo}
          alt=""
          style={{ width: '60%' }}
          height={100}
          width={100}
        />
      </div>
    ),
  )
}
