import ProductsList from "./ProductsList.jsx";
import CartDiv from "./CartDiv.jsx";
import {useState} from "react";

function KioskMain() {

    const products = [
        {pid: 1, pname: 'M1', price: 8000, kind: 'N', img: "http://localhost:8081/food/M1.jpeg"},
        {pid: 2, pname: 'M2', price: 6000, kind: 'C', img: "http://localhost:8081/food/M2.jpeg"},
        {pid: 3, pname: 'M3', price: 7000, kind: 'N', img: "http://localhost:8081/food/M3.jpeg"},
        {pid: 4, pname: 'M4', price: 4000, kind: 'C', img: "http://localhost:8081/food/M4.jpeg"},
        {pid: 5, pname: 'M5', price: 3000, kind: 'N', img: "http://localhost:8081/food/M5.jpeg"},
    ]

    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        const target = cartItems.find(item =>{
            const p = item.product
            const result = p.pid === product.pid
            return result ? p : null
        })

        console.log("========================================="+target)

        if (!target) {
            console.log("undefined... add" + product)
            setCartItems([...cartItems, {product: product, qty: 1}])
            return
        }
        else{
        //있다면 target의 수량을 변경한다.
            target.qty +=1
            setCartItems([...cartItems])
        }
    }


    return (
        <div className='w-full flex'>
            <div className='border-2 w-2/3'>
                <ProductsList products={products} addToCart={addToCart}></ProductsList>
            </div>
            <div className='border-2 w-1/3'>
                <CartDiv cartItems={cartItems}></CartDiv>
            </div>
        </div>
    );
}

export default KioskMain;