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
          <h1 className="text-8xl text-center flex font-bold ml-10">
            DESIGNER UX
          </h1>

          <p className="text-start p-10 ml-80 mr-30 mt-15">
            I AM A DEVELOPER AND UX DESIGNER ESTABLISHED IN CHILE. MY LACK OF
            WORK EXPERIENCE IN THIS NEW WORLD IS COMPENSATED WITH MY CREATIVITY
            AND AUTONOMY IN CONSULTING LEARNING. I LOVE THE SOFT DESIGN AND THE
            TECHNOLOGY. I LOVE NATURE, PIZZA AND ART.
          </p>

          <button class="ml-80 relative px-6 py-3 font-bold text-white group">
            <span class="absolute inset-0 w-full h-full border-4 border-white hover:translate-y-10"></span>
            <span class="relative">CONTACT ME</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
