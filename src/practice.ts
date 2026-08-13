// productName → "Samsung Galaxy S24"
// price → 54999
// rating → 4.4
// inStock → true 

// let productName: string = "Samsung Galaxy S24";
// let price: number = 54999;
// let rating: number = 4.4;
// let inStock: boolean = true;    

// let productNames: string[] = [
//     "iPhone 15",
//     "Samsung Galaxy S24",
//     "OnePlus 12"
// ];

interface Product {
    name: string;
    price: number;
    category: string;
}

const products: Product[] = [
{
    name: "MacBook Pro",
    price: 129999,
    category: "Electronics"
},
{
    name: "Sony WH-1000XM4",
    price: 24999,
    category: "Electronics"
},
{
    name: "noise ColorFit Pro 3",
    price: 9999,
    category: "Electronics"    
}

];
products.map((product) => {
    console.log(product.name);
});

