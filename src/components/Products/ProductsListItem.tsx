import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from "@mui/material";
import { Component } from "react";
import "./ProductsListItem.scss";

type Props = {
    title: string;
    description: string;
    type: string;
    capacity: string;
    price: number;
    image: string;
};

type State = {
    count: number;
    disableBtn: boolean;
};

class ProductsListItem extends Component<Props, State> {
    state = {
        count: 1,
        disableBtn: true,
    };

    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
        this.disablingDecrementClick(0);
    };
    onDecrementClick = (num: number) => {
        this.setState((prevState) => ({
            count: prevState.count - num,
        }));
        this.disablingDecrementClick(2);
    };
    disablingDecrementClick = (num:number) => {
        if (this.state.count <= num) {
            this.setState(() => ({
                disableBtn: true,
            }));
        } else {
            this.setState(() => ({
                disableBtn: false,
            }));
        }
        
    };

    render() {
        const { title, description, type, capacity, price, image } = this.props;
        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-title">{title}</div>
                    <div className="product-description">{description}</div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity} Gb
                    </div>
                    <div className="product-price">{price}$</div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={() => this.onDecrementClick(1)}
                            disabled={this.state.disableBtn}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={this.onIncrementClick}
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
    }
}

export default ProductsListItem;
