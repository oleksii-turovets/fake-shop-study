import { Typography } from '@mui/material'
import './CartPage.scss'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <Typography variant="h4" component="h1" align="center">
                Cart
            </Typography>
            <CartProductList productsInCart={productsInCart} />
            <div className="totals">
                <CartTotal productsInCart={productsInCart} />
            </div>
        </div>
    )
}
export default CartPage
