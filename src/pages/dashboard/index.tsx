export const DashboardPage = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="container px-6 py-16 mx-auto min-h-screen">
        <div className="items-center lg:flex justify-center h-screen">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Best place to choose <br /> your{" "}
                <span className="text-blue-500">clothes</span>
              </h1>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>
              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://merakiui.com/images/components/Catalogue-pana.svg"
              alt="Catalogue-pana"
            />
          </div>
        </div>
      </div>

      <div className="container px-6 py-16 mx-auto min-h-screen">
        <div className="">
          <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-blue-400">
            <div className="absolute top-0 aspect-square w-full rotate-[calc(72deg-45deg)] bg-gradient-to-tr from-transparent from-50% to-white to-50% transition-transform duration-500"></div>
            <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-blue-100"></div>
            <div className="absolute bottom-0 w-full truncate text-center text-[20vmax] leading-none">
              40%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
