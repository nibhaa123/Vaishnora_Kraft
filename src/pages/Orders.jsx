import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { getCustomer } from '../utils/auth'
import { apiFetch, readApiError } from '../utils/api'
import { formatCurrency } from '../utils/format'

const Orders = () => {
  const customer = getCustomer()
  const [orders, setOrders] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    if (!customer) return
    apiFetch('/api/orders').then(async (response) => {
      if (!response.ok) throw new Error(await readApiError(response, 'Could not load orders'))
      return response.json()
    }).then(setOrders).catch((requestError) => setError(requestError.message))
  }, [customer])

  const trackingStages = ['placed', 'processing', 'shipped', 'delivered']

  if (!customer) return <Navigate to="/login" replace />

  return (
    <main className="mx-auto max-w-5xl px-6 py-14 sm:px-10 lg:px-16">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">Your account</p>
      <h1 className="mt-3 font-serif text-4xl text-slate-950">My orders</h1>
      {error && <p role="alert" className="mt-6 text-sm text-red-700">{error}</p>}
      {!error && !orders.length ? <div className="mt-10 border border-dashed border-slate-300 bg-white px-6 py-16 text-center"><h2 className="font-serif text-2xl">No orders yet</h2><p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">Your future favourites will appear here once you place your first order.</p><Link to="/collection" className="mt-7 inline-block bg-teal-800 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-950">Explore collection</Link></div> : <div className="mt-10 space-y-6">{orders.map((order) => {
        const currentIndex = trackingStages.indexOf(order.status)
        return <article key={order.id} className="border border-slate-200 bg-white p-6">
          <div className="flex flex-wrap justify-between gap-3">
            <div>
              <h2 className="font-semibold">Order #{order.id.slice(-8)}</h2>
              <p className="mt-1 text-sm text-slate-500">{new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
            <span className="bg-teal-50 px-3 py-1 text-sm font-semibold capitalize text-teal-800">{order.status}</span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            {trackingStages.map((stage, index) => {
              const stageActive = index <= currentIndex
              return <div key={stage} className={`rounded-lg border px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] ${stageActive ? 'border-teal-700 bg-teal-50 text-teal-800' : 'border-slate-200 bg-slate-50 text-slate-400'}`}>
                {stage}
              </div>
            })}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">{order.items.map((item) => <p key={item.productId} className="text-sm text-slate-600">{item.name} x {item.quantity}</p>)}</div>
          <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-semibold">Total {formatCurrency(order.total)}</p>
        </article>
      })}</div>}
    </main>
  )
}

export default Orders