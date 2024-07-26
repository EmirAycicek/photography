"use client";

import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import ProjectCard from '/components/ProjectCard';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '/components/ui/tabs';

const projectData = [
  {
      image:'/work/3.png',
      category:'portraits',
      name:'February 11, 2024',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link:  '/',
      codepen: '/',
  },

  {
      image:'/work/9.png',
      category:'portraits',
      name:'April 22, 2023',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link:  '/',
      codepen: '/',
  },

  {
      image:'/work/2.png',
      category:'Products',
      name:'Product : Cosmetics',
      description: 'Shoot Date : 14/01/2018.',
      link:  '/',
      codepen: '/',
  },

  {
      image:'/work/1.png',
      category:'portraits',
      name:'Jan 14, 2021',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link:  '/',
      codepen: '/',
  },

  {
      image:'/work/8.png',
      category:'fashion',
      name:'Jan 31, 2023',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link:  '/',
      codepen: '/',
  },

  {
      image:'/work/4.png',
      category:'Products',
      name:'Aug 31, 2022',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link:  '/',
      codepen: '/',
  },

  {
      image:'/work/5.png',
      category:'portraits',
      name:'Mar 11, 2013',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link:  '/',
      codepen: '/',
  },

  {
      image:'/work/11.png',
      category:'fashion',
      name:'Oct 23, 2019',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link:  '/',
      codepen: '/',
  }
]

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
]

const portfolio = () => {
  const [categories, SetCategories ] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects' ? project : project.category === category;
  })

  

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
            My Portfolio
          </h2>
        </Fade>
        
        {/** Tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
            <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto mb:border dark:border-none '>
              {
                categories.map((category, index) => {
                  return(
                    <TabsTrigger 
                    value={category} 
                    key={index}
                    onClick={() => setCategory(category)}
                    className='capitalize w-[162px] md:w-auto'
                    >
                      {category}
                    </TabsTrigger>
                  )
                })
              }
            </TabsList>
          </Fade>
          

          {/** Tabs Content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
              {
                filteredProjects.map((project, index ) => {
                  return(
                    <TabsContent value={category} key={index} >
                      <ProjectCard project={project}/>
                    </TabsContent>
                  )
                })
              }
            </Fade>
          
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default portfolio