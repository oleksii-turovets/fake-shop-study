import { useAppSelector } from 'redux/hooks'
import { getProductsObject, Product } from 'utils/productsArray'

type ProductsObjectType = {
    [id: number]: Product
}

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartTotal = ({ productsInCart }: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObjectType = getProductsObject(productsArray)

    return (
        <div>
            Total: $
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsObject[parseInt(productId)].price *
                        productsInCart[parseInt(productId)],
                0
            )}
        </div>
    )
}
export default CartTotal
