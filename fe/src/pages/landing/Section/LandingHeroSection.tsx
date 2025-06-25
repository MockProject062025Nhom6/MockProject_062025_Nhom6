export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-opacity-40 z-10"></div>
      
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 lg:h-96">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="NYPD Officers"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Serving and Protecting New York City
            </h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              Community Partnership • Public Safety • Professional Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;