'use client'
import styles from './style.module.css'

interface Props {
  index: number
  title: string
  setModal: Function

}

export default function Project({ index, title, setModal }: Props) {
  return (
    <div
      onMouseEnter={ () => { setModal({ active: true, index }) } }
      onMouseLeave={ () => { setModal({ active: false, index }) } }
      className={ styles.project }
    >
      <h2>{ title }</h2>
      <p>Design & Development</p>
    </div>
  )
}