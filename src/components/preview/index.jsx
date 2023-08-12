import React from 'react'

export const preview = () => {
  const countArray = Array.from({ length: 30 }, (_, index) => index + 1);
  return (
    <div>
        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {countArray.map((num) => (
              <li>
                <img
                  src={`/images/${num}.jpg`}
                  className="w-full max-w-full max-h-full m-auto"
                />
              </li>
            ))}
          </ul>
    </div>
  )
}
