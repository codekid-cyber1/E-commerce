import { ChevronRight, Heart, LucideShoppingCart, Star } from "lucide-react";
import React from "react";
import Image from "next/image";
import AddToCartIcon from "@/component/shop/AddToCartIcon";

import { AllProducts } from "@/lib/constants";
import Link from "next/link";
import Category from "@/component/shop/aside-category";
// import heart from "@/component/ui/heart";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const filteredProducts = category
    ? AllProducts.filter((p) => p.category === category)
    : AllProducts;

  return (
    <div className="px-16 my-20">
      <div className="flex pb-6">
        <Link
          className="flex sm:text-sm text-lg text-[var(--muted)] hover:text-[var(--foreground)] items-center justify-center "
          href="/"
        >
          Home <ChevronRight className="w-6 h-6 sm:w-4 sm:h-4" />
        </Link>
        <Link
          className="flex sm:text-sm text-lg text-[var(--muted)] hover:text-[var(--foreground)] items-center justify-center "
          href="/products"
        >
          All Products <ChevronRight className="w-6 h-6 sm:w-4 sm:h-4" />
        </Link>
        <p className="flex text-lg sm:text-sm text-[var(--muted)] hover:text-[var(--foreground)] items-center justify-center ">
          {category || ""}
        </p>
      </div>

      <div className="flex sm:flex-row flex-col relative gap-4">
        <Category />
        <div className="right-side">
          <div className="w-full overflow-hidden rounded-lg">
            <div className="outline-none">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-1">
                {category || "Premium Tech Gear"}
              </h2>
              <div className="flex justify-between items-center mb-8">
                <p className="text-xs sm:text-sm text-[var(--muted)]">
                  {category
                    ? `Discover our top-rated ${category} selections.`
                    : "Our most popular gear this week."}
                </p>
                {/* <Link
                  href="/products"
                  className="text-xs sm:text-sm text-[var(--accent)] relative flex flex-row gap-1"
                >
                  View All <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link> */}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {filteredProducts.map((product) => (
                <div key={product.id} className=" outline-none">
                  <div className="flex flex-col shadow-lg   gap-4 relative max-w-sm rounded-lg overflow-hidden bg-[var(--background)]">
                    <Link
                      href={`/products/${product.id}`}
                      className="block relative cursor-pointer"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={248}
                        height={248}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform"
                      />
                    </Link>
                    <div className="flex flex-col justify-center gap-1 p-2">
                      <div className="flex items-center justify-between text-[var(--muted)]">
                        <p className="text-sm">{product.brand}</p>
                        {/* <Heart/> */}
                        <Heart  className="w-4 h-4 text-red-500 cursor-pointer hover:fill-red-600" />
                      </div>
                      <Link
                        href={`/products/${product.id}`}
                        className="cursor-pointer"
                      >
                        <p className="text-[var(--foreground)]  font-bold text-lg hover:underline ">
                          {product.name}
                        </p>
                      </Link>
                     
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            style={{
                              color: i < product.rating ? "orange" : "var(--muted)",
                            }}
                            className={`w-3 h-3 ${i < product.rating ? "fill-orange-200" : ""}`}
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[var(--foreground)] font-bold">
                          ₦{product.price}
                        </p>
                        <AddToCartIcon product={product} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
