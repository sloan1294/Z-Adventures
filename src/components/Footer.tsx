
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#000300] w-[100%] pl-[10%] pt-14 px-6 grid lg:grid-cols-3 gap-[120px] text-gray-300">
      <div className="mx-auto w-[100%]">
        <h1 className="w-full text-3xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#fff] to-[#000300]">Z-Adventures.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, ad.
          Expedita velit eius explicabo quaerat omnis at temporibus, enim quam
          doloribus amet ratione! Voluptatibus id aliquid culpa dignissimos
          dolorum ut.
        </p>
        <div className="flex justify-between lg:w-[75%] my-6">
        <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="space-x-[40%] flex justify-between max-[1050px]:justify-center mt-6">
        <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
                <li className="py-2 text-sm">Insights</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">Q/A</li>
                <li className="py-2 text-sm">Contact</li>
            </ul>
        </div>
        <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div className="max-[950px]:hidden">
        <h6 className=' font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div className="max-[1150px]:hidden">
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
