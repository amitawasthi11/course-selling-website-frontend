function Stats() {
  const stats = [
    {
      number: "10+",
      title: "Premium Courses",
    },
    {
      number: "500+",
      title: "Happy Students",
    },
    {
      number: "20+",
      title: "Real Projects",
    },
    {
      number: "24/7",
      title: "Support",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center p-8"
          >
            <h1 className="text-5xl font-bold text-blue-600">
              {item.number}
            </h1>

            <p className="mt-4 text-gray-600 font-medium">
              {item.title}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;