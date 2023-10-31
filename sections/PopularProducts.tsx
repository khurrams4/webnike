import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='w-full max-sm:mt-12 '>
      <div className='flex flex-row justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <br/>
        <div className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 ">
          
         {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))} 
      </div>
    </section>
  );
};

export default PopularProducts;
