'use client'

import { Tile } from '@/components/snake/tile'
import { useSnakeGameContext } from '@/context/snake-game-context'

function getTileStatus(snake, foods, coords) {
  const isSnake = snake.find((part) => {
    return part.x == coords.x && part.y == coords.y
  })
  if (isSnake) {
    return 'snake'
  }

  const isFood = foods.find((food) => {
    return food.x == coords.x && food.y == coords.y
  })

  if (isFood) {
    return 'food'
  }
}

export function SnakeGrid() {
  const { gridDimension } = useSnakeGameContext()
  const _cols = Array.from({ length: gridDimension.cols }, (_, index) => index)
  const _rows = Array.from({ length: gridDimension.rows }, (_, index) => index)

  return (
    _rows.map((row) => (
      <div key={row} className="flex justify-evenly">
        {_cols.map((col) => (
          <Tile key={`${col}-${row}`} coords={{ col, row }} />
        ))}
      </div>
    ))
  )
}
