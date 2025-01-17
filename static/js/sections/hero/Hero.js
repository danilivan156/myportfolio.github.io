import React from 'react'
import './Hero.scss'
import ComputerGraphic from '../../components/ComputerGraphic'
import useMedia from 'use-media';

const Hero = (fullpageState) => {
  const mainTitlePt1 = 'Frontend'
  const mainTitlePt2 = 'Разработчик'
  const mainTitlePt3 = 'Developer'
  const fpDestination = fullpageState.fullpageState.direction
  const animateCont = fpDestination === 'up' ? 'animate__slideInDown animate__delay-1s' : (fpDestination === 'down' ? 'animate__fadeOutUpBig animate__slower' : '')
  const animateCont2 = fpDestination === 'up' ? 'animate__slideInDown animate__delay-1s' : (fpDestination === 'down' ? 'animate__fadeOutUp animate__slower animate__delay-1s' : '')
  const breakpoint = useMedia("(max-width: 992px)");

  return (
    <div className="hero">
      <img className="dots_decor" src="/side-dots.png" alt="" />
      <div className={`hero_cont ${breakpoint ? '' : 'animate__animated'} animate__fadeIn ${animateCont}`} style={{'--animate-duration': '1000ms', '--animate-delay': '400ms'}}>
        <h1 className="font-60">
          <div>
            {
              mainTitlePt1.split('').map((l, i) => <span key={i}>{l}</span>)
            }
          </div>
          <div>
            {
              mainTitlePt2.split('').map((l, i) => <span key={i}>{l}</span>)
            }
          </div>
          <div>
            {
              mainTitlePt3.split('').map((l, i) => <span key={i}>{l}</span>)
            }
          </div>
        </h1>
        <p className="hero_blurb">
          Создание сайтов и веб-приложений. Сделаю дизайн и учту SEO.
          Всегда смогу ускорить разработку х2 за ваш кэш х2.
        </p>
        <a className="text_white" href="#about">
          Обо мне
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#9C27B0"/>
          </svg>
        </a>
      </div>
      <img className={`purple_romb1 ${breakpoint ? '' : 'animate__animated'}  animate__fadeIn ${animateCont2}`} src="./purple_romb1.png" alt="" style={{'--animate-duration': '700ms', '--animate-delay': '800ms'}} />
      <div className={`hero_graphic ${breakpoint ? '' : 'animate__animated'}  animate__fadeIn ${animateCont2}`} style={{'--animate-duration': '1000ms', '--animate-delay': '200ms'}}>
        <ComputerGraphic />
      </div>
    </div>
  )
}

export default Hero