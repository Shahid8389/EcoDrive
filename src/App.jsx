import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Background from './Components/Background';
import Hero from './Components/Hero';

function App() {
  let heroData = [
    {
      text1: "Dive into",
      text2: "what you love",
    },
    {
      text1: "Indulge",
      text2: "your passion",
    },
    {
      text1: "Give into",
      text2: "your passion",
    },
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count)=> {return count===2?0:count+1});
    }, 3000);
  }, [])
  

  return (
    <>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero 
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </>
  )
}

export default App
