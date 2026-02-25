import React from "react";

function Trending({ blog }) {
    let image='';
    switch(blog.category){
        case 'Programming': image='/media/programming.jpg';
        break;
        case 'Cooking': image='/media/cooking.jpg';
        break;
        case 'Travelling': image='/media/travelling-home.jpg';
        break;
        case 'Fitness': image='/media/Fitness.jpg';
        break;
        default: image='/media/programming.jpg';
    }
     return (
<>
        <div className="card" style={{width: '18rem'}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{blog.title}</h5>
        <p className="card-text text-muted">{blog.category}</p>

    <p className="card-text">{blog.previewDescription}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</>
     )
}

export default Trending;