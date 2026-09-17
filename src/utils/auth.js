const CUSTOMER_STORAGE_KEY = 'vashnoracraft-customer'

export const getCustomer = () => {
  if (typeof window === 'undefined') return null

  const storedCustomer = window.localStorage.getItem(
    CUSTOMER_STORAGE_KEY
  )

  try {
    return storedCustomer ? JSON.parse(storedCustomer) : null
  } catch {
    return null
  }
}

export const saveCustomer = (customer) => {
  if (typeof window === 'undefined') return

  window.localStorage.setItem(
    CUSTOMER_STORAGE_KEY,
    JSON.stringify(customer)
  )
}

export const clearCustomer = () => {
  if (typeof window === 'undefined') return

  window.localStorage.removeItem(CUSTOMER_STORAGE_KEY)
}

export const isAdmin = () => {
  const customer = getCustomer()
  return customer?.role === 'admin'
}
