import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Button, Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from 'pages/AboutPage/AboutPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import { omit } from 'lodash'

type Props = {}

type ProductsInCartType = {
    [id: number]: number
}

type ProductsLikeType = {
    [id: number]: boolean
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
    })

    const [productsLike, setProductsLike] = useState<ProductsLikeType>({
        1: true,
        2: true,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, id))
    }

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    const toggleLikeState = (id: number) => {
        setProductsLike((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container
                sx={{
                    padding: '60px 0',
                }}
            >
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                addProductToCart={addProductToCart}
                                productsLike={productsLike}
                                toggleLikeState={toggleLikeState}
                            />
                        }
                    />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
