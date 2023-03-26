import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from 'pages/AboutPage/AboutPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ProductPage from 'pages/ProductPage/ProductPage'
import FavouritePage from 'pages/FavouritePage/FavouritePage'
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage'
import { useAppDispatch } from 'redux/hooks'
import { useEffect } from 'react'
import { fetchProducts } from 'redux/productsReducer'

type Props = {}

const App = (props: Props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Container
                sx={{
                    padding: '60px 0',
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                    <Route path="/favourite" element={<FavouritePage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
