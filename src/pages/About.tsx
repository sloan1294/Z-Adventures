import "./pages.css"
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="pt-10 bg1 border-solid border-[10px] border-[#000300]">
        <div className=" bg2 h-[200px] border-solid border-8 border-[#000300]">
        <div className="pt-5 text-center top-5 text-6xl font-extrabold text-[#a5a6a5]">#About the Team</div>
        </div>
      <div className="grid grid-cols-2 max-[850px]:grid-cols-none pt-[4%] justify-items-center pl-[1%]">
      <div>
          <img
            src="https://teambuildinghub.com/wp-content/uploads/2022/01/Team-Building-Page-Image-2-1024x538.png"
            alt="team"
            className="w-[700px] h-[450px] rounded-xl  border-solid border-8 border-[#000300]"
          />
        </div>
        <div className="max-[750px]:ml-[10%] h-[500px] w-[85%] text-center mr-[15%]">
          <p className="mt-[8%] font-extrabold text-[#000300]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            architecto quo voluptatum dignissimos consequuntur, harum
            praesentium consectetur saepe, optio velit modi hic rerum eos
            repellat dolorum similique autem accusantium numquam?
          </p>
          <p className="mt-[4%] font-extrabold text-[#000300]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            architecto quo voluptatum dignissimos consequuntur, harum
            praesentium consectetur saepe, optio velit modi hic rerum eos
            repellat dolorum similique autem accusantium numquam?
          </p>
          <p className="mt-[4%] font-extrabold text-[#000300]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            architecto quo voluptatum dignissimos consequuntur, harum
            praesentium consectetur saepe, optio velit modi hic rerum eos
            repellat dolorum similique autem accusantium numquam?
          </p>
        </div>
       
      </div>
      <div className="flex">
      <Footer />
      </div>
    </div>
  );
};

export default About;
