const About = () => {
  return (
    <div className="w-full h-screen bg-cover">
      <div className="justify-center ">
        <br></br>
        <div className="mt-20  text-center text-2xl">
          <div className="flex font-bold">
            <h1 className="text-6xl ml-10">DEVELOPER</h1>
            <h1 className="mt-8 text-3xl">&</h1>
          </div>
          <h1 className="text-6xl text-center flex font-bold ml-10">
            DESIGNER UX
          </h1>

          <p className="text-start p-6 ml-80 mr-30 mt-15 font-semibold">
            I AM A DEVELOPER AND UX DESIGNER ESTABLISHED IN CHILE. MY LACK OF
            WORK EXPERIENCE IN THIS NEW WORLD IS COMPENSATED WITH MY CREATIVITY
            AND AUTONOMY IN CONSULTING LEARNING. I LOVE THE SOFT DESIGN AND THE
            TECHNOLOGY. I LOVE NATURE, PIZZA AND ART.
          </p>

          <button class="ml-80 relative px-6 py-3 font-bold text-white group hover:translate-x-5 hover:shadow-xl hover:shadow-slate-300">
            <span class="absolute inset-0 w-full h-full border-4 border-white "></span>
            <span class="relative">CONTACT ME</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
