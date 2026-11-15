'use client'
import { useState } from "react";

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
            >
                {title} {isOpen ? "▲" : "▼"}
            </button>
            {isOpen && children}
        </div>
    )
}

export default Accordion