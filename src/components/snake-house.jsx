'use client'

import { useState, useEffect } from 'react'
import { useSnakeGameContext } from '@/context/snake-game-context'
import { cn } from '@/lib/utils'

export function SnakeHouse({ className, children }) {
  const { gridDimension } = useSnakeGameContext()
  const _cols = Array.from({ length: gridDimension.cols }, (_, index) => index)
  const _rows = Array.from({ length: gridDimension.rows }, (_, index) => index)

  return (
    <div className={cn(className, 'max-h-full h-full max-w-full w-full overflow-hidden flex flex-col justify-evenly')}>
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
  const [isSnake, setIsSnake] = useState(false)
  const [isFood, setIsFood] = useState(false)

  useEffect(() => {
    setIsSnake(() => snake.some((tail) => {
      return tail.x === coords.col && tail.y === coords.row
    }))

    setIsFood(() => foods.some((food) => {
      return food.x === coords.col && food.y === coords.row
    }))
  }, [foods, snake, coords.col, coords.row])


  return (
    <div
      onClick={() => addFood({ x: coords.col, y: coords.row })}
      className={cn('w-10 h-10 p-1', isSnake && isFood ? 'p-px' : 'p-1')}
    >
      <div
        className={cn('w-full h-full rounded-sm p-px', isSnake ? 'bg-green-700' : isFood ? 'bg-red-700' : 'bg-zinc-900')}>
        <div className={cn('rounded-sm w-full h-full', isSnake ? 'shadow-tile-snake bg-tile-snake' : isFood ? 'shadow-tile-food bg-tile-food' : 'shadow-tile')}>
        </div>
      </div>
    </div>
  )
}
