'use client'

import { useState, useEffect } from 'react'
import { SnakeGameProvider, useSnakeGameContext } from '@/context/snake-game-context'

export function SnakeHouse() {
  return (
    <SnakeGameProvider>
      <SnakeGrid />
    </SnakeGameProvider>
  )
}

function SnakeGrid() {
  const { gridDimension } = useSnakeGameContext()
  const _cols = Array.from({ length: gridDimension.cols }, (_, index) => index)
  const _rows = Array.from({ length: gridDimension.rows }, (_, index) => index)

  return (
    <div className="bg-grey-800 min-h-screen max-h-screen min-w-screen max-w-screen overflow-hidden flex flex-col justify-evenly absolute">
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
      <div onClick={() => addFood({ x: coords.col, y: coords.row })} className={'w-full h-full rounded-sm'}>
      </div>
    </div>
  )
}
