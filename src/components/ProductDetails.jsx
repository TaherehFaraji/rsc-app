async function getProduct() {
    return {
        name: 'Mechanical Keyboard',
        price: 120,
        description: 'Hot-swappable switches, PBT keycaps, USB-C'
    }
}

async function ProductDetails() {
    const product = await getProduct();

    return (
        <div>
            <h2>{product.name}</h2>
            <p style={{ fontWeight: 'bold' }}>${product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetails