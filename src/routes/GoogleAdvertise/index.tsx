import { useEffect } from 'react'

interface Props {
  className?: string
  client?: string
  slot?: string
  format?: string
  responsive?: string
  layoutKey?: string
}

const GoogleAdvertise = ({
  className = 'adsbygoogle',
  client = process.env.REACT_APP_DATA_AD_CLIENT || '',
  slot = process.env.REACT_APP_DATA_AD_SLOT || '',
  format = 'auto',
  responsive = 'true',
  layoutKey = '',
}: Props) => {
  useEffect(() => {
    let adsbygoogle: any
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    if (window) (adsbygoogle = (window as any).adsbygoogle || []).push({})
  }, [])

  // return (
  //   <div
  //     style={{
  //       background: '#e9e9e9',
  //       color: 'black',
  //       fontSize: '18px',
  //       fontWeight: 'bold',
  //       textAlign: 'center',
  //       padding: '16px',
  //     }}
  //   >
  //     광고 미리보기
  //   </div>
  // )

  return (
    <ins
      className={className}
      style={{
        overflowX: 'auto',
        overflowY: 'hidden',
        display: 'block',
        textAlign: 'center',
      }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
      data-ad-layout-key={layoutKey}
    />
  )
}

export default GoogleAdvertise
