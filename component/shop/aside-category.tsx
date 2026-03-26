import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Category = () => {
  return (
    <div className="left-side flex flex-col  sm:w-1/2 md:w-1/4 lg:w-1/5 gap-6">
          <div className="menu flex items-center gap-2 text-[var(--foreground)]">
            <Menu style={{color: 'blue'}} className="w-5 h-5" />
            <h3 className="text-lg text-[var(--foreground)]  font-bold">Filters</h3>
          </div>

          <div className=" py-4">
            <h3 className="text-lg text-[var(--muted)] font-bold">Category</h3>
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex items-center">
                {/* <input type="checkbox" name="apple" className="w-5 h-5 mr-4" /> */}
                <Link href="/products?category=Laptop" className="text-base text-[var(--muted)] hover:text-[var(--foreground)]">
                  Laptop
                </Link>
              </div>
              <div className="flex items-center">
                {/* <input type="checkbox" name="apple" className="w-5 h-5 mr-4" /> */}
                <Link href="/products?category=Smartphone" className="text-base text-[var(--muted)] hover:text-[var(--foreground)]">
                  SmartPhone
                </Link>
              </div>
              <div className="flex items-center">
                {/* <input type="checkbox" name="apple" className="w-5 h-5 mr-4" /> */}
                <Link href="/products?category=Headphones" className="text-base text-[var(--muted)] hover:text-[var(--foreground)]">
                  HeadPhone
                </Link>
              </div>
              <div className="flex items-center">
                {/* <input type="checkbox" name="apple" className="w-5 h-5 mr-4" /> */}
                <Link href="/products?category=Watch" className="text-base text-[var(--muted)] hover:text-[var(--foreground)]">
                  Watch
                </Link>
              </div>
            </div>
          </div>
          {/* brand */} 
          <div className="brand py-4">
            <h3 className="text-lg text-[var(--muted)] font-bold">Brand</h3>
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex items-center">
                <input type="checkbox" name="apple" className="w-5 h-5 mr-4" />
                <p className="text-base  text-[var(--foreground)]">Sony</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="apple" className="w-5 h-5 mr-4" />
                <p className="text-base  text-[var(--foreground)]">Asus</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="apple" className="w-5 h-5 mr-4" />
                <p className="text-base  text-[var(--foreground)]">Samsung</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="apple" className="w-5 h-5 mr-4" />
                <p className="text-base  text-[var(--foreground)]">Infinix</p>
              </div>
            </div>
          </div>
          <div className=" py-4">
            <h3 className="text-lg text-[var(--muted)] font-bold">price</h3>
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex items-center">
                <input type="checkbox" name="apple" className="w-5 h-5 mr-4" />
                <p className="text-base  text-[var(--foreground)]">Sony</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="apple" className="w-5 h-5 mr-4" />
                <p className="text-base  text-[var(--foreground)]">Asus</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="apple" className="w-5 h-5 mr-4" />
                <p className="text-base  text-[var(--foreground)]">Samsung</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="apple" className="w-5 h-5 mr-4" />
                <p className="text-base  text-[var(--foreground)]">Infinix</p>
              </div>
            </div>
          </div>
          <div className="brand py-4">
            <h3 className="text-lg text-[var(--muted)] font-bold">FEATURES</h3>
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex items-center">
                <input type="checkbox" name="apple" className="w-5 h-5 mr-4" />
                <p className="text-base  text-[var(--foreground)]">Noise Canceling</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="apple" className="w-5 h-5 mr-4" />
                <p className="text-base  text-[var(--foreground)]">4K Display</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="apple" className="w-5 h-5 mr-4" />
                <p className="text-base  text-[var(--foreground)]">TouchScreen</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="apple" className="w-5 h-5 mr-4" />
                <p className="text-base  text-[var(--foreground)]">Infinix</p>
              </div>
            </div>
          </div>
          
          
          
        </div>
  )
}

export default Category