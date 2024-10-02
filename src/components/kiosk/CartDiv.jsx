
function CartDiv({cartItems}) {

    const cartItemTag = cartItems.map((item) =>
    {
        const product = item.product;
        const qty = item.qty;

        return(
            <li key={product.pid}>
                {product.pname}: {qty} : {product.price * qty}
            </li>
        )
    })

    return (
        <div className='bg-blue-500 w-full h-full '>
            <ul>
                {cartItemTag}
            </ul>
        </div>
    );
}

export default CartDiv;