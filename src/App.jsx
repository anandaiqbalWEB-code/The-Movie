
import { Languages, ChevronRight, ChevronLeft } from 'lucide-react'

import FollowCart from "./components/FollowCart.jsx"
import PertanyaanUmum from "./components/PertanyaanUmum.jsx"
import Footer from "./components/Footer.jsx"

import gambarBanyakFilm from './assets/header/banyak-film.webp';

import { useState, useEffect, useRef } from 'react';

function App() {

  const [movie, setMovie] = useState([])

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState("")


  const simpanGeserKananKiri = useRef(null)

  useEffect(() => {

    async function getData() {

      setLoading(true)
      setError('')

      try {

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=4e4cc38d679c925a9b95844e4c845248&language=id-ID&page=1`
        );

        if (!response.ok) {
          throw new Error("gagal ambil data")
        }

        const data = await response.json();

        console.log(data.results);

        const sepuluhFilm = data.results.slice(0, 10)

        setMovie(sepuluhFilm)

      } catch (error) {
        setError(error.message)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 6000);
      }
    }

    getData()

  }, [])

  const geserKananKiri = (sejauh) => {

    if (!simpanGeserKananKiri.current) return;

    simpanGeserKananKiri.current.scrollBy({
      left: sejauh * 300,
      behavior: "smooth",
    })
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div className="bg-black text-white">

      <div>

        <header className='flex flex-col items-center'>

          <div className='absolute w-full'>

            <div className="relative z-10 w-full h-screen overflow-hidden">

              <img
                src={gambarBanyakFilm}
                alt="banyak-film"
                className="absolute inset-0 z-0 w-full h-full object-cover opacity-40"
              />

              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />

            </div>

          </div>

          <div className="z-20 flex justify-between w-[90%] md:w-[80%] pt-5">

            <h1 className="text-3xl text-red-500 font-bold "><span className='text-white'>THE</span>MOVIE</h1>

            <div className="flex gap-2">

              <div className='flex items-center p-0.5 border border-white'>

                <Languages size={20} />

                <select>

                  <option className="text-black">Bahasa Indonesia</option>
                  <option className="text-black">English</option>

                </select>

              </div>

              <button className='opacity-100 px-2 rounded-md bg-red-500 hover:bg-red-700'>Masuk</button>

            </div>

          </div>

          <div className='z-20 flex flex-col justify-center text-center max-w-100 h-145 mx-auto'>

            <div className='flex flex-col gap-5'>

              <h1 className='text-3xl md:text-4xl font-[Roboto] font-bold leading-normal'>
                Film dan serial TV <br />
                tanpa batas, dan lebih <br />
                banyak lagi
              </h1>

              <h3 className='text-md'>Harga mulai dari Rp54.000.Batalkan kapan pun.</h3>

              <p className='text-xs'>Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu</p>

            </div>

            <form className='flex gap-1 w-full mt-4'>

              <input type="email" className='flex-1 px-2.5 py-2 border border-gray-500 rounded-md' placeholder='Alamat Email' />

              <button className='flex items-center px-2.5 py-2 rounded-md bg-red-500'>Mulai <ChevronRight size={20} /> </button>
            </form>
          </div>
        </header>


        <main>

          {/* SKELETON FILM  */}

          {loading ? (
            <aside className="overflow-hidden mx-4 mt-20">
              <div className="flex flex-nowrap gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-45 w-30 shrink-0 animate-pulse rounded-lg bg-gray-800 md:h-70 md:w-50"
                  />
                ))}
              </div>
            </aside>

          ) : (

            // FILM FILM ADA DISINI 

            <section loading='lazy' className="max-w-300 mx-auto px-3 pt-10">

              <h2 className='text-xl font-bold'>Sedang Trending</h2>

              <div className='flex items-center gap-2 mt-5'>

                <button onClick={() => geserKananKiri(-1)} className='h-30 bg-gray-700'>
                  <ChevronLeft />
                </button>

                <div
                  ref={simpanGeserKananKiri}
                  className={`flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
                >

                  {movie.map((item, index) => (
                    <article
                      key={item.id}
                      className="relative shrink-0 overflow-hidden rounded-lg bg-pink-400"
                    >
                      <img
                        src={
                          item.poster_path
                            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                            : "/no-poster.png"
                        }
                        alt={item.title}
                        loading={index < 4 ? "eager" : "lazy"}
                        decoding='async'
                        className="h-45 md:h-70 w-30 md:w-50 rounded-t-lg object-cover"
                      />

                      <p className='absolute -left-1 bottom-4 z-50 text-7xl md:text-9xl font-black text-black'><span className='[-webkit-text-stroke:0.5px_white]'>{index + 1}</span></p>
                    </article>
                  ))}

                </div>

                <button onClick={() => geserKananKiri(1)} className='h-30 bg-gray-700'>
                  <ChevronRight />
                </button>

              </div>
            </section>

          )}

          <section className=' mx-5 mt-6'>
            <div className='max-w-300 mx-auto'>

              <h2 className='text-2xl font-bold'>Alasan Lainnya Untuk Bergabung</h2>

              <FollowCart />

            </div>
          </section>

          <section className='mt-8'>

            <PertanyaanUmum />
          </section>


        </main>

        <footer className='mt-10'>

          <div>

            <p className='text-center mx-4 md:mx-8 mb-2'>Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</p>

            <form className='flex gap-1 w-[90%] max-w-240 mx-auto lg:px-6' >

              <input type="email" className='flex-1 px-2 rounded-sm border border-gray-600' placeholder='Alamat Email' />

              <button type='submit' className='flex px-3 py-2 rounded-xs bg-red-500'>Mulai <ChevronRight /> </button>

            </form>

            <div>

            </div>
          </div>

          <Footer />
        </footer>
      </div>
    </div >

  )
}

export default App;