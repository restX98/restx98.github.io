'use client'

import { useState, useEffect } from 'react'
import { useSnakeGameContext } from '@/context/snake-game-context'
import { cn } from '@/lib/utils'

export function SnakeHouse({ className, children }) {
  const { gridDimension } = useSnakeGameContext()
  const _cols = Array.from({ length: gridDimension.cols }, (_, index) => index)
  const _rows = Array.from({ length: gridDimension.rows }, (_, index) => index)

  return (
    <div className={cn(className, 'bg-grey-800 max-h-full h-full max-w-full w-full overflow-hidden flex flex-col justify-evenly')}>
      {_rows.map((row) => (
        <div key={row} className="flex w-screen justify-evenly">
          {_cols.map((col) => (
            <Tile key={`${col}-${row}`} coords={{ col, row }} />
          ))}
        </div>)
      )}
    </div>
  )
}

function Tile({ coords }) {
  const { snake, foods, addFood } = useSnakeGameContext()
  const [tileClasses, setTileClasses] = useState('p-1 [&>*]bg-gray-700')

  useEffect(() => {
    const isSnake = snake.find((tail) => {
      return tail.x === coords.col && tail.y === coords.row
    })

    const isFood = foods.find((food) => {
      return food.x === coords.col && food.y === coords.row
    })

    if (isFood && isSnake) {
      setTileClasses('p-px [&>*]:bg-green-700')
    } else if (isSnake) {
      setTileClasses('p-1 [&>*]:bg-green-700')
    } else if (isFood) {
      setTileClasses('p-1 [&>*]:bg-red-700')
    } else {
      setTileClasses('p-1 [&>*]:bg-gray-700')
    }
  }, [foods, snake, coords.col, coords.row])


  return (
    <div className={`w-10 h-10 p-1 ${tileClasses}`}>
      <div onClick={() => addFood({ x: coords.col, y: coords.row })} className={'w-full h-full rounded-sm shadow-[inset_rgba(68,_68,_68,0.7)_2px_2px_4px,inset_rgba(34,_34,_34,0.7)_-2px_-2px_4px]'}>
      </div>
    </div>
  )
}
