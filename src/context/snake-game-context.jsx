'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { SnakeGrid } from '@/components/snake/grid'

const SnakeGameContext = createContext()

// Provider component to wrap the entire game and provide the game state
export const SnakeGameProvider = ({ children }) => {
  const [tileSize, setTileSize] = useState(40)
  const [gridDimension, setGridDimension] = useState({ cols: 0, rows: 0 })
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  })
  const [snake, setSnake] = useState([{ x: 5, y: 10 }, { x: 6, y: 10 }, { x: 7, y: 10 }, { x: 8, y: 10 }, { x: 9, y: 10 }])
  const [foods, setFoods] = useState([{ x: 10, y: 15 }])

  const [count, setCount] = useState(0)

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
