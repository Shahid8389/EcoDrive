import React from 'react'
import './Hero.css'

const Hero = ({ heroData, heroCount, setHeroCount, setPlayStatus, playStatus }) => {

  const changeVideoIcon = (evt)=> {

    if (evt.target.classList == 'bi bi-play-circle') {
      evt.target.classList.remove('bi', 'bi-play-circle');
      evt.target.classList.add('bi', 'bi-pause-circle');
    }
    else{
      evt.target.classList.remove('bi', 'bi-pause-circle');
      evt.target.classList.add('bi', 'bi-play-circle');
    }
    
  }

  let changePlayStatus = ()=> {
    setPlayStatus(!playStatus);
  }

  return (
    <div className='hero-container'>
      <p className='hero-text'>{heroData.text1}</p>
      <p className='hero-text'>{heroData.text2}</p>

      <div className="arrow">
        <span>Explore the features <i className="bi bi-arrow-right-circle-fill"></i></span>
        
      </div>

      <div className="dots-video-btn">
        <ul>
          <li onClick={()=>setHeroCount(0)} className={heroCount === 0? 'orange' : ''} ></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount === 1? 'orange' : ''} ></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount === 2? 'orange' : ''} ></li>
        </ul>

        <div className="play-pause-btn">
          <i onClick={ (evt)=>{changePlayStatus(); changeVideoIcon(evt)} } className="bi bi-play-circle"></i>
          <span>See the video</span>
        </div>

      </div>

    </div>
  )
}

export default Hero