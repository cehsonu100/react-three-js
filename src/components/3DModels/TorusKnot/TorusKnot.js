import React, { Suspense, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useSpring, animated } from '@react-spring/three';


const TorusKnot = (props) => {
  const cubeRef = useRef();
  const [active, setActive] = useState(false);
  const { scale } = useSpring({ scale: active ? 1.5 : 1 })
  const colorMap = useLoader(TextureLoader, '/golden_texture.jpg')
  useFrame(state => {
    cubeRef.current.rotation.y -= 0.01;
  })
  return (
      <animated.mesh 
        {...props} 
        ref={cubeRef} 
        onPointerOver={(e) => setActive(true)}
        onPointerOut={(e) => setActive(false)}
        scale={scale}
      >
        <torusKnotBufferGeometry/>
        <meshStandardMaterial map={colorMap}/>
      </animated.mesh >

  );
};

TorusKnot.propTypes = {
  currentLocation: PropTypes.object,
};


export default TorusKnot;
