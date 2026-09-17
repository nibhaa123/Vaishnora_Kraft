
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'
import { cartEventName, getCartCount } from '../utils/cartStore'
import { getWishlistCount } from '../utils/wishlistStore'

const Navbar = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(getCartCount())
  const [wishlistCount, setWishlistCount] = useState(getWishlistCount())

  const [search, setSearch] = useState(
    searchParams.get('search') || ''
  )

  // Keep search input synchronized with URL
  useEffect(() => {
    setSearch(searchParams.get('search') || '')
  }, [searchParams])

  // Cart and wishlist updates
  useEffect(() => {
    const updateCart = () => {
      setCartCount(getCartCount())
    }

    const updateWishlist = () => {
      setWishlistCount(getWishlistCount())
    }

    window.addEventListener(cartEventName, updateCart)
    window.addEventListener(
      'vashnoracraft-wishlist-updated',
      updateWishlist
    )

    return () => {
      window.removeEventListener(cartEventName, updateCart)
      window.removeEventListener(
        'vashnoracraft-wishlist-updated',
        updateWishlist
      )
    }
  }, [])

  const navigation = [
    { label: 'Home', path: '/' },
    { label: 'Gift Collection', path: '/collection' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  const linkClasses = ({ isActive }) =>
    `border-b-2 py-2 transition-colors ${
      isActive
        ? 'border-yellow-300 text-white'
        : 'border-transparent text-teal-100 hover:border-yellow-200 hover:text-white'
    }`

  // Search submit
  const handleSearch = (event) => {
    event.preventDefault()

    const query = search.trim()

    if (query) {
      navigate(`/collection?search=${encodeURIComponent(query)}`)
    } else {
      navigate('/collection')
    }
  }

  return (
    <nav className="relative border-b border-teal-700 bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-900 text-white shadow-lg shadow-teal-900/10">

      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:flex-nowrap sm:gap-4 sm:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="Go to homepage"
        >
          <img
            src={assets.logo}
            alt="Logo"
            className="h-9 w-9 rounded-full object-cover ring-2 ring-white/30"
          />

          <div className="hidden sm:block">
            <div className="text-lg font-bold italic tracking-tight text-white">
              Vaishnora Kraft
              <span className="text-yellow-300">.</span>
            </div>

            <div className="text-[10px] uppercase tracking-[0.25em] text-teal-100">
              Curated gifting
            </div>
          </div>
        </NavLink>
        

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="order-3 flex basis-full items-center overflow-hidden rounded-full border border-white/20 bg-white/95 shadow-sm sm:order-none sm:max-w-xl sm:flex-1 sm:basis-auto"
        >
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search gifts, hampers and special occasions"
            className="min-w-0 flex-1 px-4 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
            aria-label="Search products"
          />

          <button
            type="submit"
            className="flex min-h-11 w-12 shrink-0 items-center justify-center text-teal-800 hover:bg-teal-50"
            aria-label="Submit search"
          >
            <img
              src={assets.search_icon}
              alt=""
              className="h-5 w-5"
            />
          </button>
        </form>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-6 text-sm font-medium xl:flex">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={linkClasses}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-1 sm:gap-3">

          {/* Account */}
          <div className="group relative">
            <button
              type="button"
              className="rounded-full p-2 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-200"
              aria-label="Open account menu"
            >
              <img
                className="h-6 w-6 brightness-0 invert"
                src={assets.profile_icon}
                alt=""
              />
            </button>

            <div className="invisible absolute right-0 top-full z-10 w-44 translate-y-2 rounded-xl border border-slate-100 bg-white py-2 text-sm text-slate-700 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

              <NavLink
                to="/login"
                className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-800"
              >
                Customer login
              </NavLink>

              <NavLink
                to="/register"
                className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-800"
              >
                Create account
              </NavLink>

              <NavLink
                to="/orders"
                className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-800"
              >
                Orders
              </NavLink>

              <NavLink
                to="/login?role=admin"
                className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-800"
              >
                Admin login
              </NavLink>

            </div>
          </div>

          {/* Wishlist */}
          <NavLink
            to="/collection"
            className="relative rounded-full p-2 hover:bg-white/10"
            aria-label="View favorites"
          >
            <span className="text-lg">♡</span>

            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-yellow-300 px-1 text-[10px] font-bold text-teal-900">
              {wishlistCount}
            </span>
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className="relative rounded-full p-2 hover:bg-white/10"
            aria-label="View cart"
          >
            <img
              src={assets.cart_icon}
              alt=""
              className="h-5 w-5 brightness-0 invert"
            />

            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-yellow-300 px-1 text-[10px] font-bold text-teal-900">
              {cartCount}
            </span>
          </NavLink>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-2 hover:bg-white/10 xl:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <img
              src={
                menuOpen
                  ? assets.cross_icon
                  : assets.menu_icon
              }
              alt=""
              className="h-5 w-5 brightness-0 invert"
            />
          </button>

        </div>
      </div>

      {/* Category navigation */}
      <div className="hidden items-center justify-center gap-10 border-t border-teal-100/20 bg-white/5 py-3 text-sm font-medium text-teal-50 xl:flex">

        <NavLink
          to="/collection?category=Festival Gifts"
          className="transition-colors hover:text-yellow-200"
        >
          Festival Gifts
        </NavLink>

        <NavLink
          to="/collection?category=Birthday Gifts"
          className="transition-colors hover:text-yellow-200"
        >
          Birthday Gifts
        </NavLink>

        <NavLink
          to="/collection?category=Wedding Gifts"
          className="transition-colors hover:text-yellow-200"
        >
          Wedding Gifts
        </NavLink>

        <NavLink
          to="/collection?category=Decorative Ideas"
          className="transition-colors hover:text-yellow-200"
        >
          Decorative Ideas
        </NavLink>

        <NavLink
          to="/collection?bestseller=true"
          className="transition-colors hover:text-yellow-200"
        >
          Best Sellers
        </NavLink>

        <NavLink
          to="/about"
          className="transition-colors hover:text-yellow-200"
        >
          About Us
        </NavLink>

      </div>

      {/* Mobile menu */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } border-t border-teal-700 bg-teal-900/95 px-5 pb-4 xl:hidden`}
      >
        <ul className="space-y-1 pt-2 text-sm font-medium">

          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-teal-50 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </NavLink>
            </li>
          ))}

        </ul>
      </div>

    </nav>
  )
}

export default Navbar