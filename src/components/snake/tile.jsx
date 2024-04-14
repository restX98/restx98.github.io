'use client'

import { useState, useEffect } from 'react'

import { useSnakeGameContext } from '@/context/snake-game-context'

export function Tile({ coords }) {
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
