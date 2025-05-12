"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
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
          연락하기
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          우리 기술에 대한 질문이 있거나 협업에 관심이 있으신가요? 연락주세요.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-teal-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">위치</h4>
                    <p className="text-gray-600">
                      서울특별시 강남구 테헤란로 123
                      <br />
                      혁신빌딩 7층
                      <br />
                      우편번호: 04532
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-teal-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">전화</h4>
                    <p className="text-gray-600">02-123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-teal-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">이메일</h4>
                    <p className="text-gray-600">info@bioaitech.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-teal-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">영업 시간</h4>
                    <p className="text-gray-600">
                      월요일 - 금요일: 오전 9:00 - 오후 6:00
                      <br />
                      토요일 - 일요일: 휴무
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6">메시지 보내기</h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  이름
                </label>
                <Input id="name" placeholder="이름을 입력하세요" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  이메일
                </label>
                <Input id="email" type="email" placeholder="이메일을 입력하세요" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                제목
              </label>
              <Input id="subject" placeholder="메시지 제목" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                메시지
              </label>
              <Textarea id="message" placeholder="메시지 내용" rows={6} />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white"
            >
              메시지 보내기
            </Button>
          </form>
        </motion.div>
      </div>

      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="rounded-xl overflow-hidden h-[400px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202405.41235483293!2d126.8212403611328!3d37.56487869999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d5c39cf%3A0x7e11eca1405bf29b!2sSeoul%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="회사 위치"
          ></iframe>
        </div>
      </motion.div>
    </div>
  )
}
