import React from 'react';
import '../compo/Home.css';
import Navbar from '../components/Navbar';
import Img from '../assets/johnwick.jpg';
import Img2 from '../assets/fandf.jpg';
import Img3 from '../assets/rage.jpg';
import Img4 from '../assets/sansremords.jpg';

function Home() {
  return (
    <div className="home">
        <Navbar/>

      <div className="container">

        <div className="films">
            
            <div className="film1">
              <h1 className='johnwick'>John Wick : Chapitre 4</h1>
              <img src={Img} alt="" />
            </div>
      
          <div className="film2">
            <h1 className='johnwick'>John Wick : Chapitre 4</h1>
            <img src={Img2} alt="" />
          </div>
    

          <div className="film3">
            <h1 className='johnwick'>John Wick : Chapitre 4</h1>
            <img src={Img3} alt="" />
          </div>
      

      
          <div className="film4">
            <h1 className='johnwick'>John Wick : Chapitre 4</h1>
            <img src={Img4} alt="" />
          </div>
   
        </div>


      </div>

    </div>
  )
}

export default Home;