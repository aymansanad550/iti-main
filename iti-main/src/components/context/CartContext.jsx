import React, { createContext, useEffect, useMemo, useState } from 'react'

const getStorageValue = (key, fallback) => {
  if (typeof window === 'undefined') return fallback

  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : fallback
  } catch {
    return fallback
  }
}

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => getStorageValue('cartItems', []))
  const [favorites, setFavorites] = useState(() => getStorageValue('favorites', []))

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((product) => product.id === item.id)

      if (existingItem) {
        return prevItems.map((product) =>
          product.id === item.id
            ? { ...product, quantity: (product.quantity || 1) + 1 }
            : product
        )
      }

      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    )
  }

  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const addToFavorites = (item) => {
    setFavorites((prevItems) => {
      const alreadyFavorite = prevItems.some((product) => product.id === item.id)
      return alreadyFavorite ? prevItems : [...prevItems, item]
    })
  }

  const removeFromFavorites = (productId) => {
    setFavorites((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart,
      favorites,
      addToFavorites,
      removeFromFavorites,
    }),
    [cartItems, favorites]
  )

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}