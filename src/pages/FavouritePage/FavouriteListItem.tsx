import { Button, Card, CardActions, CardContent } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    title: string
    description: string
    image: string
}
const FavouriteListItem = ({
    id,
    title,
    description,
    image,
}: Props) => {

    const isLiked = useAppSelector((state) => state.productsLike[id])
    const dispatch = useAppDispatch()

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <Button
                    variant="outlined"
                    onClick={() => dispatch(toggleLike(id))}
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">
                    <Link to={`/products/${id}`}>{title}</Link>
                </div>
                <div className="product-description">{description}</div>
            </CardContent>
        </Card>
    )
}
export default FavouriteListItem
