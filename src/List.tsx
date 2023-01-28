type Props = {};

export const List = (props: Props) => {
    let data = false
    const styleObj = {
        color: "white",
        backgroundColor: data ? "purple" : "tomato",
        padding: "15px",
    };
    return (
        <>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
            <p style={styleObj}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                ipsum voluptas quasi hic minima iusto ex, vero dignissimos
                beatae suscipit tempora dicta, id facere officia ipsam eligendi.
                Culpa, sapiente excepturi.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse tenetur facere provident adipisci placeat. Quisquam, maiores aliquam pariatur laudantium dolore laboriosam? Provident ratione dolorem ipsum animi deleniti, pariatur sit expedita.
            </p>
        </>
    );
};
// export default List;

// tsrafce
