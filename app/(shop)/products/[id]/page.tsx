import { AllProducts, trending, related, SideImg } from "@/lib/constants";
import { notFound } from "next/navigation";
import { Star,  ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductGallery from "./ProductGallery";
import Image from "next/image";
import ProductButtons from "@/component/shop/ProductButtons";



export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const product = AllProducts.concat(trending as any[]).concat(related as any[]).find((p) => p.id.toString() === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="px-12 flex flex-col gap-4">

    
    <div className=" mb-16 mt-8 w-full  mx-auto">
      <Link
        href="/products"
        className="inline-flex items-center text-[var(--muted)] hover:text-[var(--foreground)] mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>
      <div className="flex flex-col md:flex-row gap-12 bg-[var(--background)] rounded-2xl p-6 md:p-8 shadow-sm">
        
        <ProductGallery 
          productImage={product.image} 
          productName={product.name} 
          sideImages={SideImg} 
        />

        <div className="flex-1 flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm  font-semibold tracking-wider text-[var(--muted)] uppercase">
              {product.brand}
            </p>
            <h1 className="text-4xl  lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
              {product.name}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  style={{ color: i < product.rating ? "orange" : "#e5e7eb" }}
                  className={`w-4 h-4 lg:w-5 lg:h-5  ${i < product.rating ? "fill-orange-400" : ""}`}
                />
              ))}
            </div>
            <span className="text-xs lg:text-sm font-medium text-[var(--muted)]">
              ({product.reviews} reviews)
            </span>
          </div>

          <div className="text-2xl lg:text-3xl font-bold text-[var(--foreground)]">
            ₦{product.price.toLocaleString()}
            {"oldPrice" in product && product.oldPrice && (
              <span className="ml-3 text-lg text-red-500 line-through">
                ₦{product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>

          <p className=" lg:text-base md:text-sm text-[var(--muted)] leading-relaxed">
            Experience the ultimate quality and performance with the{" "}
            {product.name} by {product.brand}. Designed for excellence and made
            with premium materials to ensure the best experience possible in the{" "}
            {product.category} category.
          </p>

          <ProductButtons product={product} />
          {product.tag && (
            <div className="inline-flex mt-2 w-max">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-md">
                {product.tag}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
    
    <div className="w-full overflow-hidden py-4 ">
        <div className="outline-none">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-1">
            Complete the set     
          </h2>
          <div className="flex justify-between  items-center mb-8">
            <p className="text-xs sm:text-sm text-[var(--muted)]">
              Enhance your G-Tech experience with these accessories.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {related.map((item) => (
            <Link href={`/products/${item.id}`} key={item.id} className=" outline-none">
              <div className="flex flex-col   gap-4 relative max-w-sm rounded-sm overflow-hidden cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={248}
                  height={248}
                  className="w-full h-auto object-cover"
                />
                <div className="flex flex-col justify-center gap-1 p-2">
                  <p className="text-[var(--foreground)] font-bold text-lg hover:underline ">
                    {item.name}
                  </p>
                  <p className="text-[var(--accent)] font-bold">₦{item.price.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>


    </div>
  );
}
