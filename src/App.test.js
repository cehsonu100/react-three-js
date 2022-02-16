// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import ReactThreeTestRenderer from '@react-three/test-renderer'
import Cube from './components/3DModels/Cube/Cube'

test('mesh to have 1 children', async () => {
  const renderer = await ReactThreeTestRenderer.create(<Cube/>)
  const mesh = renderer.scene.children[0].allChildren
  expect(mesh.length).toBe(1)
})

test('pointerover event makes box bigger', async () => {
  const renderer = await ReactThreeTestRenderer.create(<Cube />)
  const mesh = renderer.scene.children[0]
  expect(mesh.props.scale).toBe(1)
  await renderer.fireEvent(mesh, 'pointerover')
  expect(mesh.props.scale).toBe(1.5)
})
