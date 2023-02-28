import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import { Divider, Grid, Stack, Typography } from '@mui/material'
import './CartPage.scss'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <Typography variant="h4" component="h1" align="center">
                Cart
            </Typography>
            <div>
                <Stack
                    divider={<Divider orientation="horizontal" flexItem />}
                    spacing={0}
                    className="stack"
                >
                    {Object.keys(productsInCart).map((productId) => (
                        <Grid
                            container
                            spacing={2}
                            alignItems="center"
                            key={productId}
                            className="grid"
                        >
                            <Grid item xs={2}>
                                <div className="product-image-in-cart">
                                    <img
                                        src={
                                            productsObject[parseInt(productId)]
                                                .image
                                        }
                                        alt=""
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                {productsObject[parseInt(productId)].title}
                            </Grid>
                            <Grid item xs={2}>
                                Quantity : {productsInCart[parseInt(productId)]}
                            </Grid>
                            <Grid item xs={2}>
                                Price: $
                                {productsObject[parseInt(productId)].price}
                            </Grid>
                            <Grid item xs={2}>
                                Total: $
                                {productsInCart[parseInt(productId)] *
                                    productsObject[parseInt(productId)].price}
                            </Grid>
                        </Grid>
                    ))}
                </Stack>
                <div className="totals">
                    Total: $
                    {Object.keys(productsInCart).reduce(
                        (total, productId) =>
                            total +
                            productsObject[parseInt(productId)].price *
                                productsInCart[parseInt(productId)],
                        0
                    )}
                </div>
            </div>
        </div>
    )
}
export default CartPage
