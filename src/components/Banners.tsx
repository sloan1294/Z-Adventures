
import f1 from "../assets/features/f1.png";
import f2 from "../assets/features/f2.png";
import f3 from "../assets/features/f3.png";
import f4 from "../assets/features/f4.png";
import f5 from "../assets/features/f5.png";
import f6 from "../assets/features/f6.png";
import { StoreItem } from "../store_components/StoreItem";
import storeItems from "../data/Featured.json";

const Banners = () => {
  const storeI = storeItems.slice(0,8)
  const storeI2 = storeItems.slice(20,28)
  return (
    <div className="mt-[19%]">
      <div className="bgc p-8 grid sm:grid-cols-3 xl:grid-cols-6 place-items-center">
        {/* Feature 1 */}
        <div className="max-[750px]:mt-[4%] w-[180px] border-solid border-[3.5px] border-[#adb5bd] rounded-xl bg-[#e5e4e2] hover:scale-105 duration-300">
          <img
            className=" p-[12px] rounded-[50px]"
            src={f1}
            alt="Sunset in the mountains"
          />
          <div>
            <div className="font-bold text-lg text-center mb-2">
              Mobile Ready!
            </div>
          </div>
        </div>
        {/* Feature 2 */}
        <div className="max-[750px]:mt-[4%] w-[190px] border-solid border-[3.5px] border-[#adb5bd] rounded-xl bg-[#e5e4e2] hover:scale-105 duration-300">
          <img
            className=" p-[12px] rounded-[50px]"
            src={f2}
            alt="Sunset in the mountains"
          />
          <div>
            <div className="text-center font-bold text-xl mb-2">
              Fast Shipping!
            </div>
          </div>
        </div>
        {/* Feature 3 */}
        <div className="max-[750px]:mt-[4%] w-[190px] border-solid border-[3.5px] border-[#adb5bd] rounded-xl bg-[#e5e4e2] hover:scale-105 duration-300">
          <img
            className=" p-[12px] rounded-[50px]"
            src={f3}
            alt="Sunset in the mountains"
          />
          <div>
            <div className="text-center font-bold text-xl mb-2">
              Big Savings!
            </div>
          </div>
        </div>
        {/* Feature 4 */}
        <div className="max-[750px]:mt-[4%] w-[190px] border-solid border-[3.5px] border-[#adb5bd] rounded-xl bg-[#e5e4e2] hover:scale-105 duration-300">
          <img
            className=" p-[12px] rounded-[50px]"
            src={f4}
            alt="Sunset in the mountains"
          />
          <div>
            <div className="text-center font-bold text-xl mb-2">
              Organized System!
            </div>
          </div>
        </div>
        {/* Feature 5 */}
        <div className="max-[750px]:mt-[4%] w-[190px] border-solid border-[3.5px] border-[#adb5bd] rounded-xl bg-[#e5e4e2] hover:scale-105 duration-300">
          <img
            className=" p-[12px] rounded-[50px]"
            src={f5}
            alt="Sunset in the mountains"
          />
          <div>
            <div className="text-center font-bold text-xl mb-2">
              Opportunities!
            </div>
          </div>
        </div>
        {/* Feature 6 */}
        <div className="max-[750px]:mt-[4%] w-[190px] border-solid border-[3.5px] border-[#adb5bd] rounded-xl bg-[#e5e4e2] hover:scale-105 duration-300">
          <img
            className=" p-[12px] rounded-[50px]"
            src={f6}
            alt="Sunset in the mountains"
          />
          <div>
            <div className="text-center font-bold text-xl mb-2">
              Communication!
            </div>
          </div>
        </div>
      </div>

      {/* Slip 1 */}
      <div className="border-l-[20px] border-r-[38px] border-t-0 border-[#000300] ">
        <div className="bg-[#000300] text-center font-extrabold pt-5 border-solid border-8 border-[#000300] p-10">
          <p className="font-serif font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] to-[#000300]">
            Featured!
          </p>
          <p className="font-serif font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] to-[#000300]">
            Summer Collection!
          </p>
        </div>
        <div className="pb-10 bgc4 pt-20 grid justify-items-center md:grid-cols-2 2xl:grid-cols-4">
          {storeI.map((item) => (
            <div className="mt-[12%]">
              <StoreItem {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className="border-solid border-t-4 border-[#e5e4e2]">
        <div className="grid 2xl:grid-cols-2 justify-center bg-[#000300] p-10 border-r-[50px] border-[#000300]">
          {/* // Card 1 */}
          <div className="pr-2">
            <div className="max-[740px]:hidden p-6 sm:w-full card1 flex justify-center border-4 border-solid border-[#adb5bd] shadow-2xl shadow-[#b1c2d4] rounded-lg dark:bg-neutral-700 w-full md:flex-row  hover:scale-105 duration-300">
              <div className="flex flex-col justify-start p-6">
                <p className="mt-40 text-left font-bold text-neutral-600 dark:text-neutral-200">
                  Check out our Adventure Collection. You'll find all the
                  equipment you'll need!
                </p>
                <a href="/equipment" className="mx-auto bg-[#000300] w-[35%] text-center text-[#adb5bd] font-bold rounded-full py-2 hover:bg-[#adb5bd]">
                  Visit
                </a>
              </div>
            </div>
          </div>

          {/* // Card 2 */}
          <div className="max-[1200px]:hidden ml-2 card2 flex flex-col mr-10 rounded-lg border-4 border-solid border-[#adb5bd] shadow-xl shadow-[#b1c2d4] dark:bg-neutral-700 w-full md:flex-row hover:scale-105 duration-300">
          <div className="mt-2 flex justify-center w-full">
                  <a href="/blog" className=" mr-[40%] mt-[15%] text-center h-[50px] w-[250px] bg-[#000300] text-[#adb5bd] font-bold rounded-full hover:bg-[#adb5bd]">
                    <p className="mt-[4%]">Visit</p>
                  </a>
                </div>
          </div>
        </div>

        <div>
          {/* // Card 3 */}
          <div className="flex justify-center bg-[#000300] pb-20 border-r-[50px] border-[#000300]">
            <div className="flex justify-center card3 rounded-xl border-4 border-solid border-[#adb5bd] shadow-2xl shadow-[#b1c2d4] w-[96%] dark:bg-neutral-700 md:flex-row  hover:scale-105 duration-300">
              <div className="flex flex-col justify-start p-6">
                <h5 className="mx-auto mt-[3%] text-4xl font-bold text-[#000300] border-b border-[#000300]p-4">
                  Coming Soon
                </h5>
                <p className="text-center text-[#fff] font-bold text-lg mt-6 ">
                  Take a trip with our certified experts. Ever wanted to hike
                  mount Everest? Wander through the Rocky Moutains? Soon you'll
                  have the experience waiting at your fingertips!
                </p>
                <button className="mx-auto mt-8 bg-[#000300] h-[50px] w-[35%] text-[#adb5bd] font-bold rounded-full hover:bg-[#adb5bd]">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-solid border-b-4 border-[#e5e4e2] "></div>
      {/* Slip 0 */}
      <div className="">
        <div className="border-l-[20px] border-r-[38px] border-t-0 border-[#000300] ">
          <div className="bg-[#000300] text-center font-extrabold pt-8 p-10">
            <p className="pt-10 font-serif font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] to-[#000300]">
              New Arrivals!
            </p>
            <p className="font-serif font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] to-[#000300]">
              Summer Collection!
            </p>
          </div>

          <div className="pb-10 bgc4 pt-20 grid justify-items-center md:grid-cols-2 2xl:grid-cols-4">
          {storeI2.map((item) => (
            <div className="mt-[12%]">
              <StoreItem {...item} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};
export default Banners;
