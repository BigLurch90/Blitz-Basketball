import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col gap-24 max-container">
      <div className="flex-1">
        <img src={offer} alt="Special offer image" className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">Suit Up and <span className="text-crimson-red"> Dominate: </span> The Blitz Basketball Complete Kit</h2>
          <p className="mt-4 lg:max-w-lg info-text">Looking to elevate your game and show off your team spirit? Look no further than the Blitz Basketball Complete Kit! This exclusive offer bundles everything you need to hit the court with confidence:</p>
          <p className="mt-4 lg:max-w-lg info-text"><span className="font-bold">A premium Blitz Basketball: </span> Engineered for optimal grip, control, and performance.</p>
          <p className="mt-2 lg:max-w-lg info-text"><span className="font-bold">A sleek and breathable Blitz Jersey: </span> Rep your favorite team or customize yours with your own name and number.</p>
          <p className="mt-2 lg:max-w-lg info-text"><span className="font-bold">A durable Blitz Basket: </span> Perfect for honing your skills and showcasing your moves.</p>
          
          <p className="mt-6 lg:max-w-lg font-montserrat text-primary-black text-xl leading-7 font-bold"> Don't miss out on this chance to complete your basketball setup!</p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop now" iconURL={arrowRight}/>
            <Button label="Learn more" backgraundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer