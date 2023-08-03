import React from "react";
import "./pages.css"
import Footer from "../components/Footer";
import Portfolio from "../assets/port.jpg"

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }



  return (

    
    <section id="contact" className="z-30 relative bg-[#d2d6d2]">
      <div className=" bgc7 h-[200px] border-solid border-8 border-[#000300]">
        <div className="pt-5 text-center top-5 text-6xl font-extrabold text-[#a5a6a5]">Contact Us</div>
        </div>
        
      <div className="pt-10">
      <div class="pl-6 mb-8 rounded-lg grid grid-cols-2 space-x-[3%] mr-[1.5%]">
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-[#000300] border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 lg:mb-8 ">
            <h3 class="text-3xl font-extrabold text-[#adb5bd]">Visit One of Our Locations Near You</h3>
            <p class="my-4 text-[#adb5bd] font-semibold">6425 City W Pkwy, Eden Prairie, MN 55344</p>
            <p class="my-4 text-[#adb5bd] font-semibold">13250 Technology Dr. a104, Eden Prairie, MN 55344</p>
            <p class="my-4 text-[#adb5bd] font-semibold">7000 York Ave S, Edina, MN 55435</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9 rotate-[-15deg]" src={Portfolio}/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>We hope to see you soon!</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Ashton Sloan, Founder of Z-Adventures</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-[#000300] border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 lg:mb-8 ">
            <h3 class="text-3xl font-extrabold text-[#adb5bd]">We Answer. Contact Us!</h3>
            <p class="my-4 text-[#adb5bd] font-semibold">6425 City W Pkwy, Eden Prairie, MN 55344</p>
            <p class="my-4 text-[#adb5bd] font-semibold">13250 Technology Dr. a104, Eden Prairie, MN 55344</p>
            <p class="my-4 text-[#adb5bd] font-semibold">7000 York Ave S, Edina, MN 55435</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>We hope to see you soon!</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Bonnie Green, Co-Founder of Z-Adventures</div>
            </div>
        </figcaption>    
    </figure>

</div>
        <div className="lg:w-[100%] md:w-[100%] sm:w-[100%] sm:h-[300px] max-[675px]:h-[300px] g:h-[500px] mb-10 rounded-lg overflow-hidden sm:mr-10 p-10  relative">
          <iframe
            width="95%"
            height="100%"
            title="map"
            className="absolute inset-0 ml-[2.5%]"
           
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=6425+City+West+Parkway,+Eden+Prairie,+MN,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          </div>
          

      </div>
      <Footer />
    </section>
  );
}