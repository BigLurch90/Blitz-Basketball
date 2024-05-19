import { ball8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">More Than Just a Store: Our <span className="text-crimson-red"> Passion </span> is for the Game</h2>
          <p className="mt-4 lg:max-w-lg info-text">Blitz Basketball isn't just about selling equipment, it's about fostering a love for the sport that runs deep in our veins. We believe basketball is more than just dribbling a ball; it's about:</p>
          <p className="mt-4 lg:max-w-lg info-text"><span className="font-bold">The thrill of competition: </span> Pushing your limits, testing your skills, and striving for victory.</p>
          <p className="mt-2 lg:max-w-lg info-text"><span className="font-bold">The power of teamwork: </span> Sharing strategies, supporting your teammates, and celebrating success together.</p>
          <p className="mt-2 lg:max-w-lg info-text"><span className="font-bold">The dedication to improvement: </span> Constantly learning, refining your skills, and reaching your full potential.</p>
          <p className="mt-4 lg:max-w-lg info-text">We remember the feeling of that first perfect shot, the camaraderie on the court, and the lessons learned that extend far beyond the game. That's the passion we want to ignite in every player who visits Blitz Basketball.</p>
          <div className="mt-11">
            <Button label="View details"/>
          </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={ball8} alt="Image of a ball" width={570} height={522} className="object-contain" />
      </div>

    </section>
  )
}

export default SuperQuality