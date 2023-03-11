import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsLike: { [id: number]: boolean }
    toggleLikeState: (id: number) => void
}

const Home = ({ addProductToCart, productsLike, toggleLikeState }: Props) => {
    return (
        <>
            <ProductsList
                addProductToCart={addProductToCart}
                productsLike={productsLike}
                toggleLikeState={toggleLikeState}
            />
            <Reviews />
        </>
    )
}
export default Home
