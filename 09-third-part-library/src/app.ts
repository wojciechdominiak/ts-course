import { Product } from "./product.model";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
const products = [
  { title: "CARPET", price: 14.44 },
  { title: "CAR", price: 1214.44 },
];

const newProd = new Product("", -5);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
/* const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
}); */

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

const product = new Product("A book", 12.99);
console.log(product.getInformation());
