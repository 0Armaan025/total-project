import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import './homepage.css';
import MiddlePart from '../../components/middlepart/MiddlePart';
import EndPart from '../../components/endPart/endpart';

const HomePage = () => {
  return (
    <>
        <NavBar/>
        <MiddlePart/>
        <EndPart/>
    </>
  )
}

export default HomePage
