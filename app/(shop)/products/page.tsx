import { ArrowRight, ChevronRight, Menu} from "lucide-react";
import React from "react";

import Image from "next/image";

import { AllProducts } from "@/lib/constants";
import Link from "next/link";
import Category from "@/component/shop/aside-category";

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
    <div className="px-16 mb-16">
      <div className="flex pb-6">
        <Link
          className="flex text-sm text-[var(--muted)] hover:text-[var(--foreground)] items-center justify-center "
          href="/"
        >
          Home <ChevronRight className="w-4 h-4" />
        </Link>
        <Link
          className="flex text-sm text-[var(--muted)] hover:text-[var(--foreground)] items-center justify-center "
          href="/products"
        >
          All Products <ChevronRight className="w-4 h-4" />
        </Link>
        <p className="flex text-sm text-[var(--muted)] hover:text-[var(--foreground)] items-center justify-center ">
          {category || ""}
        </p>
      </div>

      <div className="flex relative gap-4">
        <Category/>
        <div className="right-side">
          <div className="w-full overflow-hidden rounded-lg">
        <div className="outline-none">
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-1">
            {category || "Premium Tech Gear"}
          </h2>
          <div className="flex justify-between items-center mb-8">
            <p className="text-xs sm:text-sm text-[var(--muted)]">
              Our most popular gear this week.
            </p>
            <Link
              href="/products"
              className="text-xs sm:text-sm text-[var(--accent)] relative flex flex-row gap-1"
            >
              View All <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {filteredProducts.map((product) => (
            <div key={product.id} className=" outline-none">
              <div className="flex flex-col   gap-4 relative max-w-sm rounded-sm overflow-hidden cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={248}
                  height={248}
                  className="w-full h-auto object-cover"
                />
                <div className="flex flex-col justify-center gap-1 p-2">
                  <p className="text-[var(--foreground)] font-bold text-lg ">
                    {product.name}
                  </p>
                  <p className="text-[var(--accent)] font-bold">{product.price}</p>
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
