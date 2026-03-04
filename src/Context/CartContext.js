import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity = 1, size = null) => {
        const cartKey = size ? `${product.id}-${size}` : `${product.id}`;

        setCartItems(prev => {
            const existing = prev.find(item => item.cartKey === cartKey);

            if (existing) {
                return prev.map(item =>
                    item.cartKey === cartKey
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
                );
            }

            return [...prev, { ...product, quantity, size, cartKey }];
        });
    };

    const removeFromCart = (cartKey) => {
        setCartItems(prev => prev.filter(item => item.cartKey !== cartKey));
    };

    const updateQuantity = (cartKey, quantity) => {
        setCartItems(prev =>
            prev.map(item =>
                item.cartKey === cartKey ? { ...item, quantity } : item
            )
        );
    };
    const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
