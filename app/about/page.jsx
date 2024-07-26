"use client";

import { Fade } from "react-awesome-reveal";
import { RiRidingFill, RiUserHeartFill, RiStarHalfSLine,  RiVidiconFill, RiVipCrown2Fill, RiSendPlaneFill } from 'react-icons/ri';
import HeroImg from '/components/HeroImg';


const infoData = [
  {
    icon: <RiUserHeartFill size={20} />,
    text: "Mrs Smith"
  },

  {
    icon: <RiSendPlaneFill size={20} />,
    text: "+91 99 787 7761"
  },

  {
    icon: <RiVidiconFill size={20} />,
    text: "photography@gmail.com"
  },

  {
    icon: <RiVipCrown2Fill size={20} />,
    text: "Born on 23 Jan, 2000"
  },

  {
    icon: <RiStarHalfSLine size={20} />,
    text: "Master Degree"
  },

  {
    icon: <RiRidingFill size={20} />,
    text: "22, Ella Statu, Texas, US"
  },


]

const About = () => {
  return (
    <section className='pb-12 min-h-screen xl:py-24'>
      <div className='container mx-auto'>
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
            About me
          </h2>
        </Fade>        

        <div className='flex flex-col xl:flex-row'>
          {/* Image */}
          <div className='relative flex-1 xl:flex'>
            <Fade direction='left' delay={600} cascade damping={1e-1} triggerOnce={true}>
              <HeroImg 
              containerStyles='w-[505px] h-[505px] lg:w-[520px] bg-no-repeat relative'
              imgSrc='/about/profile.png'
              />
            </Fade>
            
          </div>

          <div className='flex-1'>
            {/** Content */}
            <div className='text-lg mt-12 xl:mt-3'>
              <div className='text-center xl:text-left'>
                <Fade direction='right' delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className='h-3 mb-4'>
                    Let's plan you perfect photoshoot
                  </h3>
                </Fade>
                <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true}>
                  <p className='subtitle max-w-xl mx-auto xl:mx-0'>Profesional photography services combine the classic knowledge of traditional photographic portraiture and contemporary style</p>
                </Fade>
                <Fade direction='right' delay={800} cascade damping={1e-1} triggerOnce={true}>
                  <p className='subtitle max-w-xl mx-auto xl:mx-0'>Profesional photography services combine the classic knowledge of traditional photographic portraiture and contemporary style</p>
                </Fade>
                
                <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                  <Fade direction='right' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                    {/* Icons */}
                    {
                      infoData.map((item, index) => {
                        return(
                          <div 
                          className='flex items-center gap-x-4 mx-auto xl:mx-0'
                          key={index}>
                            <div className='text-primary'> {item.icon} </div>
                            <div> {item.text} </div>
                          </div>
                        )
                      })
                    }
                  </Fade>
                  
                  
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About