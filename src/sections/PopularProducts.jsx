import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Elevate Your Game with Our <span className="text-crimson-red">Top-Selling</span> Basketballs</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-primary-black">Looking to take your skills to the next level? Look no further than Blitz Basketball's most popular picks! Whether you're a seasoned competitor or just starting out, we have the perfect ball to help you dominate the court.</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts