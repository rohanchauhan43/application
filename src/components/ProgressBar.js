import React from 'react';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';


export default function App() {
  return (
      
    <div style={{ display: 'block', width: 600, padding: 30 }}>
    <MDBProgress>
   
      <MDBProgressBar bgColor='warning' width='35' valuemin={0} valuemax={100} />
      <MDBProgressBar bgColor='success' width='25' valuemin={0} valuemax={100} />
      <MDBProgressBar bgColor='info' width='20' valuemin={0} valuemax={100} />
    </MDBProgress></div>
  );
}

