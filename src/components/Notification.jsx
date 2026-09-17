import React, { useEffect, useState } from 'react'
import { apiFetch } from '../utils/api'

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const loadNotifications = async () => {
    try {
      setLoading(true)

      const response = await apiFetch('/api/notifications')

      if (!response.ok) {
        throw new Error('Failed to load notifications')
      }

      const data = await response.json()

      setNotifications(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const loadUnreadCount = async () => {
    try {
      const response = await apiFetch(
        '/api/notifications/unread-count'
      )

      if (!response.ok) return

      const data = await response.json()

      setUnreadCount(data.count || 0)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadUnreadCount()

    const interval = setInterval(() => {
      loadUnreadCount()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const handleOpen = () => {
    setOpen((previous) => !previous)

    if (!open) {
      loadNotifications()
    }
  }

  const markAsRead = async (notificationId) => {
    try {
      const response = await apiFetch(
        `/api/notifications/${notificationId}/read`,
        {
          method: 'PATCH'
        }
      )

      if (!response.ok) return

      setNotifications((previous) =>
        previous.map((notification) =>
          notification._id === notificationId
            ? { ...notification, isRead: true }
            : notification
        )
      )

      setUnreadCount((previous) =>
        Math.max(0, previous - 1)
      )
    } catch (error) {
      console.error(error)
    }
  }

  const markAllAsRead = async () => {
    try {
      const response = await apiFetch(
        '/api/notifications/read-all',
        {
          method: 'PATCH'
        }
      )

      if (!response.ok) return

      setNotifications((previous) =>
        previous.map((notification) => ({
          ...notification,
          isRead: true
        }))
      )

      setUnreadCount(0)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleOpen}
        className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10"
        aria-label="Notifications"
      >
        <span className="text-xl">🔔</span>

        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-3 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-xl">
          
          <div className="flex items-center justify-between border-b px-4 py-3">
            <div>
              <h3 className="font-semibold">
                Notifications
              </h3>

              {unreadCount > 0 && (
                <p className="text-xs text-slate-500">
                  {unreadCount} unread
                </p>
              )}
            </div>

            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllAsRead}
                className="text-xs font-medium text-teal-700 hover:text-teal-900"
              >
                Mark all read
              </button>
            )}
          </div>

          <div className="max-h-96 overflow-y-auto">
            {loading ? (
              <div className="p-6 text-center text-sm text-slate-500">
                Loading...
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-8 text-center">
                <div className="mb-2 text-3xl">
                  🔕
                </div>

                <p className="text-sm font-medium">
                  No notifications
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  You're all caught up.
                </p>
              </div>
            ) : (
              notifications.map((notification) => (
                <button
                  key={notification._id}
                  type="button"
                  onClick={() => {
                    if (!notification.isRead) {
                      markAsRead(notification._id)
                    }
                  }}
                  className={`w-full border-b px-4 py-3 text-left transition ${
                    notification.isRead
                      ? 'bg-white'
                      : 'bg-teal-50'
                  } hover:bg-slate-50`}
                >
                  <div className="flex gap-3">
                    <div className="text-xl">
                      {notification.type === 'order'
                        ? '📦'
                        : '🔔'}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">
                        {notification.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-600">
                        {notification.message}
                      </p>

                      <p className="mt-2 text-[11px] text-slate-400">
                        {new Date(
                          notification.createdAt
                        ).toLocaleString()}
                      </p>
                    </div>

                    {!notification.isRead && (
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                    )}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default NotificationBell