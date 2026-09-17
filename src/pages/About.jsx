import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <main><section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-20"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">Our point of view</p><h1 className="mt-4 font-serif text-5xl leading-tight text-slate-950">Gifting with feeling.</h1><p className="mt-6 max-w-lg text-base leading-7 text-slate-600">Vaishnora Kraft helps you find customized gifts and hampers for marriage, couples, festivals, and kids.</p><Link to="/collection" className="mt-8 inline-block bg-teal-800 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-950">Explore gift ideas</Link></div><img src={assets.giftHamperImg} alt="Customized gift hamper collection" className="h-full max-h-[560px] w-full object-cover" /></section><section className="border-y border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-3 lg:px-16"><div><h2 className="font-serif text-2xl">Customized hampers</h2><p className="mt-3 text-sm leading-6 text-slate-500">Thoughtful combinations prepared for the person receiving them.</p></div><div><h2 className="font-serif text-2xl">For every occasion</h2><p className="mt-3 text-sm leading-6 text-slate-500">Marriage, couples, festivals, kids, and meaningful celebrations.</p></div><div><h2 className="font-serif text-2xl">Local delivery</h2><p className="mt-3 text-sm leading-6 text-slate-500">Free home delivery within 4–5 km for nearby customers.</p></div></div></section></main>
  )
}

export default About