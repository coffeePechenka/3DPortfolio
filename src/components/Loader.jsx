import React from 'react';
import { Html, useProgress } from '@react-three/drei';

export default function Loader() {
  const { progress } = useProgress()
  return (
    <Html>
      <span className='canvas-load'></span>
      <p
      style={{
        fontSize: 36,
        color: '#f1f1f1',
        fontWeight: 800,
        marginTop: 40,
      }}
      >{progress.toFixed(1)}%</p>
    </Html>
  );
}