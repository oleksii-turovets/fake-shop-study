import { Grid, Typography } from '@mui/material'
import './CartPage.scss'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import { useAppSelector } from 'redux/hooks'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartPage = ({
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
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
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>

            <div className="totals">
                <CartTotal productsInCart={productsInCart} />
            </div>
        </div>
    )
}
export default CartPage
