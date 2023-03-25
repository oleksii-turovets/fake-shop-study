import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from '@mui/material'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import FavouriteListItem from './FavouriteListItem'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'
import Title from 'components/Title/Title'
import { Link } from 'react-router-dom'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}

const FavouritePage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const productsLike = useAppSelector((state) => state.productsLike)
    const dispatch = useAppDispatch()

    const filteredObject = Object.fromEntries(
        Object.entries(productsLike).filter((item) => item[1] === true)
    )

    return (
        <>
            <Title>Favourites</Title>
            <Grid container spacing={4} alignItems="stretch">
                {/* {productsArray
                    .filter((item) => productsLike[item.id])
                    .map(({ id, title, description, image }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <FavouriteListItem
                                id={id}
                                title={title}
                                description={description}
                                image={image}
                            />
                        </Grid>
                    ))} */}
                {Object.keys(filteredObject).map((id) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <Card className="product" variant="outlined">
                            <CardContent>
                                <Button
                                    variant="outlined"
                                    onClick={() => dispatch(toggleLike(id))}
                                >
                                    {filteredObject[id] ? (
                                        <FavoriteIcon />
                                    ) : (
                                        <FavoriteBorderIcon />
                                    )}
                                </Button>
                                <div className="product-image">
                                    <img
                                        src={productsObject[parseInt(id)].image}
                                        alt=""
                                    />
                                </div>
                                <div className="product-title">
                                    <Link to={`/products/${id}`}>
                                        {productsObject[parseInt(id)].title}
                                    </Link>
                                </div>
                                <div className="product-description">
                                    {productsObject[parseInt(id)].description}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default FavouritePage
