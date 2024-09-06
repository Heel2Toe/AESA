import ProductCard from "./product-card";

const srcs = [
    "/src/assets/product1.jpg",
    "/src/assets/product2.jpg",
    "/src/assets/product3.jpg",
    "/src/assets/product4.jpg",
    "/src/assets/product5.jpg",
]

const Products = () => {
    return ( 
        <div id="products" className="h-auto w-full bg-blue-100 flex flex-col p-4 py-8 space-y-10">
            <h1 className="sporty-font text-5xl text-cyan-900">OUR PRODUCTS</h1>
            <div className="h-auto w-full grid grid-cols-3 gap-7 justify-items-center pb-2">
             {srcs.map((item)=>(
                <ProductCard image={item}/>
             ))}
            </div>
        </div>
     );
}
 
export default Products;