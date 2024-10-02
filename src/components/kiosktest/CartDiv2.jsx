function CartDiv2({cartItems, changeCartItem}) {

    const cartItemTag = cartItems.map((item) => {
        const product = item.product
        const qty = item.qty

        return (
            <li key={product.pid}>
                {product.pname} : {qty} : {product.price * qty}
                <button className='border-2 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={()=>changeCartItem(product.pid, 1)}>+</button>
                <button className='border-2 m-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                onClick={()=>changeCartItem(product.pid, -1)}>-</button>
            </li>
        )
    })


    return (
        <div>
            <div className='bg-amber-500'>
                <ul>
                    {cartItemTag}
                </ul>
            </div>
        </div>
    );
}

export default CartDiv2;