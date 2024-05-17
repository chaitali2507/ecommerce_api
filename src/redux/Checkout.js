import { useSelector } from "react-redux"
const Checkout =() =>{
    const cartItems= useSelector(state=>state.cart.cart)
    return(
        <>
       <div>
            <h2>Cart Items</h2>
            {
                cartItems.map(item =>{
                    return(
                        <div className="d-flex">
                            <img src={item.thumbnail}  width={200}/>
                            <div className="ms-4">
                                <h4>{item.title}</h4>
                                <h6>{item.price}</h6>
                                <button className="btn btn-warning btn-sm">Remove</button>
                            </div>
                        </div>
                    )}
                )
            }
       </div>
        </>
    )
}
export default Checkout