import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Điện thoại xịn"} />
      <BreadCrumb title="Điện thoại xịn" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" />
                Trở về
              </Link>
              <h3 className="title">Điện thoại xịn</h3>
              <img src={blog} className="img-fluid w-100 my-4" alt="Blog" />
              <p>Mô tả</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
