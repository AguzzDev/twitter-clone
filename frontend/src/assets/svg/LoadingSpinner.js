import * as React from 'react'

const LoadingSpinner = (props) => (
  <svg viewBox='0 0 32 32' className='w-9' {...props}>
    <circle
      cx={16}
      cy={16}
      fill='none'
      r={14}
      strokeWidth={4}
      style={{
        stroke: '#1d9bf0',
        opacity: 0.2
      }}
    />
    <circle
      cx={16}
      cy={16}
      fill='none'
      r={14}
      strokeWidth={4}
      className='loading-spinner'
      style={{
        stroke: '#1d9bf0',
        strokeDasharray: 80,
        strokeDashoffset: 60,
        transformOrigin: '50% 50%'
      }}
    />
  </svg>
)

export default LoadingSpinner
