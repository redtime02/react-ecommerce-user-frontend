import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(0);
  return (
    <>
      <Meta title={"Trang sản phẩm"} />
      <BreadCrumb title="Sản Phẩm" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Theo Danh Mục</h3>
              <div>
                <ul className="ps-0">
                  <li>Điện Thoại</li>
                  <li>Tai Nghe</li>
                  <li>Máy Tính Bảng</li>
                  <li>Khác</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Lọc Theo</h3>
              <div>
                <h5 className="sub-title">Trạng Thái</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Còn Hàng (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Hết Hàng (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Giá Cả</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Từ"
                    />
                    <label htmlFor="floatingInput">Từ</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput2"
                      placeholder="Đến"
                    />
                    <label htmlFor="floatingInput2">Đến</label>
                  </div>
                </div>
                <h5 className="sub-title">Màu Sắc</h5>
                <div>
                  <Color />
                </div>
                <h5 className="sub-title">Kích Cỡ</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="color-1"
                  />
                  <label className="form-check-label" htmlFor="color-1">
                    S (2)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="color-2"
                  />
                  <label className="form-check-label" htmlFor="color-2">
                    M (2)
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Sản Phẩm</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Điện thoại
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Máy tính bảng
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Sản Phẩm</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="Watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Điện thoại</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>10000000 VND</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="Watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Điện thoại</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>10000000 VND</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sắp Xếp:
                  </p>
                  <select
                    name=""
                    defaultValue={"manual"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Nổi Bật</option>
                    <option value="best-selling">Bán Chạy Nhất</option>
                    <option value="title-asending">Từ A - Z</option>
                    <option value="title-desending">Từ Z - A</option>
                    <option value="price-asending">Giá Từ Thấp Đến Cao</option>
                    <option value="price-desending">Giá Từ Cao Đến Thấp</option>
                    <option value="created-asending">Sản Phẩm Cũ</option>
                    <option value="created-desending">Sản Phẩm Mới</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="total-products mb-0">100 Sản Phẩm</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="Grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="Grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="Grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="Grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
