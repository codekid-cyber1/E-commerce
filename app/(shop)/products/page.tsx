// // import { ChevronRight } from "lucide-react";
// import React from "react";

// // function ProductsPage({
// //   searchParams,
// // }: {
// //   searchParams: { category?: string };
// // })
// const Page = ({ searchParams }: { searchParams: { category?: string } }) => {
//   const selectedCategory = searchParams.category;

//   console.log(` this is `, selectedCategory);

//   const allProducts = [
//     { id: 1, name: "MacBook Pro", category: "laptop" },
//     { id: 2, name: "iPhone 15", category: "phone" },
//     { id: 3, name: "Sony Headphones", category: "audio" },
//   ];

//   const filteredProducts = selectedCategory
//     ? allProducts.filter((p) => p.category === selectedCategory)
//     : allProducts;

//   return (
//     <div className="p-6">
//       <h1>Showing {selectedCategory || "All"} Products</h1>
//       <div className="grid">
//         {filteredProducts.map((product) => (
//           <div key={product.id}>{product.name}</div>
//         ))}
//       </div>
//     </div>
//   );
// };
// {
//   /* <div className="flex">
//         <p>
//           Home <ChevronRight />
//         </p>
//         <p>
//           All Products <ChevronRight />
//         </p>
//         <p>{selectedCategory || "All Categories"}</p>
//       </div> */
// }
// export default Page;
// {/* {filteredProducts.map((product) => (
//           <div key={product.id}>
//             <h2>{product.name}</h2>
//           </div>
//         ))} */}

// app/products/page.tsx

import { AllProducts } from "@/lib/constants";

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
    <div>
      <h1>Showing {category || "All"} Products</h1>
      <div className="grid">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            {product.name} {product.category}
          </div>
        ))}
      </div>
    </div>
  );
}
