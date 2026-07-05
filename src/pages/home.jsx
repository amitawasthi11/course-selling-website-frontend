import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import SectionTitle from "../components/SectionTitle";

function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto py-20 px-6">
        <SectionTitle
          title="Featured Courses"
          subtitle="Learn today's most demanding skills"
        />

        <div className="grid md:grid-cols-3 gap-8">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;