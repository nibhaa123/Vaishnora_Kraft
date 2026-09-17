const WISHLIST_STORAGE_KEY = 'vashnoracraft-wishlist'

export const getWishlist = () => {
  if (typeof window === 'undefined') return []
  try {
    const wishlist = JSON.parse(window.localStorage.getItem(WISHLIST_STORAGE_KEY) || '[]')
    return Array.isArray(wishlist) ? wishlist : []
  } catch {
    return []
  }
}

export const saveWishlist = (items) => {
  window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items))
  window.dispatchEvent(new CustomEvent('vashnoracraft-wishlist-updated'))
}

export const isWishlisted = (productId) => getWishlist().includes(productId)

export const toggleWishlist = (productId) => {
  const current = getWishlist()
  const next = current.includes(productId) ? current.filter((item) => item !== productId) : [...current, productId]
  saveWishlist(next)
  return next
}

export const removeFromWishlist = (productId) => {
  const next = getWishlist().filter((item) => item !== productId)
  saveWishlist(next)
  return next
}

export const getWishlistCount = () => getWishlist().length
