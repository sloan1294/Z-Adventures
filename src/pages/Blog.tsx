const Blog = () => {
  return (
    <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
      <div className="bgc5 inset-0 h-screen bg-cover bg-center bg-[url('https://wallpapercave.com/wp/wp6689710.jpg')]"></div>
      <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
      <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
      <b className="text-6xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#fff] to-[#000300]">Stay updated with our blog!</b>
      <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
   
{/* Div 1 */}
    <div className="col-span-12 sm:col-span-6 md:col-span-3 mb-10 mt-[15%] hover:scale-105 duration-300">
    
        <div className="relative">

         
          <a href="https://www.yellowstone.org/10-tips-for-planning-your-yellowstone-fishing-trip/?gclid=Cj0KCQjw2qKmBhCfARIsAFy8buI0mKCjhH4dh2dxhT9gzD0QPI9WksZIB8IctN4jDDXdkSWra_FC2e0aAkC6EALw_wcB">
            <img src="https://picsum.photos/seed/59/300/200" className="w-96 h-auto" />
          </a>

          
        </div>

        <div className="flex flex-row mt-2 gap-2">

        
          <a href="#">
            <img src="https://picsum.photos/seed/1/40/40" className="rounded-full max-h-10 max-w-10" />
          </a>

         
          <div className="flex flex-col">
            <a href="#">
              <p className="text-gray-100 text-sm font-semibold">10 Tips For Your YellowStone Trip</p>
            </a>
            <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Reports From the Field </a>
            <p className="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
          </div>

        </div>
  
    </div>

  {/* Div 2 */}
    <div className="col-span-12 sm:col-span-6 md:col-span-3 mb-10 mt-[15%] hover:scale-105 duration-300">
      
        <div className="relative">

         
          <a href="https://www.statefarm.com/simple-insights/auto-and-vehicles/drive-safely-in-dense-fog">
            <img src="https://picsum.photos/seed/60/300/200" className="w-96 h-auto" />
          </a>

          
        </div>

        <div className="flex flex-row mt-2 gap-2">

        
          <a href="#">
            <img src="https://picsum.photos/seed/4/40/40" className="rounded-full max-h-10 max-w-10" />
          </a>

      
          <div className="flex flex-col">
            <a href="#">
              <p className="text-gray-100 text-sm font-semibold">Tips for Driving in Fog</p>
            </a>
            <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> State Farm. </a>
            <p className="text-gray-400 text-xs mt-1">131K views . 1 year ago</p>
          </div>

        </div>
    
    </div>

   {/* Div 3 */}
    <div className="col-span-12 sm:col-span-6 md:col-span-3 mb-10 mt-[15%] hover:scale-105 duration-300">
    
        <div className="relative">

         
          <a href="https://wanderlustcrew.com/europe-travel-tips/">
            <img src="https://picsum.photos/seed/22/300/200" className="w-96 h-auto" />
          </a>

          
        </div>

        <div className="flex flex-row mt-2 gap-2">
          
          <a href="#">
            <img src="https://picsum.photos/seed/88/40/40" className="rounded-full max-h-10 max-w-10" />
          </a>

        
          <div className="flex flex-col">
            <a href="#">
              <p className="text-gray-100 text-sm font-semibold">How to Travel Europe Like a Pro</p>
            </a>
            <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Wanderlust Crew </a>
            <p className="text-gray-400 text-xs mt-1">571K views . 1 year ago</p>
          </div>

        </div>
      
    </div>

 {/* Div 4 */}
    <div className="col-span-12 sm:col-span-6 md:col-span-3 mb-10 mt-[15%]">
      
        <div className="relative">

          
          <a href="https://www.travelandleisure.com/best-places-to-visit-in-spain-7481629">
            <img src="https://picsum.photos/seed/90/300/200" className="w-96 h-auto" />
          </a>

          
        </div>

        <div className="flex flex-row mt-2 gap-2">
          
         
          <a href="#">
            <img src="https://picsum.photos/seed/57/40/40" className="rounded-full max-h-10 max-w-10" />
          </a>

          
          <div className="flex flex-col">
            <a href="#">
              <p className="text-gray-100 text-sm font-semibold">Beautiful Places to Visit in Spain</p>
            </a>
            <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Lindsay Cohn </a>
            <p className="text-gray-400 text-xs mt-1">41K views . This year</p>
          </div>
          
        </div>
      
    </div>
  </div>
        <div className="shadow-2xl rounded-lg w-4/5 h-80 bg-cover bg-center bg-[url('https://wallpapercave.com/wp/wp6689710.jpg')]"></div>
      
      
</div>
    </div>
  );
};

export default Blog;
