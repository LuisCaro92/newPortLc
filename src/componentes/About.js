const About = () => {
  return (
    <div className="w-full h-screen bg-cover">
      <div className="justify-center ">
        <br></br>
        <div className="mt-20 content-center text-center text-4xl">
          <div className="flex font-bold">
            <h1 className="text-8xl ml-10">DEVELOPER</h1>
            <h1 className="mt-8 text-5xl">&</h1>
          </div>
          <h1 className="text-8xl text-center flex font-bold ml-10">DESIGNER UX</h1>

          <p className="text-start p-10 ml-80 mr-30 mt-15">
            I AM A DEVELOPER AND UX/UI DESIGNER BASED IN ITALY. I HAVE MANY
            YEARS OF EXPERIENCE IN CONSULTING IN ALL AREAS OF DIGITAL. I LOVE
            MINIMAL AND BRUTALIST DESIGN. I LOVE NATURE, PIZZA AND ART.
          </p>

          <button class="ml-80 relative px-6 py-3 font-bold text-white group">
            <span class="absolute inset-0 w-full h-full opacity-40 transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-gray-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full border-4 border-white"></span>
            <span class="relative">CONTACT ME</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
