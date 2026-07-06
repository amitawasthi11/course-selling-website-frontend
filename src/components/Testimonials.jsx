function Testimonials() {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Frontend Developer",
      review:
        "Skillora helped me master React with practical projects. The learning experience was amazing.",
    },
    {
      name: "Rahul Verma",
      role: "Full Stack Developer",
      review:
        "The backend course was well structured and easy to follow. Highly recommended!",
    },
    {
      name: "Priya Singh",
      role: "MERN Stack Learner",
      review:
        "Beautiful UI, practical content, and affordable courses. I really enjoyed learning here.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            What Our Students Say
          </h2>

          <p className="text-gray-500 mt-3">
            Trusted by learners across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-600 leading-7">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;