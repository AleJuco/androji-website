export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-gray-200 flex items-center">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-col items-center gap-8">
        {/* Image column */}
        <div className="w-full md:w-1/2">
          <img
            src="/file.svg"
            alt="Team illustration"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text column */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">About</h1>
          <p className="text-lg text-black mb-6">
            We are a passionate group of individuals dedicated to building great things.
          </p>
        </div>
      </div>
    </section>
  );
}
