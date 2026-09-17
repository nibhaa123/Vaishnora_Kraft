const ADDRESS_STORAGE_KEY = 'vashnoracraft-addresses'

const generateAddressId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export const getSavedAddresses = () => {
  if (typeof window === 'undefined') return []
  try {
    const addresses = JSON.parse(window.localStorage.getItem(ADDRESS_STORAGE_KEY) || '[]')
    return Array.isArray(addresses) ? addresses : []
  } catch {
    return []
  }
}

export const saveAddress = (address) => {
  if (typeof window === 'undefined') return null

  const normalized = {
    id: address.id || generateAddressId(),
    label: address.label || 'Home',
    firstName: address.firstName || '',
    lastName: address.lastName || '',
    email: address.email || '',
    phone: address.phone || '',
    address: address.address || '',
    city: address.city || '',
    state: address.state || '',
    pinCode: address.pinCode || '',
  }

  const current = getSavedAddresses()
  const next = [normalized, ...current.filter((item) => item.id !== normalized.id)]
  window.localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(next))
  return normalized
}

export const removeAddress = (addressId) => {
  if (typeof window === 'undefined') return []
  const next = getSavedAddresses().filter((address) => address.id !== addressId)
  window.localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(next))
  return next
}
