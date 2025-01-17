import React from "react";
import ReactGlobe from "react-globe";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import useMedia from 'use-media';

const initCoordinates = [10.7604, -75.3698]
const globeTexture = "./earthlights1k.jpg"
const marker = [
  {
    id: 1,
    city: 'Located in Austin, TX',
    color: '#F4A949',
    coordinates: [30.2672, -97.7431],
    value: 50,
    name: 'Todor'
  },
  {
    id: 2,
    city: 'Born in Bulgaria, EU',
    color: '#9C27B0',
    coordinates: [44.117111, 27.260719],
    value: 50,
    name: 'Todor'
  }
];

const Globe = () => {
  const breakpoint = useMedia("(max-width: 992px)");

  const globeOptions = {
    pointLightColor: '#1C5F9A',
    pointLightIntensity: 4,
    pointLightPositionRadiusScales: [4, 1, -1],
    cameraAutoRotateSpeed: breakpoint ? -0.10 : -0.6,
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Quadratic', 'In'],
    markerEnterEasingFunction: ['Bounce', 'InOut'],
    markerExitEasingFunction: ['Cubic', 'Out'],
    enableCameraZoom: false,
    cameraZoomSpeed: .2,
    enableMarkerTooltip: true,
    markerType: 'dot',
    cameraDistanceRadiusScale: 3.2,
    focusDistanceRadiusScale: 3,
    cameraMaxDistanceRadiusScale: 5,
    enableGlobeGlow: true, // Cause a console error
    globeGlowColor: '#1C5F9A',
    globeGlowCoefficient: 0,
    globeGlowPower: 100,
    globeGlowRadiusScale: 0,
    enableMarkerGlow: true,
    markerTooltipRenderer: marker => `${marker.city}`,
  }

  return (
    <ReactGlobe
      initialCoordinates={initCoordinates}
      globeTexture={globeTexture}
      globeBackgroundTexture={null}
      globeCloudsTexture={null}
      markers={marker}
      options={globeOptions}
      height="100%"
      width="100%"
    /> 
  )
}

export default Globe
