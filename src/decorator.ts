const Log = ( target: any, propertyName: string | symbol ) => {
    console.log('Property Decorator!');
    console.log(target, propertyName);
}

const Log2 = ( target: any, name: string, descriptor: PropertyDescriptor) => {
    console.log('Accessor Decorator!');
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

const Log3 = ( target: any, name: string, descriptor: PropertyDescriptor) => {
    console.log('Method Decorator!');
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

const Log4 = (target: any, parentMethodName: string, position: number) => {
    console.log('Parameter Decorator!');
    console.log(target)
    console.log(parentMethodName)
    console.log(position)
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(value: number) {
        if (value < 0) throw new Error('Invalid price - should be positive value');
        this._price = value;
    }

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * ( 1 + tax);
    }
}