// eslint-disable-next-line react/prop-types
function ProductsList({products, addToCart}) {

    const liList = products.map( p => {
        const {pid, pname, price, kind, img} = p

        return <li className='w-1/6 border-2 h-1/6 min-h-[10rem]' key={pid} onClick={() => addToCart(p)}>
            <img  src={img}/>
            {pname} --- {price}
            </li>
    })

    return (
        <div className='bg-amber-500 w-full h-full'>
            <h1 >Products List</h1>
            <ul className='flex gap-2 flex-auto p-6'>
                {liList}
            </ul>
        </div>
    );
}

export default ProductsList;