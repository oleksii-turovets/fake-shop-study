import { Grid, Typography } from '@mui/material'
import './CartPage.scss'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
    increaseCountOfProductInCart: (id: number) => void
    decreaseCountOfProductInCart: (id: number) => void
}

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    increaseCountOfProductInCart,
    decreaseCountOfProductInCart,
}: Props) => {
    return (
        <div>
            <Typography variant="h4" component="h1" align="center">
                Cart
            </Typography>
            <Grid container spacing={4} sx={{ marginTop: 0 }}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    increaseCountOfProductInCart={increaseCountOfProductInCart}
                    decreaseCountOfProductInCart={decreaseCountOfProductInCart}
                />
            </Grid>

            <div className="totals">
                <CartTotal productsInCart={productsInCart} />
            </div>
        </div>
    )
}
export default CartPage
