import { Grid, Typography } from "@mui/material";
import ProductsListItem from "./ProductsListItem";
import productsArray from "utils/productsArray";

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const ProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ marginBottom: "30px" }}
            >
                List of Products
            </Typography>
            <Grid container spacing={4} alignItems="stretch">
                {productsArray.map(
                    ({
                        id,
                        title,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id = {id}
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    );
};
export default ProductsList;
