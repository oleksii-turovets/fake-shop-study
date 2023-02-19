import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from "@mui/material";
import { useState } from "react";
import "./ProductsListItem.scss";

type Props = {
    title: string;
    description: string;
    type: string;
    capacity: string;
    price: number;
    image: string;
};
const ProductsListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1);
    const [color, setColor] = useState<string>("green");

    const onIncrement = () => {
        setCount((prevState) => prevState + 1);
    };
    const onDecrement = () => {
        setCount((prevState) => prevState - 1);
    };

    const changeColor = () => {
        setColor((prevState) => (prevState === "green" ? "red" : "green"));
    };

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <div>
                    Color: <span className={color}>{color}</span>
                </div>
                <button onClick={() => changeColor()}>Change color</button>
                <div className="product-price">{price}$</div>
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={() => onDecrement()}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button
                        variant="outlined"
                        onClick={() => onIncrement()}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    );
};
export default ProductsListItem;
