'use client'
import { useState } from 'react'

function AddToCartButton({ productName }) {
    const [added, setAdded] = useState(false)

    return (
        <button
            onClick={() => setAdded(true)}
            disabled={added}
            style={{ marginLeft: '8px' }}>
            {added ? 'Added' : 'Add to cart'}
        </button>
    )
}

export default AddToCartButton