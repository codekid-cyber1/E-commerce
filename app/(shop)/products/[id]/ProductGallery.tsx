"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart } from "lucide-react";

interface ProductGalleryProps {
  productImage: string;
  productName: string;
  sideImages: { id: number; image: string }[];
}

export default function ProductGallery({ productImage, productName, sideImages }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(productImage);

  // Combine the main product image and the side images
  const allImages = [{ id: 0, image: productImage }, ...sideImages];

  return (
    <div className="flex flex-col flex-1 gap-6">
      {/* Main Image Display */}
      <div className="flex-1 flex items-center justify-center p-8 rounded-2xl bg-[var(--border)] relative group min-h-[400px]">
        <Image
          key={selectedImage} // forces re-animation on change if you wanted
          src={selectedImage}
          alt={productName}
          fill
          className="w-full h-auto object-cover rounded-lg drop-shadow-xl transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {allImages.map((img) => (
          <button
            key={img.id}
            onClick={() => setSelectedImage(img.image)}
            className={`relative rounded-lg overflow-hidden transition-all flex-shrink-0 cursor-pointer flex items-center justify-center p-2
              ${
                selectedImage === img.image
                  ? " opacity-100  ring-offset-2 ring-offset-[var(--background)]"
                  : "border-transparent opacity-60 hover:opacity-100"
              }
            `}
          >
            <Image
              src={img.image}
              alt={`${productName} thumbnail ${img.id}`}
              width={80}
              height={80}
              className="object-cover w-full h-20"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
