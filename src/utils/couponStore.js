const COUPON_STORAGE_KEY = 'vashnoracraft-applied-coupon'

export const couponRules = {
  FESTIVE10: 0.1,
  GIFT20: 0.2,
  JOY15: 0.15,
}

export const getAppliedCoupon = () => {
  if (typeof window === 'undefined') return ''
  const code = window.localStorage.getItem(COUPON_STORAGE_KEY)
  return code && couponRules[code.toUpperCase()] ? code.toUpperCase() : ''
}

export const saveAppliedCoupon = (code) => {
  if (typeof window === 'undefined') return ''
  const normalized = String(code || '').trim().toUpperCase()
  const nextValue = couponRules[normalized] ? normalized : ''
  if (!nextValue) {
    window.localStorage.removeItem(COUPON_STORAGE_KEY)
    return ''
  }
  window.localStorage.setItem(COUPON_STORAGE_KEY, nextValue)
  return nextValue
}

export const clearAppliedCoupon = () => {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(COUPON_STORAGE_KEY)
}