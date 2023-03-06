import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
    increaseCountOfProductInCart?: (id: number) => void
    decreaseCountOfProductInCart?: (id: number) => void
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
    increaseCountOfProductInCart,
    decreaseCountOfProductInCart,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                    increaseCountOfProductInCart={increaseCountOfProductInCart}
                    decreaseCountOfProductInCart={decreaseCountOfProductInCart}
                />
            ))}
        </>
    )
}
export default CartProductList
