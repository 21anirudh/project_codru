// import React, { useState } from 'react';
// import "../styles/Start1.css";
// import { NavLink } from 'react-router-dom';
// import Confetti from 'react-confetti';
// // import HomePageAnim from './HomePageAnim';
// import homePageImage from "../assets/homePageImage.png"

// const Start1 = () => {

  
// const [showConfetti, setShowConfetti] = useState(false);

//   const handleButtonClick = () => {
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 5000); 
//   };

//   return (
//     <div className="landing-container">
//       {showConfetti && <Confetti />}
//        <div className="text-content">
//         <h1>Welcome To</h1>
//         <h2><span>C</span>odru <span>E</span>ducation</h2>
//         <NavLink to='/signup'><button className="start-button">Let's Begin Your Journey</button></NavLink>
       
//        <i className="fas fa-thumbs-up thumbs-up-icon" onClick={handleButtonClick}></i>

        
//       </div>
     
//       <div className="overlay"></div>

//       <div className='homePageAnimation'>
//         {/* <HomePageAnim/> */}
//         <img src={homePageImage} alt="" />

//       </div>
//     </div>
//   );
// };

// export default Start1;



import React, { useState } from 'react';
import "../styles/Start1.css";
import { NavLink } from 'react-router-dom';
import Confetti from 'react-confetti';
// import HomePageAnim from './HomePageAnim';
import homePageImage from "../assets/homePageImage.png"

const Start1 = () => {

  
const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); 
  };

  return (
    <div className="landing-container">
      {showConfetti && <Confetti />}
       <div className="text-content">
        <h1>Welcome To</h1>
        <h2><span>C</span>odru <span>E</span>ducation</h2>
        <NavLink to='/signup'><button className="start-button"> <p className="start-button-text">Let's Begin Your Journey</p>  </button></NavLink>
       
       <i className="fas fa-thumbs-up thumbs-up-icon" onClick={handleButtonClick}></i>

        
      </div>
     
      <div className="overlay"></div>

      <div className='homePageAnimation'>
        {/* <HomePageAnim/> */}
        <img src={homePageImage} alt="" />

      </div>
    </div>
  );
};

export default Start1;





