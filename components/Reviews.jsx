"use client";

import React from 'react';
import { Fade } from "react-awesome-reveal";

import { Card, CardDescription, CardHeader, CardTitle } from '/components/ui/card';
import Image from "next/image";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';




const reviewsData = [
    {
        avatar:'/reviews/avatar-1.png',
        name:'Jenifer',
        job:'Chief',
        reiew: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account'
    },

    {
        avatar:'/reviews/avatar-2.png',
        name:'Lopez Chris',
        job:'CEO',
        reiew: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account'
    },

    {
        avatar:'/reviews/avatar-3.png',
        name:'Hamilton',
        job:'COO',
        reiew: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account'
    },
    {
        avatar:'/reviews/avatar-4.png',
        name:'Lucifer',
        job:'APP Developer',
        reiew: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account'
    },
    {
        avatar:'/reviews/avatar-5.png',
        name:'Mark Steve',
        job:'Chief',
        reiew: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account'
    },

    {
        avatar:'/reviews/avatar-6.png',
        name:'Stork Gem ',
        job:'Chief',
        reiew: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account'
    },
]

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
        <div className='container mx-auto'>
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                <h2 className='section-title mb-12 text-center mx-auto'>
                    They say about our work
                </h2>
            </Fade>
            
            {/* Slider */}
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                <Swiper
                    // install Swiper modules
                    slidesPerView={1}
                    breakpoints={{
                        640: {slidesPerView: 2},
                        1400 : {slidesPerView: 3},
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    className='h-[350px]'
                    >
                    {
                        reviewsData.map((person, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Card className='p-8 min-h-[300px] hover:bg-tertiary dark:hover:bg-white/10 transition-all cursor-pointer duration-700'>
                                        <CardHeader className='p-0 mb-3'>
                                            <div className='flex flex-col items-start gap-x-4 cursor-pointer '>
                                                <Image 
                                                src={person.avatar}
                                                width={70}
                                                height={70}
                                                alt=''
                                                priority
                                                className='mb-0'
                                                />
                                                {/* Name */}
                                                <div className='flex flex-col'>
                                                    <CardTitle>{person.name}</CardTitle>
                                                    <p>{person.job}</p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardDescription className='text-lg text-muted-foreground'>
                                            {person.reiew}
                                        </CardDescription>
                                    </Card>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Fade>
            
        </div>
    </section>
  )
}

export default Reviews