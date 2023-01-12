import classNames from 'classnames'
import React, { useEffect, useRef } from 'react'
import type { FC } from 'react'

interface Props {
  className?: string
}

const WaveAnimation: FC<Props> = ({ className }) => {
  const path = useRef<SVGPathElement | null>(null)
  const group = useRef<SVGGElement | null>(null)

  useEffect(() => {
    if (!path.current || !group.current) throw new Error('asgfdsesved')

    const pathLength = path.current.getTotalLength()

    path.current.style.strokeDasharray = `${pathLength / 2}`

    path.current.animate(
      [
        {
          transform: 'translateX(-25%)',
          strokeDashoffset: pathLength / 2,
        },
        {
          transform: 'translateX(25%)',
          strokeDashoffset: pathLength,
        },
      ],
      {
        duration: 2000,
        iterations: Infinity,
      }
    )

    // group.current.animate(
    //   [
    //     { transform: 'translatey(-5%)' },
    //     { transform: 'translateY( 5%)' }
    //   ],
    //   {
    //     duration: 450,
    //     iterations: Infinity,
    //     direction: 'alternate',
    //     easing: 'cubic-bezier(.45,.05,.55,.95)'
    //   }
    // )
  }, [])

  return (
    <svg
      className={classNames(className, '')}
      width="610"
      height="100"
      viewBox="0 0 610 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="wave"
    >
      <g ref={group}>
        <path
          ref={path}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 75.0001C33.5 75.0001 16.5 25.0001 84 25.0001C49 42.0001 73 75.0001 105 75.0001C133.5 75.0001 116.5 25 184 25C149 42 173 75 205 75C233.5 75 216.5 25 284 25C249 42 273 75 305 75C333.5 75 316.5 25.0001 384 25.0001C349 42.0001 373 75.0001 405 75.0001C433.5 75.0001 416.5 25.0001 484 25.0001C449 42.0001 473 75.0001 505 75.0001C533.5 75 516.5 25 584 25C549 42 573 75 605 75"
        />
      </g>
    </svg>
  )
}

export default WaveAnimation
