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
import GravitySticky from './GravitySticky';
import { useSpring, animated } from 'react-spring';
const Home = () => {
  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
  const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
  const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div className="sans-comp-Home">
      <section
        className="paralax-section"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.img
          className="layer"
          style={{ transform: props.xy.interpolate(trans1) }}
          alt=""
          src={Img1}
        />
        <animated.img
          className="layer"
          style={{ transform: props.xy.interpolate(trans2) }}
          alt=""
          src={Img2}
        />
        <animated.img
          className="layer"
          style={{ transform: props.xy.interpolate(trans3) }}
          alt=""
          src={Img3}
        />
        <animated.img
          className="layer"
          style={{ transform: props.xy.interpolate(trans4) }}
          alt=""
          src={Img4}
        />
        <animated.img
          className="layer"
          style={{ transform: props.xy.interpolate(trans2) }}
          alt=""
          src={Img5}
        />
        <animated.img
          className="layer"
          style={{ transform: props.xy.interpolate(trans4) }}
          alt=""
          src={Img6}
        />
        <animated.img
          className="layer"
          style={{ transform: props.xy.interpolate(trans1) }}
          alt=""
          src={Img7}
        />
        <animated.img
          className="layer"
          style={{ transform: props.xy.interpolate(trans3) }}
          alt=""
          src={Img8}
        />
        <animated.img
          className="layer"
          style={{ transform: props.xy.interpolate(trans4) }}
          alt=""
          src={Img9}
        />
        <animated.img
          className="layer"
          style={{ transform: props.xy.interpolate(trans2) }}
          alt=""
          src={Img10}
        />
        <animated.img
          className="layer"
          style={{ transform: props.xy.interpolate(trans2) }}
          alt=""
          src={Img11}
        />
        <animated.img
          className="layer"
          style={{ transform: props.xy.interpolate(trans1) }}
          alt=""
          src={Img12}
        />
        <animated.h2
          className="layer"
          style={{ transform: props.xy.interpolate(trans1) }}
        >
          Welcome
        </animated.h2>
      </section>
      <GravitySticky />
    </div>
  );
};

export default Home;
