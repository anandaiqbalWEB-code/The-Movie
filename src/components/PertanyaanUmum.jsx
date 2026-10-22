
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const pertanyaan = [
    {
        judul: "Apa itu THEMOVIE?",
        jawaban:
            "THEMOVIE adalah platform untuk menemukan informasi film dan serial TV, melihat poster, serta menjelajahi berbagai judul film favorit.",
    },
    {
        judul: "Bagaimana cara menonton film di THEMOVIE?",
        jawaban:
            "Pilih film yang ingin kamu lihat, lalu periksa informasi dan pilihan menonton yang tersedia pada halaman film tersebut.",
    },
    {
        judul: "Apakah THEMOVIE bisa diakses melalui HP?",
        jawaban:
            "Ya, website THEMOVIE dapat diakses melalui ponsel, tablet, laptop, dan komputer.",
    },
    {
        judul: "Apakah saya perlu membuat akun?",
        jawaban:
            "Kamu dapat menjelajahi informasi film tanpa akun jika fitur tersebut tersedia.",
    },
    {
        judul: "Apakah film bisa diunduh untuk ditonton offline?",
        jawaban:
            "Fitur unduh offline hanya tersedia jika didukung oleh layanan pemutaran film yang digunakan.",
    },
    {
        judul: "Apakah THEMOVIE aman untuk anak-anak?",
        jawaban:
            "Orang tua sebaiknya memeriksa rating usia dan deskripsi film sebelum anak menonton.",
    },
];

export default function PertanyaanUmum() {
    const [terbuka, setTerbuka] = useState(null);

    return (
        <div className="mx-auto max-w-240 px-5 md:px-10">
            <h2 className="my-2 text-xl font-bold">
                Tanya Jawab Umum
            </h2>

            <div className="flex flex-col gap-2">
                {pertanyaan.map((item, index) => {
                    const aktif = terbuka === index;
                    const Icon = aktif ? Minus : Plus;

                    return (
                        <div key={index} className="flex flex-col gap-0.5">
                            <button
                                onClick={() =>
                                    setTerbuka(aktif ? null : index)
                                }
                                className="flex items-center justify-between gap-4 bg-gray-800 px-3 py-3 text-left"
                                aria-expanded={aktif}
                            >
                                <span>{item.judul}</span>
                                <Icon size={26} className="shrink-0" />
                            </button>

                            {aktif && (
                                <div className="bg-gray-900 px-3 py-3">
                                    {item.jawaban}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
