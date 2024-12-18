import React from 'react';
import Header from '../components/Header';

const Main = ({ userPhoto }) => (
  <div className="w-full h-screen relative">
    <Header userPhoto={userPhoto}/>
    <video 
      className="w-full h-full object-cover"
      autoPlay 
      loop 
      muted
    >
      <source src="https://storage.googleapis.com/ol_2330_share/My%20Movie%202.mp4" type="video/mp4" />
    </video>
  </div>
);

export default Main;
