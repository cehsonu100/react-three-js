import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useSpring, animated } from "@react-spring/three";
import { useBox } from "@react-three/cannon";

const Cube = (props) => {
  const cubeRef = useRef();
  const [physicsCube] = useBox(() => ({ mass: 1, position: [0, 5, 0], rotation: [0.4, 0.2, 0.5], ...props }));
  const [active, setActive] = useState(false);
  const { scale } = useSpring({ scale: active ? 1.5 : 1 });
  // useFrame(state => {
  //   cubeRef.current.rotation.y -= 0.01;
  // })
  return (
    <animated.mesh
      receiveShadow
      castShadow
      ref={physicsCube}
      onPointerOver={(e) => setActive(true)}
      onPointerOut={(e) => setActive(false)}
      scale={scale}
      // {...props}
    >
      <boxGeometry />
      <meshLambertMaterial color="hotpink" />
    </animated.mesh>
  );
};

Cube.propTypes = {
  currentLocation: PropTypes.object,
};

export default Cube;
