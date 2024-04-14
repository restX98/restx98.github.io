'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { SnakeGrid } from '@/components/snake/grid'
import { useInterval } from '@/lib/utils'

const SnakeGameContext = createContext()

const Directions = {
  UP: 'UP',
  RIGHT: 'RX',
  DOWN: 'DW',
  LEFT: 'LX'
}

// Provider component to wrap the entire game and provide the game state
export const SnakeGameProvider = ({ children }) => {
  const [tileSize, setTileSize] = useState(40)
  const [gridDimension, setGridDimension] = useState({ cols: 0, rows: 0 })
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  })
  const [snake, setSnake] = useState([{ x: 9, y: 10 }, { x: 8, y: 10 }, { x: 7, y: 10 }, { x: 6, y: 10 }, { x: 5, y: 10 }])
  const [foods, setFoods] = useState([{ x: 10, y: 15 }])

  const [direction, setDirection] = useState(Directions.RIGHT)
  const [changeCount, setChangeCount] = useState(5)

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    const cols = Math.floor(windowSize.width / (tileSize))
    const rows = Math.floor(windowSize.height / (tileSize))
    setGridDimension(() => ({ rows, cols }))

    return () => window.removeEventListener('resize', handleResize)
  }, [windowSize.width, windowSize.height, tileSize])

  const addFood = (newFood) => {
    setFoods(prevFoods => [...prevFoods, newFood])
    console.log('Foods', foods)
  }

  const addSnakeTail = () => {
    setSnake(prevSnake => [...prevSnake, prevSnake.at(-1)])
  }

  const pickRandomDirection = () => {
    if (direction === Directions.UP || direction === Directions.DOWN) {
      return [Directions.LEFT, Directions.RIGHT].at(Math.floor(Math.random() * 2))
    } else {
      return [Directions.UP, Directions.DOWN].at(Math.floor(Math.random() * 2))
    }
  }

  const updateDirection = () => {
    setChangeCount(prev => prev - 1)

    if (changeCount === 0) {
      setChangeCount(Math.floor(Math.random() * 15) + 1)
      setDirection(pickRandomDirection())
    }
  }

  const getInRangeValue = (value, max) => {
    const range = max + 1
    return (value % range + range) % range
  }

  const getNewHead = () => {
    const head = snake.at(0)
    switch (direction) {
      case 'UP':
        return { x: head.x, y: getInRangeValue(head.y - 1, gridDimension.rows - 1) }
      case 'RX':
        return { x: getInRangeValue(head.x + 1, gridDimension.cols - 1), y: head.y }
      case 'DW':
        return { x: head.x, y: getInRangeValue(head.y + 1, gridDimension.rows - 1) }
      case 'LX':
        return { x: getInRangeValue(head.x - 1, gridDimension.cols - 1), y: head.y }
      default:
        return { x: getInRangeValue(head.x + 1, gridDimension.cols - 1), y: head.y }
    }
  }

  const updateSnake = () => {
    const tail = snake.at(-1)
    const isDigested = foods.findIndex((f) => f.x === tail.x && f.y === tail.y)

    if (isDigested !== -1) {
      setFoods((prevFood) => prevFood.filter((_, i) => i !== isDigested))
      addSnakeTail()
    }

    updateDirection()
    const newHead = getNewHead()

    setSnake((prevSnake) => {
      const newSnake = [newHead, ...prevSnake.slice(0, -1)]
      return newSnake
    })
  }

  useInterval(() => {
    updateSnake()
  }, 150)

  return (
    <SnakeGameContext.Provider value={{ tileSize, gridDimension, snake, foods, addFood }}>
      <SnakeGrid />
      {children}
    </SnakeGameContext.Provider>
  )
}

export function useSnakeGameContext() {
  const context = useContext(SnakeGameContext)
  if (!context) {
    throw new Error(
      'useSnakeGameContext must be used within a SnakeGameContext'
    )
  }
  return context
}
