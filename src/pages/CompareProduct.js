import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Trang so sánh sản phẩm"} />
      <BreadCrumb title="So Sánh Sản Phẩm" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="Cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="Watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Samsung Galaxy Note 4</h5>
                <h6 className="price mb-3 mt-3">30000000 VND</h6>
                <div>
                  <div className="product-detail">
                    <h5>Thương hiệu</h5>
                    <p>Samsung</p>
                  </div>
                  <div className="product-detail">
                    <h5>Loại</h5>
                    <p>Điện Thoại</p>
                  </div>
                  <div className="product-detail">
                    <h5>Trạng thái</h5>
                    <p>Còn Hàng</p>
                  </div>
                  <div className="product-detail">
                    <h5>Màu sắc</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Kích cỡ</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="Cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="Watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Samsung Galaxy Note 4</h5>
                <h6 className="price mb-3 mt-3">30000000 VND</h6>
                <div>
                  <div className="product-detail">
                    <h5>Thương hiệu</h5>
                    <p>Samsung</p>
                  </div>
                  <div className="product-detail">
                    <h5>Loại</h5>
                    <p>Điện Thoại</p>
                  </div>
                  <div className="product-detail">
                    <h5>Trạng thái</h5>
                    <p>Còn Hàng</p>
                  </div>
                  <div className="product-detail">
                    <h5>Màu sắc</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Kích cỡ</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
