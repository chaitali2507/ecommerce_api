import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Product =()=>{
    const [pro,setpro]=useState([]);
    const  params=useParams();
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${params.id} `)
        .then((res)=>{
            // console.log(res.data)
            setpro(res.data)
        })
    })
    return(
        <>
       <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={pro.thumbnail} />
                </div>
                <h2>More Product</h2>
                <div>
                    {
                        pro?.images?.map((item)=>{
                            return(
                                <img src={item} width={50} className="ms-2 border border-black"/>
                            )
                        })
                    }
                </div>
            </div>
       </div>
        </>
    )
}
export default Product