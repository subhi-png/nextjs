import React from 'react';

const currentPrice = "438.07";
const priceChange = "-11.65 (-2.59%)";

const catalysts = [
  {
    title: "Robotaxi Network Expansion",
    description: "Broader rollout to new cities, paid rides for owners, unsupervised FSD scaling. Trillion-dollar opportunity accelerating.",
    date: "Throughout 2026",
  },
  {
    title: "Optimus Production Ramp",
    description: "Higher-volume factory production starts. In-house deployment + first external sales targeted late 2026/2027.",
    date: "2026–2027",
  },
  {
    title: "Cybercab Volume Production",
    description: "Dedicated robotaxi vehicle (Cybercab) hits the roads. Affordable next-gen platform unlocking mass autonomy.",
    date: "2026",
  },
  {
    title: "Energy Storage Supercycle",
    description: "Megapack deployments continue explosive growth. Margins beating automotive, becoming major profit driver.",
    date: "Ongoing 2026",
  },
  {
    title: "Tesla Semi High-Volume Ramp",
    description: "Electric semi-trucks scale production. New fleets adopting, logistics revolution underway.",
    date: "2026",
  },
];

export default function TeslaBullFeed() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 to-black/80">
          <img
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&q=80"
            alt="Tesla Vehicle"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
          <h1 className="mb-6 text-6xl md:text-8xl font-bold text-red-500 animate-pulse">
            TeslaBullFeed
          </h1>
          <p className="mb-8 text-2xl md:text-4xl font-light">
            Daily Dose of TSLA Bull Catalysts
          </p>
          <p className="text-xl md:text-3xl">
            🚀 No FUD, Only Moon 🌕
          </p>
        </div>
      </section>

      {/* Live Price Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16 text-center border-t-4 border-red-500">
        <h2 className="mb-6 text-4xl md:text-6xl font-bold text-red-500">
          TSLA Live Price
        </h2>
        <div className="text-6xl md:text-8xl font-bold text-white mb-2">
          ${currentPrice}
        </div>
        <p className="mt-4 text-2xl text-red-400">
          {priceChange}
        </p>
        <p className="text-gray-400 text-sm mt-2">as of Jan 5, 2026</p>
      </section>

      {/* Bull News Feed */}
      <section className="max-w-7xl mx-auto px-4 py-20 pb-32">
        <h2 className="mb-16 text-center text-4xl md:text-6xl font-bold text-red-500">
          Bull News Feed – 2026 Catalysts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalysts.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-105 hover:shadow-red-500/30"
            >
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-3">🚀</span>
                <h3 className="text-2xl font-bold text-red-400">
                  {item.title}
                </h3>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                {item.description}
              </p>
              <div className="flex items-center text-sm text-gray-400 border-t border-gray-700 pt-4">
                <span className="mr-2">📅</span>
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-red-500 py-8 text-center">
        <p className="text-gray-400">
          © 2026 TeslaBullFeed | Not Financial Advice | HODL Strong 💎🙌
        </p>
      </footer>
    </main>
  );
}
