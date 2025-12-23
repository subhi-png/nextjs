import Image from 'next/image';

export default function Home() {
  const news = [
    {
      title: "Driverless Robotaxi Testing in Austin",
      desc: "Fully unsupervised rides expanding fleet. Musk: 'Unsupervised FSD pretty much solved!'",
      date: "December 2025",
    },
    {
      title: "FSD v14.2+ Rollout",
      desc: "Smoother performance, better obstacle recognition. Outperforming competitors in real-world tests.",
      date: "December 23, 2025",
    },
    {
      title: "Optimus in Factories",
      desc: "Thousands of robots deployed, limited external sales planned for 2026. Trillion-dollar potential.",
      date: "December 2025",
    },
    {
      title: "Energy Storage Records",
      desc: ">100% YoY growth in deployments, margins higher than auto business.",
      date: "December 2025",
    },
    {
      title: "TSLA Near All-Time Highs",
      desc: "Stock ~$485–490. Analysts bull targets $500–600+ on autonomy & robotics.",
      date: "December 24, 2025",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src="/optimus-hero.jpg"
          alt="Optimus exiting Cybertruck"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 text-red-500 drop-shadow-2xl">
            TeslaBullFeed
          </h1>
          <p className="text-2xl md:text-4xl text-center mb-8 drop-shadow-lg">
            Daily Dose of TSLA Bull Catalysts
          </p>
          <p className="text-xl md:text-3xl drop-shadow-lg">
            🚀 No FUD, Only Moon 🌕
          </p>
        </div>
      </div>

      {/* News Feed */}
      <section className="w-full max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-red-500">
          Latest Bull Catalysts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <div key={i} className="bg-gray-900 p-8 rounded-xl shadow-2xl hover:shadow-red-500/50 transition">
              <h3 className="text-2xl font-bold mb-4 text-red-400">{item.title}</h3>
              <p className="text-lg mb-4">{item.desc}</p>
              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
