
import PropTypes from "prop-types";
import { usePlane } from '@react-three/cannon'

const Plane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={'#ffffff'}/>
      <shadowMaterial color="#171717" transparent opacity={0.4} />
    </mesh>
  )
};

Plane.propTypes = {
  currentLocation: PropTypes.object,
};


export default Plane;
