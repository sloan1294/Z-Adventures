import React from "react";
import f1 from "../assets/features/f1.png";

const Featured = () => {
  return (
    <div className="grid grid-cols-6 place-items-center">
      {/* Feature 1 */}
      <div className="w-[190px] border-solid border-[3.5px] border-[#adb5bd] rounded-xl bg-[#e5e4e2] hover:scale-105 duration-300">
        <img
          className=" p-[12px] rounded-[50px]"
          src={f1}
          alt="Sunset in the mountains"
        />
        <div>
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        </div>
      </div>
      {/* Feature 2 */}
      <div className="w-[190px] border-solid border-[3.5px] border-[#adb5bd] rounded-xl bg-[#e5e4e2] hover:scale-105 duration-300">
        <img
          className=" p-[12px] rounded-[50px]"
          src={f1}
          alt="Sunset in the mountains"
        />
        <div>
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        </div>
      </div>
      {/* Feature 3 */}
      <div className="w-[190px] border-solid border-[3.5px] border-[#adb5bd] rounded-xl bg-[#e5e4e2] hover:scale-105 duration-300">
        <img
          className=" p-[12px] rounded-[50px]"
          src={f1}
          alt="Sunset in the mountains"
        />
        <div>
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        </div>
      </div>
      {/* Feature 4 */}
      <div className="w-[190px] border-solid border-[3.5px] border-[#adb5bd] rounded-xl bg-[#e5e4e2] hover:scale-105 duration-300">
        <img
          className=" p-[12px] rounded-[50px]"
          src={f1}
          alt="Sunset in the mountains"
        />
        <div>
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        </div>
      </div>
      {/* Feature 5 */}
      <div className="w-[190px] border-solid border-[3.5px] border-[#adb5bd] rounded-xl bg-[#e5e4e2] hover:scale-105 duration-300">
        <img
          className=" p-[12px] rounded-[50px]"
          src={f1}
          alt="Sunset in the mountains"
        />
        <div>
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        </div>
      </div>
      {/* Feature 6 */}
      <div className="w-[190px] border-solid border-[3.5px] border-[#adb5bd] rounded-xl bg-[#e5e4e2] hover:scale-105 duration-300">
        <img
          className=" p-[12px] rounded-[50px]"
          src={f1}
          alt="Sunset in the mountains"
        />
        <div>
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
