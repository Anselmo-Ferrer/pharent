'use client'

import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, Search, Menu, User } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
]

export default function NavBar() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 w-full flex justify-between items-center px-6 py-4 sticky top-0 z-50 shadow-sm">

      {/* LEFT — Logo + Links */}
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-[#0093c6] text-2xl font-bold tracking-tight group-hover:opacity-80 transition-opacity">
            PHARENT
          </span>
        </Link>

        {/* Main Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-[#0093c6] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* RIGHT — Search + Icons */}
      <div className="flex items-center gap-4">

        {/* Search bar (hidden on mobile) */}
        <div className="hidden md:flex relative items-center">
          <Search className="absolute left-3 top-1/2 h-4 w-4 text-gray-400 -translate-y-1/2" />
          <input
            type="search"
            placeholder="Search products..."
            className="text-black outline-0 w-[240px] lg:w-[300px] pl-10 pr-3 py-2 text-sm rounded-full border border-gray-800 focus:border-[#0093c6] focus:ring-2 focus:ring-[#0093c6]/30 placeholder:text-gray-800 transition-all duration-200"
          />
        </div>

        {/* Search icon (mobile only) */}
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition">
          <Search className="h-5 w-5 text-gray-700" />
        </button>

        {/* Cart */}
        <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition">
          <ShoppingCart className="h-5 w-5 text-gray-700" />
          {cartCount > 0 && (
            <span className="absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-[#0093c6] text-white text-[10px] font-medium flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>

        {/* User */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition">
          <User className="h-5 w-5 text-gray-700" />
        </button>

        {/* Menu (mobile only) */}
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition">
          <Menu className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </nav>
  )
}