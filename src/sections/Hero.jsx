import { useState } from 'react'

import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { balls, statistics } from '../constants'
import { bigBall1 } from '../assets/images'
import BallCard from '../components/BallCard'

const Hero = () => {
  const [bigBallImg, setbigBallImg] = useState(bigBall1)

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-crimson-red">Where Precision Meets Performance.</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[48px] max-sm:leading-[56px] font-bold">
          <span className="text-primary-black xl:whitespace-nowrap relative z-10 pr-10"><span className="text-crimson-red inline-block mt-3">Blitz </span> <br className="hidden xl:block"/> Basketballs</span>
        </h1>
        <p className="font-montserrat text-primary-black text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Find the perfect basketballs, gear, and inspiration to dominate the competition.</p>
        <Button 
        label="Shop Basketballs Now"
        iconURL={arrowRight}
        />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold text-golden-yellow">{stat.value}</p>
              <p className="leading-7 font-montserrat text-primary-black">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary-white bg-hero bg-cover bg-center">
        <img src={bigBallImg} alt="Ball collection" width={610} height={500} className="object-contain relative z-9" />
      
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] justify-center max-sm:px-6">
          {balls.map((ball) => (
            <div key={ball}>
              <BallCard 
              imgURL={ball}
              changeBigBallImage={(ball) => setbigBallImg(ball)}
              bigBallImg={bigBallImg}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero