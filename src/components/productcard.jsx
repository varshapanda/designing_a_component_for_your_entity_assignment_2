// write product card here
import ViewProductButton from "./button";

const Productcard=()=>{
    const productImage = "https://m.media-amazon.com/images/I/316ArzLeJ2L._SX300_SY300_QL70_FMwebp_.jpg";
    const productName = "Apple MacBook Air Laptop";
    const productPrice = "$1,085.37";
    
    return(
        <div>
            < img src ={productImage} alt={productName}/>
            <p><b>{productName}</b></p>
            <p><b>{productPrice}</b></p>
            <ViewProductButton/>
        </div>
    )

}

export default Productcard;
