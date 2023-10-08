import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="Blog" />
      </div>
      <div className="blog-content">
        <p className="date">24/09/2023</p>
        <h5 className="title">Điện thoại xịn</h5>
        <p className="desc">Mô tả</p>
        <Link to="/blog/:id" className="button">
          Xem Thêm
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
