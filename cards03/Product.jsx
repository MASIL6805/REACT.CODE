import "./Product.css";
import Price from "./Price.jsx";

function Product({title,idx}) {
    let oldPrice = ["1,000", "2,000", "3,000", "4,000"];
    let newPrice = ["800", "1,600", "2,400", "3,200"];
    let description=["800DPI", "designed for wireless", "1000DPI for ipad", "500DPI"];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>

        </div>
    );
    }
export default Product;