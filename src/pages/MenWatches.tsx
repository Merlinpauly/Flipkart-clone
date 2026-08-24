import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Product } from '../types/Product'

function MenWatches() {

    const [menwatch ,setMenWatch ] = useState<Product>[]([])

  return (
    <>
    <Header/>

    <Footer/>
    </>
  )
}

export default MenWatches