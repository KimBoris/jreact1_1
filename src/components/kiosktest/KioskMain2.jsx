import ProductList2 from "./ProductList2.jsx";
import CartDiv2 from "./CartDiv2.jsx";
import {useState} from "react";

function KioskMain2() {

    const products = [
        {pid: 1, pname: 'M1', price: 6000, kind: 'N', img: "http://localhost:8081/food/M1.jpeg"},
        {pid: 2, pname: 'M2', price: 4000, kind: 'Y', img: "http://localhost:8081/food/M2.jpeg"},
        {pid: 3, pname: 'M3', price: 2000, kind: 'N', img: "http://localhost:8081/food/M3.jpeg"},
        {pid: 4, pname: 'M4', price: 3000, kind: 'Y', img: "http://localhost:8081/food/M4.jpeg"},
        {pid: 5, pname: 'M5', price: 1000, kind: 'N', img: "http://localhost:8081/food/M5.jpeg"},

    ];

    const [cartItems, setCartItems] = useState([])

    const changeCartItem = (pid, amount) => {

        const target = cartItems.find(item => item.product.pid === pid);

        if (!target) {
            return;
        }

        target.qty += amount

        if(target.qty <= 0)
        {
            const filtered = cartItems.filter(item => item.product.pid !== parseInt(pid))
            setCartItems([...filtered])
            return;
        }

        setCartItems([...cartItems])
    }

    const addToCart = (product) => {

        const target = cartItems.find(item => {
            const p = item.product
            const result = p.pid === product.pid
            return result ? p : null
        })

        if (!target) {
            setCartItems([...cartItems, {product: product, qty: 1}])
            return;
        } else {
            target.qty += 1
            setCartItems([...cartItems])
        }
    }

    return (

        <div className='w-full flex'>
            <div className='border-2 w-2/3'>
                <ProductList2 products={products} addToCart={addToCart}></ProductList2>
            </div>

            <div className='border-2 w-1/3'>
                <CartDiv2 cartItems={cartItems} changeCartItem={changeCartItem}></CartDiv2>
            </div>
        </div>
    );
}

export default KioskMain2;