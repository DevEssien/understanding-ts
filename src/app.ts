import { plainToClass } from 'class-transformer'
import 'reflect-metadata';
import _ from 'lodash';
import { validate } from 'class-validator'
import { Product } from './product.model';

const products = [
    {title: 'A book', price: 29.99},
    { title: 'new book', price: 23.34}
];

const newProduct = new Product('', 23.4);
validate(newProduct).then(errors => {
    if (errors.length === 0) console.log(newProduct.getInformation());
    else console.log('Validation errors ', errors)
})

const loadProduct = plainToClass(Product, products);

for (const product of loadProduct) {
    console.log(product.getInformation());
}