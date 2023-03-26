import axios from 'axios'
import Title from 'components/Title/Title'
import { useState } from 'react'

type Props = {}

type Order = {
    name: string
    address: string
}

const CheckoutPage = (props: Props) => {
    const [isOrderSent, setIsOrderSent] = useState<boolean>(false)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        address: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            address: e.target.value,
        }))
    }

    const sendOrder = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post('http://localhost:1337/api/orders', {
                data: {
                    name: orderData.name,
                    address: orderData.address,
                },
            })
            .then((res) => res.data.data.attributes)
            .then(({ name, address }) => {
                setOrderData({
                    name,
                    address,
                })

                setIsOrderSent(true)
            })
            .catch((error) => console.log(error))
    }

    const renderForm = () => {
        return (
            <form onSubmit={sendOrder}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={orderData.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your address"
                        value={orderData.address}
                        onChange={handleAddress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div>
                <div>Dear, {orderData.name} thanks for your order!</div>
                <p>Address: {orderData.address}</p>
            </div>
        )
    }

    return (
        <>
            <Title>Checkout</Title>
            {isOrderSent ? renderMessage() : renderForm()}
        </>
    )
}

export default CheckoutPage
