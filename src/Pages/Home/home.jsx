import React from "react";
import Banner from "../../Components/Banner/banner";
import Trending from "../../Components/Trendingblogs/treding";
import blogs from "../../Utils/Mockdata";
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
        
             <Banner />
             <div className="my-2">
                <h1>Read blogs from</h1>
             <div className="d-flex justify-content-between"> 
         <Link to={'/Blogs/Programming'}>     
    <div className="card" style={{width: '18rem'}}>
  <img src="/media/programming.jpg" className="card-img-top" alt="Programming"/>
  <div className="card-body">
    <h5 className="card-title">Programming</h5>
    </div>
</div>
</Link>
<Link to={'/Blogs/Cooking'}>
  <div className="card" style={{width: '18rem'}}>
  <img src="/media/cooking.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Cooking</h5>
    </div>
</div>
</Link>
<Link to={'/Blogs/Workouts'}>
  <div className="card" style={{width: '18rem'}}>
  <img src="/media/Fitness.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Fitness</h5>
    </div>
</div>
</Link>
 </div>

                </div>

           <div className="trending-blogs-section">
            <h1>Trending Blogs</h1> <br />
            <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2">
             {
                blogs.map((blog)=>
                <Trending blog={blog} />
            )
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
export default Home;