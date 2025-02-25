import { Product } from "@/types/products";


export const addToCart = (product:Product)=>{
    const cart : Product[] = JSON.parse(localStorage.getItem(`cart`)||`[]`)
    const exixtingProductIndex = cart.findIndex(item => item.id === product.id)
    if(exixtingProductIndex > -1){
        cart[exixtingProductIndex].inventory += 1
    }
    else {
        cart.push({
            ...product, inventory:1
        })
    }
    localStorage.setItem(`cart`, JSON.stringify(cart))
} 

export const removeFromCart = (productId:string)=>{
    let cart:Product[] = JSON.parse(localStorage.getItem(`cart`) || `[]`)
    cart = cart.filter(item => item.id !== productId)
    localStorage.setItem(`cart`, JSON.stringify(cart))
}

export const updateCartQuantity = (productId: string, quantity: number) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const productIndex = cart.findIndex((item) => item.id === productId);

    if (productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};
export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem(`cart`) || `[]`)
}