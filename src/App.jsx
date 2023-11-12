import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className="text-3xl flex justify-center font-bold underline">
      Hello world!
    </h1> */}
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Expertise/>
      <Footer/>
    </>
  );
};

export default App
