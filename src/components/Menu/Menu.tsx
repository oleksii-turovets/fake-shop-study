import MenuItem from "./MenuItem"

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/payment">Shipping</MenuItem>
            <MenuItem to="/shipping">Payment</MenuItem>
            <MenuItem to="/cart">Cart</MenuItem>
        </>
    )
}
export default Menu
