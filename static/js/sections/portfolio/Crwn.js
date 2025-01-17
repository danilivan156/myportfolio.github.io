import React from 'react'
import './Crwn.scss'
import useMedia from 'use-media';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Portfolio = (fullpageState) => {
  const portfolioTitle = 'Crown Clothing'
  const fpIndex = fullpageState.fullpageState.origin && fullpageState.fullpageState.origin.index
  const fpDestination = fullpageState.fullpageState.direction
  const animateCont = fpDestination === 'down' && fpIndex === 2 ? 'animate__slideInUp animate__delay-1s' : (fpDestination === 'down' && fpIndex === 3 ? 'animate__fadeOutUpBig animate__slow' : '')
  const animateContUp = fpDestination === 'up' && fpIndex === 3 ? 'animate__slideOutUp animate__slow' : (fpDestination === 'up' && fpIndex === 4 ? 'animate__slideInDown animate__delay-1s' : '')

  const animateCont2 = fpDestination === 'down' && fpIndex === 2 ? 'animate__slideInUp animate__delay-1s' : (fpDestination === 'down' && fpIndex === 3 ? 'animate__fadeOutUp animate__slow' : '')
  const animateContUp2 = fpDestination === 'up' && fpIndex === 3 ? 'animate__fadeOutDown animate__slow' : (fpDestination === 'up' && fpIndex === 4 ? 'animate__slideInDown animate__delay-1s' : '')
  
  const slideDirection = fullpageState.fullpageState.destination
  const animationConstRight = slideDirection === 'right' && fpIndex === 1 ? 'animate__fadeOutLeftBig animate__slow' : 'animate__slideInLeft animate__delay-1s';
  const animationConstRight2 = slideDirection === 'right' && fpIndex === 1 ? 'animate__fadeOutLeftBig animate__slow animate__delay-1s' : 'animate__slideInLeft animate__delay-1s';
  
  const animationConstLeft = slideDirection === 'left' && fpIndex === 1 ? 'animate__fadeOutRightBig animate__slow' : 'animate__slideInRight animate__delay-1s';
  const animationConstLEft2 = slideDirection === 'left' && fpIndex === 1 ? 'animate__fadeOutRightBig animate__slow animate__delay-1s' : 'animate__slideInRight animate__delay-1s';

  const breakpoint = useMedia("(max-width: 992px)");
  
  return (
    <div className="crwn_proj">
      <img className={`dark_cube1 ${breakpoint ? '' : 'animate__animated'} ${animateCont}`} src="./dark_cube1.png" alt="" />
      <div className={`dark_romb ${breakpoint ? '' : 'animate__animated'} ${animationConstRight2}`} style={{'--animate-duration': '700ms', '--animate-delay': '300ms'}}>
        <img className={`${breakpoint ? '' : 'animate__animated'} ${animateCont2} ${animateContUp}`} src="./dark_romb.png" alt="" style={{'--animate-duration': '700ms', '--animate-delay': '700ms'}} />
      </div>
      <div className={`white_cube2 ${breakpoint ? '' : 'animate__animated'} ${animationConstRight2}`} style={{'--animate-duration': '700ms', '--animate-delay': '300ms'}}>
        <img className={`${breakpoint ? '' : 'animate__animated'} ${animateContUp2}`} src="./white_cube2.png" alt="" />
      </div>
      

      <div className={`portfolio_cont ${breakpoint ? '' : 'animate__animated'} ${animateCont} ${animateContUp2} ${animationConstLEft2}`}>
        <div className={`${breakpoint ? '' : 'animate__animated'} ${animationConstRight}`} style={{'--animate-duration': '900ms', '--animate-delay': '600ms'}}>
          <h2><span>e-Commerce Application</span></h2>
          <h1 className="font-60">
            <div>
              {
                portfolioTitle.split('').map((l, i) => <span className={i === 4 ? 'space' : ''} key={i}>{l}</span>)
              }
            </div>
          </h1>
          <div className="portfolio_blurb">
            <p>Online store for selling apparel &amp; foot wear.</p>
            <p><strong>Built with:</strong> React, Redux, Node, JavaScript, SASS, Custom Stripe Integration, Firebase (NoSQL Database, Cloud Functions, Cloud Storage, Hosting).</p>
          </div>
          
          <div className="view_proj">
            <div>
            <a className="code-link text_white" target="_blank" rel="noopener noreferrer" href="https://github.com/tdrdimov/ecom-react">
                View the code
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#ffffff"/>
                </svg>
              </a>
              <a className="text_white" target="_blank" rel="noopener noreferrer" href="https://crwn-react-6b805.web.app/">
                Visit the app
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#F4A949"/>
                </svg>
              </a>
            </div>
            <Logo />
          </div>
        </div>
      </div>
      <div className={`macbook_mockup ${breakpoint ? '' : 'animate__animated'} ${animationConstLeft}`}>
        <img src="./macbook.png" alt="project mockup" />
      </div>
    </div>
  )
}

export default Portfolio