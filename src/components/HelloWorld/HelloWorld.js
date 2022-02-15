import React, { Suspense, useRef } from "react";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { selectLocation } from "../../containers/Home/selectors";
import { incrementCurrentValue } from "../../containers/Home/actions";
import { connect } from "react-redux";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import VegModel from "../VegModel/VegModel";
// import { useGLTF } from '@react-three/drei/useGLTF'


const Cube = (props) => {
  const ref = useRef();
  useFrame(state => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry />
      <meshBasicMaterial color='blue'/>
    </mesh>
  );
}

const HelloWorld = (props) => {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <Canvas camera={{position: [3,3,3]}} style={{background: 'black'}}>
        {/* <Cube position={[-2,2,2]}/> */}
        <Suspense fallback={null}>
        <VegModel position={[0, 0, 0]}/>
    </Suspense>
       
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        {/* <axesHelper args={[3]}/> */}
      </Canvas>
    </div>
  );
};

HelloWorld.propTypes = {
  message: PropTypes.string,
  currentLocation: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentLocation: selectLocation(),
});



function mapDispatchToProps(dispatch) {
  return {
    setHelloWorldValue: (addValue) => dispatch(incrementCurrentValue(addValue)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
