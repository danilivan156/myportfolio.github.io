import React, { useState, useEffect, createRef } from 'react'
import './App.scss'
import OverlaySideRight from './overlay-sides/OverlaySideRight'
import OverlaySideLeft from './overlay-sides/OverlaySideLeft'
import Fullpage from './fullpage/Fullpage'
import Globe from './components/Globe'

const globe = createRef()

const App = () => {
  const [hitBottom, setHitBottom] = useState(true);

  let animateGlobe = !hitBottom ? 'animate__fadeIn animate__delay-3s' : 'animate__fadeOutDownBig animate_slower'

  useEffect(() => {
    
    return () => {
    if(hitBottom) {
      globe.current.classList.add('sendFront')
      globe.current.classList.remove('sendBack')
      
    } else {
      setTimeout(() => {
        globe.current.classList.add('sendBack')
        globe.current.classList.remove('sendFront')
      }, 1000)
    }
    }
  }, [hitBottom])

  return (
    <div className="App">
      <OverlaySideLeft />
      <Fullpage
        hitBottom={hitBottom}
        setHitBottom={setHitBottom}
      />
      
        <div ref={globe} className="contact_globe">
        <div className={`globe_wrap animate__animated ${animateGlobe}`} style={{'--animate-duration': '3000ms'}}>
          <Globe />
        </div>
      </div>
      <OverlaySideRight hitBottom={hitBottom} />
      <div className="mobile_nav_bg"></div>
    </div>
  )
}

export default App;