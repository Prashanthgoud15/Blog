import React from "react";
import Banner from "../../Components/Banner/banner";
import Trending from "../../Components/Trendingblogs/treding";
import blogs from "../../Utils/Mockdata";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


function Dedicated() {
const[blogid,setblogid]=useState('');
let blogtodisplay = blogs.filter(blog=>blog.id===blogid)[0]
let {id} = useParams();
useEffect(()=>{
    if(id){
        setblogid(id);
    }
},[])

    return (
        <>
        
             <Banner />
             
             <h1>{blogtodisplay.title}</h1>
             <h5>{blogtodisplay.category}</h5>
             <p>{blogtodisplay.content}</p>


           

        
        </>
    )
}
export default Dedicated;