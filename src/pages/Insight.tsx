
const ArticleCard = ({ title, excerpt, date }: { title: string; excerpt: string; date: string }) => (
  <article className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
    <h3 className="font-semibold text-accent">{title}</h3>
    <p className="text-gray-600 text-sm mt-2">{excerpt}</p>
    <div className="text-xs text-gray-400 mt-4">{date}</div>
  </article>
);

export default function Insights() {
  const posts = [
    {
      title: "Next Delta launches national payment platform",
      excerpt: "A secure, interoperable digital payment stack for government services and collections.",
      date: "Oct 2025",
    },
    {
      title: "K-NET expands satellite coverage",
      excerpt: "Upgrading teleport capacity to support new national broadcasters and OTT distribution.",
      date: "Sep 2025",
    },
    {
      title: "Freshh Drops solar-powered water centres",
      excerpt: "Modular, solar-driven water provision for rural communities.",
      date: "Aug 2025",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Insights & News</h1>
          <div className="w-20 h-1 bg-secondary mx-auto my-4 rounded-full"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">Thought leadership, press and announcements from Next Delta Capital.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <ArticleCard key={i} {...p} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/insights-news" className="inline-block px-6 py-3 bg-secondary text-white rounded-full">View all updates</a>
        </div>
      </div>
    </section>
  );
}
