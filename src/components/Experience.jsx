import React, {useEffect} from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import {motion} from "framer-motion";
import 'react-vertical-timeline-component/style.min.css'
import {styles} from "../styles";
import {experiences} from "../constants/index.js";
import StarWrapper from '../hoc/SectionWrapper'
import {textVariant} from "../utils/motion.js";

const ExperienceCard = ({experience}) => {
    useEffect(() => {

    },[] );
    
  return (

      <>

      <VerticalTimelineElement
   contentStyle={{
       background : "#1d1836",
       color : "#fff"
   }}
    contentArrowStyle={{
        borderRight : `7px solid #232631`

    }}
    date={experience.date}
    iconStyle={{
        Background : experience.iconBg
    }}
    icon={
        <div className={'flex justify-center items-center text-center  w-full h-full'}>
            <img src={experience.icon} alt={experience.company_name} className={
                'w-[80%] h-[80%] object-contain rounded-full bottom-0'
            }/>
        </div>
    }>
        <div>
            <h3 className={'text-white text-[24px] font-bold '}>{experience.title}</h3>

        </div>
          <ul className={'mt-5 list-disc ml-5 space-y-2 '}>
              {experience.points.map((p , i) => {
return <li className={'text-white-100 text-[14px] pl-1 tracking-wider'} key={i} >{p}</li>
              })}

          </ul>
    </VerticalTimelineElement> </>)
}
const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What i have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </motion.div>
            <div className={'mt-20 flex flex-col'}>
                <VerticalTimeline>
                    {experiences.map((e, i) => {

                      return  <ExperienceCard key={i} experience={e}/>

                    })}
                </VerticalTimeline>

            </div>
        </>
    )
}

export default StarWrapper(Experience, "experience")