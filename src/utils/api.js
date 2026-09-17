import { getCustomer } from './auth'

export const apiFetch = (path, options = {}) => {
  const customer = getCustomer()
  const headers = new Headers(options.headers || {})
  if (customer?.token) headers.set('Authorization', `Bearer ${customer.token}`)
  return fetch(path, { ...options, headers })
}

export const readApiError = async (response, fallback) => {
  try {
    const result = await response.json()
    return result.error || fallback
  } catch {
    return fallback
  }
}
