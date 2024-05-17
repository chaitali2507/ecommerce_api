import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/Cartslice";
import { useSelector } from "react-redux";

const Home =()=>{
    const cartitems=useSelector(state => state.cart.cart)
    const [product,setproduct]=useState([])
    const [categories,setcategories]=useState([])
    const [value,setvalue]=useState('');
    const [search,setsearch]=useState('');
    const dispatch=useDispatch()
    // console.log(search)
  

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then((res)=>{
            // console.log(res.data.products)
            setproduct(res.data.products)
        })
        axios.get('https://dummyjson.com/products/categories')
        .then((res)=>{
            // console.log(res.data)
            setcategories(res.data)
        });
    },[])
   
    const handleChange =(e) =>{
        setvalue(e.target.value);
    };

    const itemChange =((item)=>{
        axios.get(`https://dummyjson.com/products/category/${item}`)
        .then((res)=>{
            // console.log(res.data)
            setproduct(res.data.products)
        })
    })
    
    
    return(
        <>
      <div className="container">
        <div className="row">
            <div className="col-3 mt-4">
            <div className="text-center fw-bold fs-4 mb-4 text-primary">Filter</div>
            <div className="fs-5 fw-4">Products </div>
            <ul className="mt-3">
                {
                    categories.map((item,ind)=>{
                        return(
                            <li  className="list-unstyled" onClick={()=>{itemChange(item)}} style={{cursor:'pointer'}}>{item}</li>
                        )
                    })
                }
            </ul>
            </div>
            <div className="col-9 mt-3">
                <h1 className="text-danger text-center">E-Commerce</h1>
            <from className="d-flex  gap-4 mb-5">
            <input type="text" className="input w-50 p-2 " onChange={(e)=>setsearch(e.target.value)} placeholder="Search for character" />
            
            <Link to='/checkout'><h4>Cart<small>{cartitems.length}</small></h4></Link>
        </from>
                <div className="row">
                {
                        product.filter((item)=>{
                            return search.
                            toLocaleLowerCase() === ''? item : item.title.toLocaleLowerCase().includes(search);
                        })
                        .map((item)=>{
                            return(
                                <div className="card" style={{width: '17.8rem'}}>
                                <img src={item.thumbnail} className="card-img-top" alt="..." width={200} height={200} />
                                <div className="card-body">
                                  <h5 className="card-title">{item.title}</h5>
                                  <p className="card-text "><b className="me-2">Description:</b>{item.description}</p>
                                  <div className="card-text"><b className="me-2">Price:</b>{item.price}</div>
                                  <div className="card-text"><b className="me-2">DiscountPercentage:</b>{item.discountPercentage }</div>
                                  <div className="card-text"><b className="me-2">Rating:</b>{item.rating}</div>
                                  <div className="card-text"><b className="me-2">Stock:</b>{item.stock}</div>
                                  <div className="card-text"><b className="me-2">Brand:</b>{item.brand}</div>
                                  <div className="card-text"><b className="me-2">Category:</b>{item.category}</div>
                                </div>
                                <center className="mb-3"> 
                                <Link to={`/product/${item.id}`} className="btn btn-primary  ">View More</Link>
                                  <button className="btn btn-primary ms-2 " onClick={()=> dispatch(addtoCart((item)))}>
                                    Add To Cart
                                  </button>
                                </center>
                               
                              </div>
                            )
                        })
                    }
                    <div className="col-4  "  >
                   

                    </div>
                </div>
            </div>
        </div>
      </div>
        </>
    )
}
export default Home