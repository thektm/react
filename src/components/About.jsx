import React from 'react'
import Tilt from "react-tilt";
import {motion} from 'framer-motion'
import {styles} from "../styles.js";
import {services} from "../constants/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import StarWrapper from '../hoc/SectionWrapper'

const ServiceCard = ({title , ptitle , index , icon}) => {
    return (
        <>
        <Tilt className={'xs:w-[250px] w-full'}  >
            <motion.div variants={fadeIn("right" , "spring" ,0.5 * index , 1)} className={'w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '} >
                <div options={{
                    max:45,
                    scale : 1 ,
                    speed : 450,
                }
                } className={'bg-tertiary rounded-2xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'} >
                    <img src={icon} alt={title} style={{height : "150px"}}/>
                    <h2 className={'text-white text-[16px] text-center font-bold'}>{title}</h2>
                    <h2 className={"text-white text-[16px] text-center font-bold"}>{ptitle}</h2>
                </div>
            </motion.div>

        </Tilt>

        </>
    )
}
const About = () => {

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                className={'mt-4 text-secondary text-[17px]  leading-[23px] flex items-center justify-center text-center'}
                variants={fadeIn("", "", 0.1, 1.5)}>
                I've been developing android Applications with kotlin , Developing Servers with python (Django , FastAPI
                ...) and deploying websites for any kind of use.
                <br/> I've experience in Typescript and Javascript in frameworks like React and Angular
                <br/>I'm a really really Quick learner Actually learned python in 3 days and I'm enjoying Django since.
            </motion.p>
            <div className={'mt-20 flex flex-wrap gap-10  items-center text-center justify-center'} >
                {services.map((s, i) =>
                    <ServiceCard key={s.title} index={i} {...s} >

                    </ServiceCard>
                )
                }

            </div>
        </>
    )
}

export default StarWrapper(About , "about")