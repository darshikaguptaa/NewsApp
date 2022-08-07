import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3 mx-3">
        <div className="card" style={{ width: "18rem",height:"575px" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://static7.depositphotos.com/1278966/767/i/600/depositphotos_7670276-stock-photo-blue-world-news-concept.jpg"
            }
            className="card-img-top"
            alt="..."
            style={{height: "180px"}}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{title.slice(0,70)}...</h5>
            <p className="card-text">{description?description.slice(0,100):""}...</p>
            <p className="card-text">
              <small className="text-muted">Source - {source}</small>
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            {// eslint-disable-next-line
            <a href={newsUrl} target="_blank" className="btn btn-dark" style={{width:"50%"}}>
              Read More
            </a>}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
