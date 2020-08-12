import React, { useState } from 'react';
import './styles.scss';
import Img1 from '../../images/paralax/1.png';
import Img2 from '../../images/paralax/2.png';
import Img3 from '../../images/paralax/3.png';
import Img4 from '../../images/paralax/4.png';
import Img5 from '../../images/paralax/5.png';
import Img6 from '../../images/paralax/6.png';
import Img7 from '../../images/paralax/7.png';
import Img8 from '../../images/paralax/8.png';
import Img9 from '../../images/paralax/9.png';
import Img10 from '../../images/paralax/10.png';
import Img11 from '../../images/paralax/11.png';
import Img12 from '../../images/paralax/12.png';
const useHover = () => {
  const [hovered, set] = useState(false);
  return {
    hovered,
    bind: {
      onMouseEnter: () => set(true),
      onMouseLeave: () => set(false),
    },
  };
};
const Home = () => {
  
  const mouseOvesr = () => {
    document.addEventListener('mousemove', parallax);
    const parallax = (e) => {
      this.querySelectorAll('.layer').forEach((element) => {
        const speed = element.getAttribute('data-speed');
        const x = window.innerWidth - (e.pageX * speed) / 100;
        const y = window.innerHeight - (e.pageY * speed) / 100;
        element.style.transform = `translateX(${x}px) translateX(${y}px)`;
      });
    };
  };
  return (
    <div className="sans-comp-Home" mouseOver={this.handleHover}>
      <section className="paralax-section">
        <img className="layer" data-speed="-5" alt="" src={Img1} />
        <img className="layer" data-speed="5" alt="" src={Img2} />
        <img className="layer" data-speed="2" alt="" src={Img3} />
        <img className="layer" data-speed="6" alt="" src={Img4} />
        <img className="layer" data-speed="8" alt="" src={Img5} />
        <img className="layer" data-speed="-2" alt="" src={Img6} />
        <img className="layer" data-speed="4" alt="" src={Img7} />
        <img className="layer" data-speed="-9" alt="" src={Img8} />
        <img className="layer" data-speed="6" alt="" src={Img9} />
        <img className="layer" data-speed="-7" alt="" src={Img10} />
        <img className="layer" data-speed="5" alt="" src={Img11} />
        <img className="layer" data-speed="-5" alt="" src={Img12} />
        <h2 className="layer" data-speed="2">
          Welcome
        </h2>
      </section>
    </div>
  );
};

export default Home;
