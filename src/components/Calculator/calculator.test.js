import { calculator } from './'

describe('calculator', () => {

    describe('calculateArea', () => {

        it('should return the area, given width and height', () => {
            const area = calculator.calculateArea(5, 5);
            expect(area).toEqual(25);
        })
    })

    describe('calculateGroceries', () => {

        it('should provide the total value of all items in the shopping basket', () => {

            const shoppingBasket = [
                { 
                    name: 'apple',
                    price: 2,
                },
                {    
                    name: 'apple',
                    price: 3,
                },
                {  
                    name: 'apple',
                    price: 4,
                },
                {    
                    name: 'apple',
                    price: 5,
                }
            ]

            const total = calculator.calculateGroceries(shoppingBasket)

            expect(total).toEqual(14)

        })
    })
})