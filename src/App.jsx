
import { Languages, ChevronRight } from 'lucide-react'

import { useState, useEffect } from 'react';

function App() {

  return (
    <div className="bg-black text-white">

      <div>

        <header className='flex flex-col items-center border border-white'>

          <div className="flex justify-between w-[90%] md:w-[80%] pt-5">

            <h1 className="text-3xl text-red-500 font-bold ">THEMOVIE</h1>

            <div className="flex gap-2">

              <div className='flex items-center p-0.5 border border-white'>

                <Languages size={20} />

                <select className="">

                  <option>Bahasa Indonesia</option>
                  <option>English</option>

                </select>

              </div>

              <button className='px-2 rounded-md bg-red-500 hover:bg-red-700'>Masuk</button>

            </div>

          </div>

          <div className='flex flex-col justify-center text-center max-w-100 h-145'>

            <div className='flex flex-col gap-5'>

              <h1 className='text-3xl font-bold leading-normal'>
                Film dan serial TV <br />
                tanpa batas, dan lebih <br />
                banyak lagi
              </h1>

              <h3 className='text-md font-bold'>Harga mulai dari Rp54.000.Batalkan kapan pun.</h3>

              <p className='text-xs'>Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu</p>

            </div>

            <form className='flex gap-1 w-full mt-4'>

              <input type="email" className='flex-1 px-2.5 py-2 border border-gray-500 rounded-md' placeholder='Alamat Email' />

              <button className='flex items-center px-2.5 py-2 rounded-md bg-red-500'>Mulai <ChevronRight size={20} /> </button>
            </form>
          </div>
        </header>


        <main>


        </main>
      </div>
    </div>

  )
}

export default App;