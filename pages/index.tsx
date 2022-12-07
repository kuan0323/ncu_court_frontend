import Head from 'next/head'
import Image from 'next/image'
import AppBar from '../components/AppBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <AppBar value={'example value'}><p>example children</p></AppBar>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}
