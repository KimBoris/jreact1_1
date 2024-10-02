// eslint-disable-next-line react/prop-types
function ProductList2({products, addToCart}) {


    const liList = products.map(p => {
        const {pid, pname, price, kind, img} = p

        return <li className='w-1/6 h-1/6 border-2 min-h-[10rem]' key={pid} onClick={addToCart(p)}>
            <img src={img}/>
            {pname} -- {price}
        </li>

    })

    return (
        <div>
            <div className='bg-blue-600 w-full h-full'>
                <ul className='flex gap-2 flex-auto p-6'>
                    {liList}
                </ul>
            </div>
        </div>
    );
}

export default ProductList2;