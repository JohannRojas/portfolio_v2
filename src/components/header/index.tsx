import { AnimatePresence } from 'framer-motion'

export default function Header() {
  return (
    <>
      <div className='absolute flex z-10 top-0 text-black p-9 justify-between w-full font-light box-border items-center'>
        <div className='flex cursor-pointer'>{/**Logo**/ }
          <p className='m-0 transition-all duration-500 ease-in-out hover:rotate-[360deg]'>©</p>{/**Copyright**/ }
          <div className='flex relative overflow-hidden whitespace-nowrap ml-1 transition-all duration-500 ease-in-out hover:pr-8'>{/**Name**/ }
            <p className='relative transition-transform duration-500 ease-in-out hover:translate-x-[-100%] '>Code by</p>{/**Code by**/ }
            <p className='relative transition-transform duration-500 ease-in-out pl-[0.3em] hover:translate-x-[-65px] ' >Jhann</p>{/**Jhann**/ }
            <p className='transition-transform duration-500 ease-in-out absolute left-32 pl-[0.3em] hover:translate-x-[-65px] '>Rojas</p>{/**Rojas**/ }
          </div>
        </div>
        <div>
          <div>
            <a>Work</a>
            <div></div>
          </div>
          <div>
            <a>About</a>
            <div></div>
          </div>
          <div>
            <a>Contact</a>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div></div>
        </div>
      </div>
      <AnimatePresence mode='wait' >
        {/* { isActive && <Nav /> } */ }
      </AnimatePresence>
    </>
  )
}