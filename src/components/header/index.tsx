import { AnimatePresence } from 'framer-motion'

export default function index() {
  return (
    <>
      <div className='absolute flex z-10 top-0 text-white p-9 justify-between w-full font-light box-border items-center'>
        <div className='flex cursor-pointer'>
          <p className='m-0 transition-all duration-500'>©</p>
          <div>
            <p>Code by</p>
            <p>Jhann</p>
            <p>Rojas</p>
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