/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { promises as fs } from 'node:fs'
import { join } from 'node:path'

import { ImageResponse } from 'next/og'
export const size = {
  width: 1200,
  height: 630,
}
export const alt = 'report-formatter'

export default async function Image() {
  const logoData = await fs.readFile(join(process.cwd(), 'logo-image.png'))
  const logoSrc = Uint8Array.from(logoData).buffer

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
          src={logoSrc.toString()}
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
