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

class ProductsListItem extends Component<Props>{
    render() {
        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={this.props.image} alt="" />
                    </div>
                    <div className="product-title">{this.props.title}</div>
                    <div className="product-description">
                        {this.props.description}
                    </div>
                    <div className="product-features">
                        Type: {this.props.type}
                    </div>
                    <div className="product-features">
                        Capacity: {this.props.capacity} Gb
                    </div>
                    <div className="product-price">{this.props.price}$</div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField size="small" value="1" />
                        <Button variant="outlined">+</Button>
                    </div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        );
    }
}

// const ProductsListItem = ({
//     title,
//     description,
//     type,
//     capacity,
//     price,
//     image,
// }: Props) => {
//     return (
//         <Card className="product" variant="outlined">
//             <CardContent>
//                 <div className="product-image">
//                     <img src={image} alt="" />
//                 </div>
//                 <div className="product-title">{title}</div>
//                 <div className="product-description">{description}</div>
//                 <div className="product-features">Type: {type}</div>
//                 <div className="product-features">Capacity: {capacity} Gb</div>
//                 <div className="product-price">{price}$</div>
//                 <div className="product-quantity">
//                     <Button variant="outlined">-</Button>
//                     <TextField size="small" value="1" />
//                     <Button variant="outlined">+</Button>
//                 </div>
//             </CardContent>
//             <CardActions className="btns-wrap">
//                 <Button variant="outlined">Add to cart</Button>
//             </CardActions>
//         </Card>
//     );
// };
export default ProductsListItem;
