import React from 'react'
import './Contact.scss'
import Globe from '../../components/Globe'
import useMedia from 'use-media';

const Contact = (fullpageState) => {
  const fpIndex = fullpageState.fullpageState.origin && fullpageState.fullpageState.origin.index
  const fpDestination = fullpageState.fullpageState.direction
  const animateCont = fpDestination === 'down' && fpIndex === 3 ? 'animate__slideInUp animate__delay-1s' : (fpDestination === 'down' && fpIndex === 3 ? 'animate__fadeOutUpBig animate__slower' : '')
  const animateContUp = fpDestination === 'up' && fpIndex === 4 ? 'animate__fadeOutDownBig animate__slower' : (fpDestination === 'up' && fpIndex === 4 ? 'animate__slideInDown animate__delay-1s' : '')
  const breakpoint = useMedia("(max-width: 992px)");

  return (
    <div className={`contact_section`}>
      
      <img className={`white_cube1 ${breakpoint ? '' : 'animate__animated'} ${animateCont} ${animateContUp}`} src="./white_cube1.png" alt="" />
      
      <div className={`contact_cont ${breakpoint ? '' : 'animate__animated'} ${animateCont}`}>
        <div className="cont_cont_wrap">
          <p>What would you do if you had a software expert available at your fingertips?</p>
          <div>Want to start new project? Or just say hey.</div>
          <div>
            You can also follow me on <a target="_blank" rel="noopener noreferrer" className="insta" href="https://www.instagram.com/pro.dvlpr/">Instagram</a>.
            <h1>
              <a target="_blank" rel="noopener noreferrer" href="mailto:tdrdimov@gmail.com">
              tdrdimov@gmail.com
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="mobile_globe">
       <Globe />
      </div>
    </div>
  )
}

export default Contact