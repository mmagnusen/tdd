export const calculator = {
    calculateArea: (width, height) => {

        return width * height;

    },

    calculateGroceries: (shoppingBasket) => {

        let total = 0;

        shoppingBasket.forEach(item => {

            total += item.price

        });

        return total
        
    }
}