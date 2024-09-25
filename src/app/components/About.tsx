import Link from 'next/link'

import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'

import { MoveRight } from 'lucide-react'

export const About = () => {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="flex items-center justify-between md:justify-center">
        <MotionDiv
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex max-w-2xl flex-col gap-6 text-xl md:text-center sm:text-lg"
        >
          <p>
            Hello, my name is{' '}
            <span className="font-bold text-target">Wasib Zameer</span> a passionate Flutter developer with a keen eye for detail and a commitment to creating high-quality mobile applications. With over 3 years of experience in building cross-platform apps, I specialize in delivering seamless user experiences through clean, scalable code. I have a strong foundation in both frontend and backend development, utilizing technologies like Flutter, Dart, REST APIs, and Firebase to bring innovative ideas to life. My expertise extends beyond app development, as I focus on optimizing performance, implementing smooth animations, and ensuring responsiveness across different screen sizes. Driven by curiosity and a constant desire to learn, I stay updated with the latest trends in mobile development, applying new techniques to improve functionality and design. My goal is to create impactful, user-centered applications that make a difference in people’s daily lives.
          </p>
          <MotionDiv className="flex justify-start md:justify-center">
            <Link
              href="#contact"
              className="flex items-center gap-x-2 text-target transition-all hover:gap-x-3 hover:text-[#3385ff]"
            >
              Contact me <MoveRight />
            </Link>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex flex-1 justify-end pl-8 md:hidden"
        >
          <div className="w-80 pb-10">
            <div className="flex flex-wrap justify-center gap-4 opacity-70">
              <span className="h-3 w-48 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-28 rounded-full bg-target"></span>
              <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-28 rounded-full bg-target"></span>
              <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
            </div>
          </div>
        </MotionDiv>
      </div>
    </SectionContainer>
  )
}
