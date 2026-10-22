export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#090b10] px-6 pt-14 pb-6 text-white md:px-12 lg:px-20">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                {/* Brand */}
                <div>
                    <a href="/" className="text-2xl font-extrabold tracking-tight">
                        <span className="text-white">THE</span>
                        <span className="text-red-600">MOVIE</span>
                        <span className="text-red-600">.</span>
                    </a>

                    <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
                        Temukan film favoritmu, jelajahi dunia hiburan,
                        dan nikmati cerita tanpa batas bersama TheMovie.
                    </p>
                </div>

                {/* Navigasi */}
                <div>
                    <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
                        Navigasi
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="/" className="transition hover:text-red-500">Beranda</a></li>
                        <li><a href="/movies" className="transition hover:text-red-500">Film</a></li>
                        <li><a href="/tv-shows" className="transition hover:text-red-500">Serial TV</a></li>
                        <li><a href="/trending" className="transition hover:text-red-500">Trending</a></li>
                    </ul>
                </div>

                {/* Informasi */}
                <div>
                    <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
                        Informasi
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="/about" className="transition hover:text-red-500">Tentang Kami</a></li>
                        <li><a href="/contact" className="transition hover:text-red-500">Kontak</a></li>
                        <li><a href="/privacy" className="transition hover:text-red-500">Kebijakan Privasi</a></li>
                        <li><a href="/terms" className="transition hover:text-red-500">Syarat & Ketentuan</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
                        Tetap Terhubung
                    </h3>
                    <p className="mb-4 text-sm leading-6 text-gray-400">
                        Jangan lewatkan rekomendasi dan informasi film terbaru.
                    </p>
                    
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center">
                <p>© {new Date().getFullYear()} TheMovie. All rights reserved.</p>
                <p>
                    Made with <span className="text-red-600">♥</span> for movie lovers.
                </p>
            </div>
        </footer>
    );
}
