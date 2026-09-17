import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr] lg:px-16">
        <div>
          <Link to="/" className="inline-block transition-opacity hover:opacity-80" aria-label="Go to homepage">
            <img src={assets.logo} alt="Logo" className="h-10 w-10 object-contain brightness-0 invert" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">Customized gifts and hampers for marriage, couples, festivals, and kids, with free delivery within 4–5 km.</p>
          <div className="mt-6 flex items-center gap-4">
            <a
  href="https://wa.me/917991157761"
  target="_blank"
  rel="noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="text-sm font-semibold text-slate-300 transition-colors hover:text-teal-300"
>
  WhatsApp
</a>
            <a href="https://www.instagram.com/vaishnorakraft/" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram" className="text-sm font-semibold text-slate-300 transition-colors hover:text-teal-300">Instagram</a>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Gift guide</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/collection" className="transition-colors hover:text-teal-300">All products</Link></li>
            <li><Link to="/collection?category=Festivals" className="transition-colors hover:text-teal-300">Festival gifts</Link></li>
            <li><Link to="/collection?category=Kids" className="transition-colors hover:text-teal-300">Birthday gifts</Link></li>
            <li><Link to="/collection?category=Couples" className="transition-colors hover:text-teal-300">Anniversary gifts</Link></li>
            <li><Link to="/collection?category=Customized" className="transition-colors hover:text-teal-300">Decorative ideas</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Customer care</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/about" className="transition-colors hover:text-teal-300">About us</Link></li>
            <li><Link to="/orders" className="transition-colors hover:text-teal-300">Track an order</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-teal-300">Contact support</Link></li>
            <li><Link to="/cart" className="transition-colors hover:text-teal-300">Gift bag</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Our location</h2>
          <p className="mt-5 text-sm leading-6 text-slate-400">Based in India<br />Delivering gifts across the country.</p>
          <a href="https://www.google.com/maps/search/India" target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-medium text-teal-300 transition-colors hover:text-white">View on map -&gt;</a>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Stay in the loop</h2>
          <p className="mt-5 text-sm leading-6 text-slate-400">Get festival gift ideas, new arrivals, and special occasion offers.</p>
          <form onSubmit={(event) => event.preventDefault()} className="mt-5 flex border-b border-slate-600 focus-within:border-teal-300">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input id="footer-email" type="email" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none" />
            <button type="submit" className="px-2 text-sm font-semibold text-teal-300 transition-colors hover:text-white" aria-label="Subscribe to newsletter">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p>© 2026 Vaishnora Kraft. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="transition-colors hover:text-slate-300">Privacy</a>
            <a href="/terms" className="transition-colors hover:text-slate-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
