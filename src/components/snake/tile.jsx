'use client'

import { useState, useEffect, useMemo } from 'react'

import { useSnakeGameContext } from '@/context/snake-game-context'

export function Tile({ coords }) {
  const { snake, foods, addFood } = useSnakeGameContext()
  const [bgColor, setBgColor] = useState('bg-gray-700')

  useEffect(() => {
    const isSnake = snake.find((tail) => {
      return tail.x == coords.col && tail.y == coords.row
    })

    const isFood = foods.find((food) => {
      return food.x == coords.col && food.y == coords.row
    })

    if (isFood) {
      setBgColor('bg-red-700')
    } else if (isSnake) {
      setBgColor('bg-green-700')
    } else {
      setBgColor('bg-gray-700')
    }
  }, [foods, snake])


  return (
    <div className="w-10 h-10 p-1">
      <div onClick={() => addFood({ x: coords.col, y: coords.row })} className={`w-full h-full rounded-sm ${bgColor}`}>
      </div>
    </div>
  )
}
