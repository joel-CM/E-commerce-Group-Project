import Head from 'next/head'
import CaptionCarousel from '../components/Banner/banner.tsx'

import NavBar from '../components/Navbar/navBar'

import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Gamerland</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <CaptionCarousel/>
      
     
     

    </>
  )
}