import React from 'react'
import { SectionWrapper  } from '../hoc'
import { technologies } from '../constants'
import Ball from './canvas/Ball'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <Ball icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper({ Component: Tech, idName: "tech" }); 
