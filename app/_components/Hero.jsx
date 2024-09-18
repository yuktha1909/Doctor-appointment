import { Button } from '@/components/ui/button'
import React from 'react'
function Hero() {
  return (
    <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="/doctor img.jpg"
          width={800}
          height={800}
          class="absolute inset-0 h-full
          rounded-3xl
          w-full object-cover"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl">Find & Book 
          <span className='text-primary'> Appointment</span>
           With Your Fav <span className='text-primary'>Doctors</span></h2>

        <p class="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

        <Button className="mt-10">Explore Now</Button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero

