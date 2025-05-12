"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-500 blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-purple-600 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-blue-500 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* DNA helix animation */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <svg width="300" height="500" viewBox="0 0 200 400" className="opacity-20">
          <motion.path
            d="M100,0 C150,40 50,80 100,120 C150,160 50,200 100,240 C150,280 50,320 100,360 C150,400 50,440 100,480"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M100,0 C50,40 150,80 100,120 C50,160 150,200 100,240 C50,280 150,320 100,360 C50,400 150,440 100,480"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={i}
              cx="100"
              cy={i * 40}
              r="5"
              fill="rgba(255,255,255,0.8)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 1 }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto h-full flex flex-col justify-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
              바이오테크 & AI
            </span>
            로 의료 혁신
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            최첨단 생명공학과 인공지능을 결합하여 미래 의료 문제에 대한 혁신적인 솔루션을 개발하고 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white px-8 py-6 text-lg"
              onClick={() => {
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              기술 알아보기
            </Button>
            <Button
              variant="outline"
              className="border-gray-400 text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              연락하기
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
