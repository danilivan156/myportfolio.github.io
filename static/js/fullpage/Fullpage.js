import React, { useState, useEffect } from 'react';
import './Fullpage.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/dist/fullpage.css'
import Hero from '../sections/hero/Hero'
import About from '../sections/about/About'
import Contact from '../sections/contact/Contact'
import Skills from '../sections/skills/Skills'
import { CheckIsActive, topBottomArrow } from '../overlay-sides/OverlaySideRight'
import CodeDecor1 from '../components/CodeDecor1'
import CodeDecor2 from '../components/CodeDecor2'
import Fitnhealthy from '../sections/portfolio/Fitnhealthy'
import Portfolio from '../sections/portfolio/Portfolio'
import Crwn from '../sections/portfolio/Crwn'
import useMedia from 'use-media';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
  require('./fullpage.scrollHorizontally.min');
};

const Fullpage = ({hitBottom, setHitBottom}) => {
  const [slideIndex, setSlideIndex] = useState('')
  const breakpoint = useMedia("(max-width: 992px)");
  const onFullPageLeave = (origin, destination, direction) => {
    CheckIsActive(destination)
    topBottomArrow(destination, {hitBottom, setHitBottom})
  }

  const onSlideLeave = (section, origin, destination, direction) => {
    setSlideIndex(origin)
  }

  useEffect(() => {
    if(breakpoint) {
      window.fullpage_api.setResponsive(true);
    } else {
      window.fullpage_api.setResponsive(false);
    }
  }, [breakpoint])

  return (
    <ReactFullpage
        pluginWrapper = {pluginWrapper}
  
        //fullpage options
        css3 = {true}
        menu = {'#side_nav'}
        anchors = {['home', 'about', 'skills', 'portfolio', 'contact']}
        navigationTooltips = {['firstSlide', 'secondSlide']}
        licenseKey = {'23178836-0E20405D-AFA4D383-B2B41649'}
        scrollingSpeed = {1200}
        fitToSection = {true}
        fitToSectionDelay = {2000}
        scrollHorizontally = {breakpoint ? false : true}  /* Because we are using the extension */
        scrollHorizontallyKey = {'ZHZscHIucHJvX0VPemMyTnliMnhzU0c5eWFYcHZiblJoYkd4NWJ0Qw=='}
        controlArrows = {false}
        easing = {'easeInOutCubic'}
        easingcss3 = {'cubic-bezier(0.88,0,0.265,1)'}
        onLeave = {onFullPageLeave}
        onSlideLeave = {onSlideLeave}
        dragAndMove = {true}
        slidesNavigation = {true}
        render={({ state, fullpageApi }) => {
          
          return (
            <ReactFullpage.Wrapper>
              <div className="fullpage">
                <div>
                  <div className="section">
                    <div className="innerin">
                      <Hero fullpageState={state} />
                    </div>
                    
                    <div className={`hero_decor`}>
                      <CodeDecor2  />
                    </div>
                  </div>
                  <div className="section">
                    <div className="innerin">
                      <About fullpageState={state} />
                    </div>
                    <div className="about_decor">
                        <CodeDecor1 />
                      </div>
                  </div>
                  <div className={`section`}>
                    <div className="innerin">
                      <Skills fullpageState={state} />
                    </div>
                    <div className="skills_decor">
                      <CodeDecor2 />
                    </div>
                  </div>
                  <div className="section">
                    <div className="slide" data-anchor="slide1">
                      <div className="">
                        <div className="innerin">
                        <Portfolio fullpageState={state} slideIndex={slideIndex} />
                        </div>
                      </div>
                    </div>
                    <div className="slide" data-anchor="slide2">
                      <div className="">
                        <div className="innerin">
                          <Crwn fullpageState={state} slideIndex={slideIndex} />
                        </div>
                      </div>
                    </div>
                    <div className="slide" data-anchor="slide3">
                      <div className="">
                        <div className="innerin">
                          <Fitnhealthy fullpageState={state} slideIndex={slideIndex} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <div className="innerin">
                      <Contact fullpageState={state} />
                    </div>
                    <div className="contact_decor">
                      <CodeDecor1 />
                    </div>
                    <div className="contact_decor_bottom">
                      <CodeDecor2 />
                    </div>
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
  )
};

export default Fullpage;
