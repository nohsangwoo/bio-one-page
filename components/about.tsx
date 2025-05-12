"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Microscope, Brain, Dna, Database, Zap, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Microscope className="h-10 w-10 text-teal-500" />,
    title: "첨단 생명공학",
    description: "혁신적인 의료 솔루션을 개발하기 위한 최첨단 생명공학 기술 활용.",
  },
  {
    icon: <Brain className="h-10 w-10 text-purple-500" />,
    title: "AI 기반 분석",
    description: "정확한 데이터 분석과 예측을 위한 인공지능 활용.",
  },
  {
    icon: <Dna className="h-10 w-10 text-blue-500" />,
    title: "유전체 연구",
    description: "맞춤형 의학의 새로운 가능성을 열어가는 유전체 연구.",
  },
  {
    icon: <Database className="h-10 w-10 text-teal-500" />,
    title: "빅데이터 통합",
    description: "패턴과 인사이트를 식별하기 위한 방대한 데이터셋의 원활한 통합.",
  },
  {
    icon: <Zap className="h-10 w-10 text-purple-500" />,
    title: "신속한 프로토타이핑",
    description: "효율적인 프로토타이핑과 테스트 방법론을 통한 개발 가속화.",
  },
  {
    icon: <Award className="h-10 w-10 text-blue-500" />,
    title: "업계 인정",
    description: "주요 과학 기관에서 인정받은 수상 경력의 연구.",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="container mx-auto px-4" ref={ref}>
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">
            바이오AI 기술
          </span>
          의 미래를 개척합니다
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          우리의 사명은 생명공학과 인공지능의 원활한 통합을 통해 의료를 혁신하는 것입니다.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <Card className="h-full border-gray-200 hover:border-teal-300 transition-colors hover:shadow-md">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">우리의 비전</h3>
            <p className="text-gray-600 mb-6">
              우리는 생명공학과 인공지능이 조화롭게 작동하여 가장 어려운 의료 문제를 해결하고, 모든 사람이 첨단 치료에
              접근할 수 있는 세상을 꿈꿉니다.
            </p>
            <p className="text-gray-600">
              분자 생물학, 유전체학, 기계 학습 분야의 전문성을 결합하여 환자 치료와 결과를 혁신할 수 있는 획기적인
              솔루션을 개발하고 있습니다.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative h-[300px] rounded-xl overflow-hidden"
          >
            <img
              src="/futuristic-ai-biotech-lab.png"
              alt="바이오AI 기술 비전"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
