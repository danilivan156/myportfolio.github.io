import React from 'react'
import './About.scss'
import useMedia from 'use-media';

const About = (fullpageState) => {
  const titlePt1 = 'Hi,'
  const titlePt2 = "I'm Todor"
  const titlePt3 = 'Web Developer'
  const fpIndex = fullpageState.fullpageState.origin && fullpageState.fullpageState.origin.index
  const fpDestination = fullpageState.fullpageState.direction
  const animateCont = fpDestination === 'down' && fpIndex === 0 ? 'animate__slideInUp animate__delay-1s' : (fpDestination === 'down' && fpIndex === 1 ? 'animate__fadeOutUpBig animate__slower' : '')
  const animateContUp = fpDestination === 'up' && fpIndex === 1 ? 'animate__fadeOutDownBig animate__slower' : (fpDestination === 'up' && fpIndex === 2 ? 'animate__slideInDown animate__delay-1s' : '')
  const animateCont2 = fpDestination === 'down' && fpIndex === 0 ? 'animate__slideInUp animate__delay-1s' : (fpDestination === 'down' && fpIndex === 1 ? 'animate__slideOutDown animate__slow' : '')
  const animateContUp2 = fpDestination === 'up' && fpIndex === 1 ? 'animate__slideOutUp animate__slow animate__delay-1s' : (fpDestination === 'up' && fpIndex === 2 ? 'animate__slideInDown animate__delay-1s' : '')
  const breakpoint = useMedia("(max-width: 992px)");

  return (
    <div className={`about_section`}>
      <img className={`dark_cube2 ${breakpoint ? '' : 'animate__animated'} ${animateCont2} ${animateContUp}`} src="./dark_cube2.png" alt="" style={{'--animate-duration': '800ms', '--animate-delay': '400ms'}} />
      <img className={`purple_romb2 ${breakpoint ? '' : 'animate__animated'} ${animateContUp} ${animateContUp2}`} src="./purple_romb2.png" alt="" style={{'--animate-duration': '600ms', '--animate-delay': '100ms'}} />
     
      <h1 className={`about_me font-60 ${breakpoint ? '' : 'animate__animated'} ${animateCont} ${animateContUp}`} style={{'--animate-duration': '1200ms', '--animate-delay': '400ms'}}>
        <div className="font-60">
          {
            titlePt1.split('').map((l, i) => <span className={l === ',' ? 'space' : ''} key={i}>{l}</span>)
          }
        </div>
        <div className="font-60">
          {
            titlePt2.split('').map((l, i) => <span key={i} className={l === 'm' ? 'space' : ''}>{l}</span>)
          }
        </div>
        <div className="font-60">
          {
            titlePt3.split('').map((l, i) => <span key={i} className={l === 'b' ? 'space' : ''}>{l}</span>)
          }
        </div>
        <p>Front End Developer / JavaScript Fan / Wordpress Expert</p>
      </h1>
      <div className={`about_info ${breakpoint ? '' : 'animate__animated'} ${animateCont} ${animateContUp}`} style={{'--animate-duration': '1000ms', '--animate-delay': '600ms'}}>
      <p>Professionally connected with the web development industry.</p>
      <div>Problem solver, well-organised person, loyal employee with high attention to detail.</div>
      <div>Fan of Boxing, outdoor activities, video games, and coding of course.</div>
      <p>Interested in the entire frontend spectrum and working on ambitious projects with interesting people.</p>
      </div>
      <img className="t" width="400" src="/T.png" alt="Todor Dimov" />
    </div>
  )
}

export default About