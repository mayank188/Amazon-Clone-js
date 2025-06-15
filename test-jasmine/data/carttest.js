import { addToCart,cart } from "../../data/cart";

describe('Test suite add to cart',()=>{
    it('ADD an existng',()=>{

    });
it('ADD a new product',()=>{
    addToCart('aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f');
    expect(cart.length).toEqual(1);
})
})