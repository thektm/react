import React from 'react'
import {BallCanvas} from './canvas'
import StarWrapper from '../hoc/SectionWrapper'
import {technologies} from "../constants/index.js";
import './Tech.css'

const Tech = () => {
  return (
    <div className={'flex flex-row flex-wrap justify-center gap-10'}>
      <div id={'countainer'}>
      <div id="card">
        <div id="circle"></div>

        <div id="circle"></div>
        <div id="card-inner"> <p id={'pp'} className={'text-secondary font-bold font-sans'}>Language <br/>-----<br/>Frameworks</p></div>
      </div></div>
      {technologies.map((t,i) =>
    <div className={'h-28 w-28 '} key={t.name}>
      <BallCanvas icon={t.icon}></BallCanvas>
    </div>
    )}</div>
  )
}

export default StarWrapper(Tech , 'tech')