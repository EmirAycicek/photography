import Image from 'next/image'
import React from 'react'

const HeroImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
        <Image 
        src={imgSrc} fill  priority
        alt=''
        />

    </div>
  )
}

export default HeroImg