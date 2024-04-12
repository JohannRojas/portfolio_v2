'use client'

import Landing from '@/components/landing'
import Modal from '@/components/modal'
import Project from '@/components/project'
import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    title: "Colmena Seguros",
    src: "mockup-colmena.png",
    color: '#FFD700'
  },
  {
    title: "Keralty, Sanitas",
    src: "mockup-colmena.png",
    color: '#8C8C8C'
  },
  {
    title: "Secretaria de movilidad Bogotá",
    src: "mockup-colmena.png",
    color: '#000000'
  }
]

export default function Home() {

  const [modal, setModal] = useState({ active: false, index: 0 })


  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll()
      }
    )()

  }, [])


  return (
    <main>
      <Landing />
    </main>
    // <main className="flex h-screen items-center justify-center">
    //   <div className="w-[1000px] flex flex-col items-center justify-center">
    //     {
    //       projects.map((project, index) => (
    //         <Project index={ index } title={ project.title } setModal={ setModal } key={ index } />
    //       ))
    //     }
    //   </div>
    //   <Modal modal={ modal } projects={ projects } />
    // </main>
  )
}
