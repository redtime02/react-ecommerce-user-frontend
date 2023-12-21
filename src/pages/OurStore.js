import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/product/productSlice";

const OurStore = () => {
  const [grid, setGrid] = useState(0);
  const productState = useSelector((state) => state.product.product);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  // Lọc
  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newTags = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      newBrands.push(element?.brand);
      category.push(element?.category);
      newTags.push(element?.tags);
    }
    setBrands(newBrands);
    setCategories(category);
    setTags(newTags);
  }, [productState]);
  // console.log(
  //   [...new Set(brands)],
  //   [...new Set(categories)],
  //   [...new Set(tags)]
  // );
  // console.log(productState);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, [sort, tag, brand, category, minPrice, maxPrice]);
  const getProducts = () => {
    dispatch(
      getAllProducts({ sort, tag, brand, category, minPrice, maxPrice })
    );
  };
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
                  {categories &&
                    [...new Set(categories)].map((item, index) => {
                      return (
                        <li key={index} onClick={() => setCategory(item)}>
                          {item}
                        </li>
                      );
                    })}
                  {/* <li>Điện Thoại</li>
                  <li>Tai Nghe</li>
                  <li>Máy Tính Bảng</li>
                  <li>Khác</li> */}
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Lọc Theo</h3>
              <div>
                {/* <h5 className="sub-title">Giá Cả</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Từ"
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Từ</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput2"
                      placeholder="Đến"
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput2">Đến</label>
                  </div>
                </div> */}
                {/* <h5 className="sub-title">Màu Sắc</h5>
                <div>
                  <Color />
                </div> */}
                {/* <h5 className="sub-title">Kích Cỡ</h5>
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
                </div> */}
                {/* <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="color-2"
                  />
                  <label className="form-check-label" htmlFor="color-2">
                    M (2)
                  </label>
                </div> */}
                <div className="mt-4 mb-3">
                  <h3 className="sub-title">Loại Sản Phẩm</h3>
                  <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                      {tags &&
                        [...new Set(tags)].map((item, index) => {
                          return (
                            <span
                              onClick={() => setTag(item)}
                              key={index}
                              className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                            >
                              {item}
                            </span>
                          );
                        })}
                      {/* <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
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
                  </span> */}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <h3 className="sub-title">Thương Hiệu Sản Phẩm</h3>
                  <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                      {brands &&
                        [...new Set(brands)].map((item, index) => {
                          return (
                            <span
                              onClick={() => setBrand(item)}
                              key={index}
                              className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                            >
                              {item}
                            </span>
                          );
                        })}
                      {/* <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
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
                  </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="filter-card mb-3">
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
            </div> */}
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                {/* <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sắp Xếp:
                  </p>
                  <select
                    name=""
                    defaultValue={"manual"}
                    className="form-control form-select"
                    id=""
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="title">Từ A - Z</option>
                    <option value="-title">Từ Z - A</option>
                    <option value="price">Giá Từ Thấp Đến Cao</option>
                    <option value="-price">Giá Từ Cao Đến Thấp</option>
                    <option value="createdAt">Sản Phẩm Cũ</option>
                    <option value="-createdAt">Sản Phẩm Mới</option>
                  </select>
                </div> */}
                <div className="d-flex align-items-center gap-10">
                  {/* <p className="total-products mb-0">100 Sản Phẩm</p> */}
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
                <ProductCard
                  data={productState ? productState : []}
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
