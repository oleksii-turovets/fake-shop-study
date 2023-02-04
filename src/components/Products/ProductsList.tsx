import { Grid, Typography } from "@mui/material";
import ProductsListItem from "./ProductsListItem";

type Props = {};
const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" component="h2" align="center">
                List of Products
            </Typography>
            <Grid container spacing={4} alignItems="stretch">
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 14 Pro"
                        description="This is the newest iPhone in the world"
                        type="phone"
                        capacity="256"
                        price={500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 13 Pro Max"
                        description="This is stil nice model"
                        type="phone"
                        capacity="512"
                        price={450}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 12"
                        description="This is the old one. Really, do u want this?"
                        type="phone"
                        capacity="128"
                        price={300}
                    />
                </Grid>
            </Grid>
        </>
    );
};
export default ProductsList;
