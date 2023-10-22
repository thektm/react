import React from 'react'
import {motion} from "framer-motion";
import {styles} from '../styles.js'
import StarWrapper from '../hoc/SectionWrapper'
import {fadeIn , textVariant} from "../utils/motion.js";
import {testimonials} from "../constants/index.js";

const Feedbacks = () => {
  return (
    <div className={'mt-12 bg-black rounded-[20px]'}>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] `}>
        <motion.div variants={textVariant()}> </motion.div>
      </div>
    </div>
  )
}

export default Feedbacks