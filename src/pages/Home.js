import React from 'react';
import pic from '../image/Victoira_Microsoft.jpg';
  
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${pic})`,
        backgroundRepeat: "no-repeat",
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Right',
        height: '100vh',
      }}
    >
      <h1>Hello World</h1>
    </div>
  );
};
  
export default Home;