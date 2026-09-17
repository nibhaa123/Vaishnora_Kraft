
import React from 'react'

const Contact = () => {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-14 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Hero Section */}
        <section className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-700">
              We are here to help
            </p>

            <h1 className="mt-4 font-serif text-5xl leading-tight text-slate-950 sm:text-6xl">
              Let's make your
              <span className="block text-teal-800">
                moments special.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">
              Have a question about your gift, delivery, or an order?
              We'd love to hear from you. Send us a message and our
              team will get back to you within one business day.
            </p>

            {/* Contact Info */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-lg">
                  📍
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                  Serving you from
                </p>

                <p className="mt-1 font-serif text-xl text-slate-950">
                  India
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Nationwide gift delivery available.
                </p>
              </div>

              <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-lg">
                  ✉️
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                  Email us
                </p>

                <p className="mt-1 break-all font-serif text-lg text-slate-950">
                  hello@vaishnorakraft.com
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  We usually reply within one business day.
                </p>
              </div>

            </div>

            {/* Social Media */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                Follow us
              </p>

              <h2 className="mt-2 font-serif text-2xl text-slate-950">
                Stay connected with us
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Follow Vaishnora Kraft for new collections, gifting ideas,
                offers, and special moments.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:bg-teal-50"
                >
                  📸
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:bg-teal-50"
                >
                  f
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:bg-teal-50"
                >
                  💬
                </a>

                {/* Pinterest */}
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Pinterest"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:bg-teal-50"
                >
                  P
                </a>

              </div>
            </div>

          </div>


          {/* Contact Form */}
          <div className="rounded-3xl border border-teal-100 bg-white p-7 shadow-xl shadow-teal-900/5 sm:p-9">

            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                Contact us
              </p>

              <h2 className="mt-2 font-serif text-3xl text-slate-950">
                Send us a message
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill in the details below and we'll get back to you soon.
              </p>
            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Your name
                </label>

                <input
                  required
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-stone-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Email address
                </label>

                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-stone-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Subject
                </label>

                <select
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-stone-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-100"
                >
                  <option>Order enquiry</option>
                  <option>Delivery question</option>
                  <option>Product enquiry</option>
                  <option>General question</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  How can we help?
                </label>

                <textarea
                  required
                  rows="5"
                  placeholder="Tell us how we can help..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-stone-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-teal-800 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-900/10 transition hover:bg-teal-950 hover:shadow-lg"
              >
                Send message
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

            </form>
          </div>

        </section>


        {/* Social CTA */}
        <section className="mt-16 overflow-hidden rounded-3xl border border-teal-100 bg-teal-900 px-6 py-10 text-center sm:px-10">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-200">
            Join our community
          </p>

          <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
            More gifts. More moments. More memories.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-teal-100/80">
            Discover gifting inspiration, festive ideas and our latest
            collections on social media.
          </p>

          <div className="mt-6 flex justify-center gap-3">

            <a
              href="https://www.instagram.com/vaishnorakraft"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-teal-900 transition hover:bg-teal-50"
            >
              Instagram  → 
            </a>

            <a
              href="https://wa.me/917991157761"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-teal-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
             Whatsapp   → 
            </a>

          </div>

        </section>

      </div>
    </main>
  )
}

export default Contact

