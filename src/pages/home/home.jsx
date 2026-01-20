import { ArrowRight } from 'lucide-react'
import React from 'react'
import AutoSwiper from '../../components/swiper'

const Home = () => {
  return (
    <main>
      <header>
        <section className='max-w-7xl m-auto lg:p-5 flex flex-col gap-5 lg:flex-row lg:justify-between'>
          <aside className='flex flex-wrap gap-2 p-5 lg:p-5 lg:gap-5 lg:flex-nowrap lg:flex-col'>
            <p className='flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0'>Woman’s Fashion <ArrowRight/></p>
            <p className='flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0'>Men’s Fashion <ArrowRight/></p>
            <p className='flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0'>Electronics</p>
            <p className='flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0'>Home & Lifestyle</p>
            <p className='flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0'>Medicine</p>
            <p className='flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0'>Sports & Outdoor</p>
            <p className='flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0'>Baby’s & Toys</p>
            <p className='flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0'>Groceries & Pets</p>
            <p className='flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0'>Health & Beauty</p>
          </aside>
          <hr className='h-full w-3' />
          <AutoSwiper/>
        </section>
        <section className='max-w-7xl m-auto p-5'></section>
      </header>
    </main>
  )
}

export default Home