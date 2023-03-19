export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    fullDescription?: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title:"iPhone 14 Pro",
        description:"This is the newest iPhone in the world",
        type:"phone",
        capacity:"256",
        price: 500,
        image: "/images/iphone-14-pro.webp",
        fullDescription: '<div class="red">This is the newest iPhone in the world</div>'
    },
    {
        id: 2,
        title:"iPhone 13 Pro Max",
        description:"This is stil nice model",
        type:"phone",
        capacity:"512",
        price: 450,
        image: "/images/iphone-13-pro-max.webp",
    },
    {
        id: 3,
        title:"iPhone 12",
        description:"This is the old one. Really, do u want this?",
        type:"phone",
        capacity:"128",
        price: 300,
        image: "/images/iphone-12-black.webp",
    },
    {
        id: 4,
        title:"iPhone 12",
        description:"This is the old one. Really, do u want this?",
        type:"phone",
        capacity:"128",
        price: 300,
        image: "/images/iphone-12-purple.webp",
    },
    {
        id: 5,
        title:"iPhone 12",
        description:"This is the old one. Really, do u want this?",
        type:"phone",
        capacity:"128",
        price: 300,
        image: "/images/iphone-12-blue.webp",
    },
    {
        id: 6,
        title:"iPhone 12",
        description:"This is the old one. Really, do u want this?",
        type:"phone",
        capacity:"128",
        price: 300,
        image: "/images/iphone-12-green.webp",
    },    
]

export const getProductsObject = (array: Product[]) =>
    array.reduce((object, product) => ({
    ...object,
    [product.id]: product,
}), {})

export default productsArray