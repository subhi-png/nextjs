import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      {/* Hero изображение */}
      <div className="relative w-full h-screen">
        <Image
          src="/optimus-hero.jpg"
          alt="Optimus arriving to perform tasks at countryside house"
          fill
          className="object-cover brightness-50" // затемняем для текста сверху
          priority // быстрый загрузка для hero
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-red-500 drop-shadow-2xl">
            TeslaBullFeed
          </h1>
          <p className="text-2xl md:text-4xl mb-8 drop-shadow-lg">
            Daily Dose of TSLA Bull Catalysts
          </p>
          <p className="text-xl md:text-3xl text-white drop-shadow-lg">
            🚀 No FUD, Only Moon 🌕
          </p>
        </div>
      </div>

      {/* Ниже можно добавить ленту новостей, чарт и т.д. */}
      <section className="w-full max-w-4xl px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-red-500">
          Coming Soon
        </h2>
        <p className="text-xl text-center">
          Robotaxi • Optimus • Energy Records • FSD Progress
        </p>
      </section>
    </main>
  );
}
