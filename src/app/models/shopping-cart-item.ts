
export class ShoppingCartItem {

    $key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;

    constructor(init?: Partial<ShoppingCartItem>) { // to pass part of the object
        Object.assign(this, init);
    }

    get totalPrice () { return this.price * this.quantity}
}