import { Button, Card, CardContent, Grid } from '@mui/material'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'
import Title from 'components/Title/Title'
import { Link } from 'react-router-dom'
import { useState } from 'react'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}

const FavouritePage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)

    const productsLike = useAppSelector((state) => state.productsLike)
    const dispatch = useAppDispatch()

    const filteredObject = Object.fromEntries(
        Object.entries(productsLike).filter((item) => item[1] === true)
    )

    return (
        <>
            <Title>Favourites</Title>
            <Grid container spacing={4} alignItems="stretch">
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
            <br />
            <button onClick={() => setIsPopupOpen(true)}>Show popup</button>
            {isPopupOpen && (
                <div className="popup">
                    <Title>Hello Popup</Title>
                    <button onClick={() => setIsPopupOpen(false)}>Close</button>
                </div>
            )}
        </>
    )
}
export default FavouritePage
