import { Instagram, Linkedin, TwitterIcon } from 'lucide-react'
import React from 'react'

const Card3 = ({data}) => {
  return (
    <div className='flex flex-col gap-5 items-center lg:flex-row lg:justify-between'>
        {data.map((e) =>{
            return (
                <div className='flex flex-col items-start gap-5'>
                    <img className='hover:scale-105' src={e.img} alt={e.name} />
                    <h1 className='font-bold text-xl'>{e.name}</h1>
                    <p>{e.job}</p>  
                    <div className='flex items-center gap-3'>
                        <TwitterIcon/>
                        <Instagram/>
                        <Linkedin/>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Card3