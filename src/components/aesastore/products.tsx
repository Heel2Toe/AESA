import ProductCard from "./product-card";

const srcs = [
    "./assets/product1.jpg",
    "./assets/product2.jpg",
    "./assets/product3.jpg",
    "./assets/product4.jpg",
    "./assets/product5.jpg",
]

const Products = () => {
    return ( 
        <div id="products" className=" h-auto w-auto bg-blue-100 flex flex-col p-3 py-8 space-y-6 md:space-y-10 overflow-hidden overflow-y-scroll">
            <h1 className="sporty-font text-3xl sm:text-4xl md:text-5xl text-[#244F67]">OUR PRODUCTS</h1>
            <div className="h-auto w-full grid grid-cols-2 [@media(min-width:915px)]:grid-cols-3 gap-7 justify-items-center pb-2">
             {srcs.map((item, key)=>(
                <ProductCard key={key} image={item}/>
             ))}
            </div>
        </div>
     );
}
 
export default Products;