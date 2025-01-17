import React from 'react'
import './Portfolio.scss'
import useMedia from 'use-media';

const Portfolio = (fullpageState) => {
  const portfolioTitle = 'Portfolio & Previous Projects'
  const fpIndex = fullpageState.fullpageState.origin && fullpageState.fullpageState.origin.index
  const fpDestination = fullpageState.fullpageState.direction
  const animateCont = fpDestination === 'down' && fpIndex === 2 ? 'animate__slideInUp animate__delay-1s' : (fpDestination === 'down' && fpIndex === 3 ? 'animate__fadeOutUpBig animate__slow' : '')
  const animateContUp = fpDestination === 'up' && fpIndex === 3 ? 'animate__slideOutUp animate__slow' : (fpDestination === 'up' && fpIndex === 4 ? 'animate__slideInDown animate__delay-1s' : '')

  const animateCont2 = fpDestination === 'down' && fpIndex === 2 ? 'animate__slideInUp animate__delay-1s' : (fpDestination === 'down' && fpIndex === 3 ? 'animate__fadeOutUp animate__slow' : '')
  const animateContUp2 = fpDestination === 'up' && fpIndex === 3 ? 'animate__fadeOutDown animate__slow' : (fpDestination === 'up' && fpIndex === 4 ? 'animate__slideInDown animate__delay-1s' : '')
  
  const slideDirection = fullpageState.fullpageState.destination
  const animationConstRight = slideDirection === 'right' ? 'animate__fadeOutLeftBig animate__slow' : 'animate__slideInLeft animate__delay-1s';
  const animationConstRight2 = slideDirection === 'right' ? 'animate__fadeOutLeftBig animate__slow animate__delay-1s' : 'animate__slideInLeft animate__delay-1s';
  const breakpoint = useMedia("(max-width: 992px)");

  return (
    <div className="portfolio_section">
      <img className={`sphere_lg ${breakpoint ? '' : 'animate__animated'} ${animationConstRight2}`} src="./sphere_lg.png" alt="sphere decor" style={{'--animate-duration': '700ms', '--animate-delay': '300ms'}} />
      <img className={`sphere_md ${breakpoint ? '' : 'animate__animated'} ${animateContUp2}`} src="./sphere_md.png" alt="sphere decor" />
      <img className={`sphere_sm ${breakpoint ? '' : 'animate__animated'} ${animateCont2} ${animateContUp}`} src="./sphere_sm.png" alt="sphere decor" style={{'--animate-duration': '700ms', '--animate-delay': '300ms'}} />

      <div className={`portfolio_cont ${breakpoint ? '' : 'animate__animated'} ${animateCont} ${animateContUp2}`}>
        <div className={`${breakpoint ? '' : 'animate__animated'} ${animationConstRight}`} style={{'--animate-duration': '900ms', '--animate-delay': '600ms'}}>
          <h1 className="font-60">
            <div>
              {
                portfolioTitle.split('').map((l, i) => <span className={l === '&' ? 'space' : ''} key={i}>{l}</span>)
              }
            </div>
          </h1>
          <p className="portfolio_blurb">I have built various different projects to fit different aspects of the client's business. If you want to see more examples of my work than the ones showcased in this site, please <a href="#contact">contact me!</a></p>
          <div className="proj_link">
            <a className="text_white" href="#portfolio/slide2">
              See Projects
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#9C27B0"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio