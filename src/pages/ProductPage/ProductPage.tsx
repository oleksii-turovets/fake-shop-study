import { Typography } from '@mui/material'
import { color } from '@mui/system'
import { useParams } from 'react-router-dom'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}

const ProductPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const { id } = useParams()

    const product = productsObject[parseInt(id!)]

    return (
        <>
            <Typography variant="h4" component={'h1'}>
                {product.title}
            </Typography>
        </>
    )
}

export default ProductPage
