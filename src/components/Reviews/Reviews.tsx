import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Христина',
            text: 'Покупкою задоволена на всі 100!!!! Гарний дизайн, приємний колір, легкий, зручно поміщається в жіночій руці.',
        },
        {
            name: 'Тарас',
            text: 'Швидка доставка.Телефон Працює бездогано 10/10',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value
        }))
    }
    const sendReview = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setReviews((prevState) => {
            return [...prevState, newReview]
        })

        setNewReview({
            name: '',
            text: '',
        })
    }

    return (
        <>
            <Typography component="h2" variant="h4" sx={{ margin: '40px 0' }}>
                Reviews
            </Typography>
            {reviews.map(({ name, text }, i) => (
                <Card variant="outlined" key={i} sx={{ margin: '30px 0' }}>
                    <CardContent>
                        <div>{name}:</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}

            <form onSubmit={sendReview}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        label="Name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={7}
                        placeholder="Your message"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </>
    )
}
export default Reviews
