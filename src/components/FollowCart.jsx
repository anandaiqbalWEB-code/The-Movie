
const alasanBergabung = [
    {
        id: 1,
        judul: "Nikmati di TV-mu",
        penjelasan: "Tonton di Smart TV, playstation, xbox chromecast, apple tv, pemutar blu-ray, dan banyak lagi.",
        icon: Tv,
    },
    {
        id: 2,
        judul: "download serial untuk menontonnya secara offline",
        penjelasan: "simpan favoritmu dengan mudah agar selalu ada acara ditonton.",
        icon: Download,
    },
    {
        id: 3,
        judul: "tonton di mana pun",
        penjelasan: "streaming film dan acara tv, tanpa batas di ponsel, tablet, laptop, dan tv-mu.",
        icon: PlayCircle,
    },
    {
        id: 4,
        judul: "buat profil untuk anak",
        penjelasan: "kirim anank-anak untuk bertualang bersama karakter favorit di dunia yang dibuat khusus untuk mereka - gratis dengan keanggotaanmu.",
        icon: Baby,
    }
]

import {
    Tv,
    Download,
    PlayCircle,
    Baby,
} from "lucide-react";

export default function FollowCart() {



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
            {alasanBergabung.map((item) => {

                const Icon = item.icon;

                return (

                    <article key={item.id} className="px-4 py-3 bg-gradient-to-b from-blue-950 to-pink-950">

                        <div className=''>

                            <div>

                                <h2 className="text-2xl font-bold">{item.judul}</h2>

                                <p className="text-md">{item.penjelasan}</p>

                            </div>

                            <div className="">

                                <Icon size={60} className="ml-[80%]" />

                            </div>

                        </div>


                    </article>
                )
            }
            )}
        </div>
    )
}

