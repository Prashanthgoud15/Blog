import React from "react";
import Banner from "../../Components/Banner/banner";
import Trending from "../../Components/Trendingblogs/treding";
import blogs from "../../Utils/Mockdata";
import './categoryblog.css'
import { useState } from "react";
import { useParams } from "react-router-dom";



function CategoryBlogs() {
  const [curcategory, setcurCategory] = useState('Travelling');
const {category} = useParams();
    return (
        <>
        
             <Banner />
             

           <div className="trending-blogs-section">
            <h1>{category}</h1> <br />
            <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2">
             {
                blogs.map((blog=> blog.curcategory==curcategory&& <Trending blog={blog} />))
                
            
            }
 
                {/* <Trending />
                <Trending />
                <Trending />
                <Trending />
                <Trending />
                <Trending />
                 */}
                
            </div>



           </div>

        
        </>
    )
}
export default CategoryBlogs;