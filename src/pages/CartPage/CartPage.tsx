import { Grid, Typography } from '@mui/material'
import './CartPage.scss'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const CartPage = (props: Props) => {
    
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
                />
            </Grid>

            <div className="totals">
                <CartTotal productsInCart={productsInCart} />
            </div>
        </div>
    )
}
export default CartPage
