
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {

    increaseCartQuantity,

  } = useShoppingCart()
 
 
  return (
    <div className="w-[310px] overflow-hidden shadow-2xl shadow-[#000300] border-solid border-[3.5px] border-[#adb5bd] rounded-xl bg-[#e5e4e2] hover:scale-105 duration-300">
    <img
      className=" p-[12px] rounded-[50px]"
      src={imgUrl}
      height="200px"
      style={{objectFit: "cover"}}
      alt="Sunset in the mountains"
    />
    <div className="px-4">
      <div className="font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#000300] to-[#adb5bd]">
        Tsukiomi
      </div>
      <div className="font-bold text-xl mb-2">{name}</div>
      <div>⭐⭐⭐⭐⭐</div>
      <div>
        <b className="text-xl">{formatCurrency(price)}</b>
        <button className="mb-2 py-2 float-right bg-[#000300] w-[15%] text-[#adb5bd] font-bold rounded-full hover:bg-[#adb5bd]" onClick={() => increaseCartQuantity(id)}>+</button>
      </div>
    </div>
  </div>
  )
}
