import { StoreItem } from "../store_components/StoreItem";
import storeItems from "../data/Featured.json";
import Dropdown from 'react-bootstrap/Dropdown';
import Footer from "../components/Footer";

export function Clothing() {
    const storeI = storeItems.slice(12,24)
    return(
       <div className="bg-white">
              {/* Slip 1 */}
      <div className="border-l-[20px] border-r-[38px] border-t-0 border-[#000300] ">
      <Dropdown className="float-left">
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="lg">
        Shop
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/store">Most Popular</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/clothing">Clothing</Dropdown.Item>
        <Dropdown.Item href="/equipment">Equipment</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
        <div className="bg-[#000300] text-center font-extrabold pt-5 border-solid border-8 border-[#000300] p-10">
        
          <p className="font-serif font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] to-[#000300]">
            Apparel
          </p>
          <p className="font-serif font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] to-[#000300]">
            Summer Collection!
          </p>
        </div>
        <div className="pb-10 bgc4 pt-20 grid justify-items-center md:grid-cols-2 2xl:grid-cols-4">
          {storeI.map((item) => (
            <div className="mt-[12%]" >
         
              <StoreItem {...item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
       </div>
    )
}