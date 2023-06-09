import React from "react";

const Newsitem =(props)=> {
    let { title, des, imageUrl, newsurl,author,date,source } = props;
    return (
      <div classname="my-3">
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', 'zIndex':'1'}} >
          {source}
    
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{des}</p>
            <p className="card-text"><small class="text-danger">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a
              href={newsurl}
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }

export default Newsitem
