import React from 'react'
import ProjFitnhealthy from '../../components/ProjFitnhealthy'
import './Fitnhealthy.scss'
import FitLogo from '../../components/FitnHealthyLogo'
import useMedia from 'use-media';

const Fitnhealthy = (fullpageState) => {
  const projTitle = 'Fit & Healthy'
  const fpIndex = fullpageState.fullpageState.origin && fullpageState.fullpageState.origin.index
  const fpDestination = fullpageState.fullpageState.direction
  const animateCont = fpDestination === 'down' && fpIndex === 2 ? 'animate__slideInUp animate__delay-1s' : (fpDestination === 'down' && fpIndex === 3 ? 'animate__fadeOutUpBig animate__slower' : '')
  const animateContUp = fpDestination === 'up' && fpIndex === 3 ? 'animate__fadeOutDownBig animate__slower' : (fpDestination === 'up' && fpIndex === 4 ? 'animate__slideInDown animate__delay-1s' : '')

  const animateCont2 = fpDestination === 'down' && fpIndex === 2 ? 'animate__slideInUp animate__delay-1s' : (fpDestination === 'down' && fpIndex === 3 ? 'animate__fadeOutUpBig animate__slower animate__delay-1s' : '')
  const animateContUp2 = fpDestination === 'up' && fpIndex === 3 ? 'animate__fadeOutDownBig animate__slower animate__delay-1s' : (fpDestination === 'up' && fpIndex === 4 ? 'animate__slideInDown animate__delay-1s' : '')

  const slideDirection = fullpageState.fullpageState.destination
  const animationConstLeft = slideDirection === 'left' ? 'animate__fadeOutRightBig animate__slow animate__delay-1s' : 'animate__slideInRight animate__delay-1s';
  const animationConstLeft2 = slideDirection === 'left' ? 'animate__fadeOutRightBig animate__slow' : 'animate__slideInRight animate__delay-1s';
  const breakpoint = useMedia("(max-width: 992px)");
  
  return (
    <div className="proj_1">
      <img className="dots_decor" src="/side-dots.png" alt="" />
      <div className={`phone ${breakpoint ? '' : 'animate__animated'} ${animateCont2} ${animateContUp2}`}  style={{'--animate-duration': '1200ms'}}>
        <div className={`proj_mockup ${breakpoint ? '' : 'animate__animated'} ${animationConstLeft}`} style={{'--animate-duration': '600ms', '--animate-delay': '300ms'}}>
          <ProjFitnhealthy />
        </div>
      </div>
      <div className={`proj_cont ${breakpoint ? '' : 'animate__animated'} ${animateCont} ${animateContUp}`}>
        <div className={`${breakpoint ? '' : 'animate__animated'} ${animationConstLeft2}`} style={{'--animate-duration': '800ms', '--animate-delay': '500ms'}}>
          <h2>Fitness &amp; Wellness Coaching Platform</h2>
          <h1 className="font-60">
            <div>
              {
                projTitle.split('').map((l, i) => <span className={l === '&' ? 'space' : ''} key={i}>{l}</span>)
              }
            </div>
          </h1>
          <div className="proj_blurb">
            <p>Server rendered, progressive web application for online fitness &amp; health coaching.
            Providing workout programs, nutritions plans, workout logs, follow up with client's progress and more.</p>
            <p><strong>Built with:</strong> NuxtJs, VueJs, JavaScript, Firebase (NoSQL Database, Cloud Functions, Cloud Storage, Hosting), SASS.</p>
          </div>
          
          <div className="view_proj">
            <a className="arrow_link" target="_blank" rel="noopener noreferrer" href="https://fitnhealthy.us">
              Visit the app
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#9ae17b"/>
              </svg>
            </a>
            <FitLogo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fitnhealthy