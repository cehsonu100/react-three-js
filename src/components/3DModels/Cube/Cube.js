import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useFrame } from '@react-three/fiber';


const Cube = (props) => {
  const cubeRef = useRef();
  useFrame(state => {
    cubeRef.current.rotation.y -= 0.01;
  })
  return (
    <mesh {...props} ref={cubeRef} position={[0, 0, 0]}>
      <boxBufferGeometry/>
      <meshStandardMaterial/>
    </mesh>
  );
};

Cube.propTypes = {
  currentLocation: PropTypes.object,
};


export default Cube;
