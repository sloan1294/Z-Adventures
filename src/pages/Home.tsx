import Hero from "../components/Hero";
import Banners from "../components/Banners";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


export function Home() {
    return(
        <div className="">
        <Hero />
        <Banners />
        <Newsletter />
        <Footer />
        </div>
    )
}