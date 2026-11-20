'use client';

import { useState } from "react";

function Modal({ trigger, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    cursor: 'pointer'
                }}>
                {trigger}
            </button>
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <div
                        style={{
                            background: 'white',
                            padding: '24px',
                            borderRadius: '8px',
                            maxWidth: '480px',
                            width: '100%'
                        }}>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{ float: 'right', cursor: 'pointer' }}>
                            ✕
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal