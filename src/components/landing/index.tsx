/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Landing(): JSX.Element {

  const firstText = useRef(null)
  const secondText = useRef<HTMLParagraphElement>(null)
  const slider = useRef(null)

  let xPercent = 0
  let direction = -1

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    }
    else if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate)
    xPercent += 0.1 * -1
  }


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,

        onUpdate: e => direction = e.direction * -1
      },
      x: '-500px'
    })
    requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    gsap.set(secondText.current, { left: secondText.current?.getBoundingClientRect().width })
    requestAnimationFrame(animate)
  }, [animate])



  return (
    <main className='relative flex h-screen mb-[100vh] overflow-hidden'>
      <Image
        src='/images/upscale.png'
        alt='profile'
        fill
        className='object-cover'
      />

      <div className='absolute top-[calc(100vh-350px)]'>
        <div ref={ slider } className='relative whitespace-nowrap'>
          <p ref={ firstText } className='relative m-0 text-white text-[230px] font-medium pr-14'>Freelance Developer -</p>
          <p ref={ secondText } className='absolute left-full top-0 m-0 text-white text-[230px] font-medium pr-14'>Freelance Developer -</p>

        </div>
      </div>
    </main>
  )
}