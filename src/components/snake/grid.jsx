'use client'

import { Tile } from '@/components/snake/tile'
import { useSnakeGameContext } from '@/context/snake-game-context'

export function SnakeGrid() {
  const { gridDimension } = useSnakeGameContext()
  const _cols = Array.from({ length: gridDimension.cols }, (_, index) => index)
  const _rows = Array.from({ length: gridDimension.rows }, (_, index) => index)

  return (
    <div className="bg-grey-800 min-h-screen max-h-screen overflow-hidden flex flex-col justify-evenly">
      {_rows.map((row) => (
        <div key={row} className="flex justify-evenly">
          {_cols.map((col) => (
            <Tile key={`${col}-${row}`} coords={{ col, row }} />
          ))}
        </div>)
      )}
    </div>
  )
}
