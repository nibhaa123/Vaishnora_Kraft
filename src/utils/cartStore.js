const CART_STORAGE_KEY = 'vashnoracraft-cart'
const CART_EVENT = 'vashnoracraft-cart-updated'

const readCart = () => {
  if (typeof window === 'undefined') return []
  try {
    const cart = JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY) || '[]')
    return Array.isArray(cart) ? cart : []
  } catch {
    return []
  }
}

const writeCart = (cart) => {
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  window.dispatchEvent(new CustomEvent(CART_EVENT))
}

export const getCart = readCart
export const getCartCount = () => readCart().reduce((total, item) => total + item.quantity, 0)
export const addToCart = (product, quantity = 1) => {
  const cart = readCart()
  const existing = cart.find((item) => item.productId === product._id)
  if (existing) existing.quantity = Math.min(20, existing.quantity + quantity)
  else cart.push({ productId: product._id, quantity, product })
  writeCart(cart)
}
export const updateCartQuantity = (productId, quantity) => {
  const nextCart = readCart().map((item) => item.productId === productId ? { ...item, quantity: Math.max(1, Math.min(20, quantity)) } : item)
  writeCart(nextCart)
}
export const removeFromCart = (productId) => writeCart(readCart().filter((item) => item.productId !== productId))
export const clearCart = () => writeCart([])
export const cartEventName = CART_EVENT
