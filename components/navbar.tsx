"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navItems = [
  { name: "홈", href: "#hero" },
  { name: "소개", href: "#about" },
  { name: "연락처", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">
            바이오AI 테크
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href)
              }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-teal-600",
                scrolled ? "text-gray-700" : "text-gray-100",
              )}
            >
              {item.name}
            </a>
          ))}
          <Button
            className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white"
            onClick={() => scrollToSection("#contact")}
          >
            문의하기
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open Menu">
              <Menu className={scrolled ? "text-gray-700" : "text-gray-100"} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-6 mt-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-lg font-medium transition-colors hover:text-teal-600"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white w-full"
                onClick={() => scrollToSection("#contact")}
              >
                문의하기
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
