import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blog/blogSlice";
import moment from "moment";
import { getAllProducts } from "../features/product/productSlice";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { addToWishlist } from "../features/product/productSlice";
import tab from "../images/tab.jpg";

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    getBlogs();
    getProducts();
  }, []);
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };
  const getProducts = () => {
    dispatch(getAllProducts());
  };
  const addToWishList = (id) => {
    // alert(id);
    dispatch(addToWishlist(id));
  };
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="Small Banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>GIẢM GIÁ KHỦNG</h4>
                  <h5>Iphone 14 Pro</h5>
                  <p>Từ 30 đến 40 %</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="Small Banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>GIẢM GIÁ KHỦNG</h4>
                  <h5>Iphone 14 Pro</h5>
                  <p>Từ 30 đến 40 %</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="Small Banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>GIẢM GIÁ KHỦNG</h4>
                  <h5>Iphone 14 Pro</h5>
                  <p>Từ 30 đến 40 %</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="Small Banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>GIẢM GIÁ KHỦNG</h4>
                  <h5>Iphone 14 Pro</h5>
                  <p>Từ 30 đến 40 %</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/tab3.jpg"
                className="img-fluid rounded-3"
                alt="Main Banner"
                style={{ height: "550px", width: "830px" }}
              />
              <div className="main-banner-content position-absolute">
                <h4>GIẢM GIÁ KHỦNG</h4>
                <h5>Iphone 15 Pro Max</h5>
                <p>Từ 30 đến 40 %</p>
                <Link className="button" to="/product">
                  MUA NGAY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {services?.map((i, j) => {
                  return (
                    <div className="d-flex align-items-center gap-15" key={j}>
                      <img src={i.image} alt="Services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="images/headphone.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="images/tv.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="images/headphone.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="images/headphone.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="images/tv.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Watches</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="images/headphone.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
            </div>
          </div>
        </div>
      </Container> */}
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Sản Phẩm Nổi Bật</h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "featured") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 transparent"
                          onClick={(e) => {
                            addToWishList(item?._id);
                          }}
                        >
                          <img src={wish} alt="Wishlist" />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0]?.url}
                          className="img-fluid mx-auto"
                          alt="Product Image"
                          width={160}
                        />
                        <img
                          src={tab}
                          className="img-fluid mx-auto"
                          alt="Product Image"
                          width={160}
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={parseInt(item?.totalrating)}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">{item?.price} VND</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          {/* <button className="border-0 transparent">
                            <img src={prodcompare} alt="Compare" />
                          </button> */}
                          <button className="border-0 transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src={view}
                              alt="View"
                            />
                          </button>
                          {/* <button className="border-0 transparent">
                            <img src={addcart} alt="Add Cart" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>
      {/* <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/tab1.jpg" className="img-fluid" alt="Famous" />
              <div className="famous-content position-absolute">
                <h5>Bán Chạy Nhất</h5>
                <h6>Samsung Galaxy Note 4</h6>
                <p>Giảm từ 20 đến 40%</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/tab2.jpg" className="img-fluid" alt="Famous" />
              <div className="famous-content position-absolute">
                <h5>Bán Chạy Nhất</h5>
                <h6>Samsung Galaxy Note 4</h6>
                <p>Giảm từ 20 đến 40%</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/tab3.jpg" className="img-fluid" alt="Famous" />
              <div className="famous-content position-absolute">
                <h5>Bán Chạy Nhất</h5>
                <h6>Samsung Galaxy Note 4</h6>
                <p>Giảm từ 20 đến 40%</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/tab3.jpg" className="img-fluid" alt="Famous" />
              <div className="famous-content position-absolute">
                <h5>Bán Chạy Nhất</h5>
                <h6>Samsung Galaxy Note 4</h6>
                <p>Giảm từ 20 đến 40%</p>
              </div>
            </div>
          </div>
        </div>
      </Container> */}
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Sản Phẩm Đặc Biệt</h3>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "special") {
                  return (
                    <SpecialProduct
                      key={index}
                      id={item?._id}
                      brand={item?.brand}
                      title={item?.title}
                      totalrating={parseInt(item?.totalrating)}
                      price={item?.price}
                      sold={item?.sold}
                      quantity={item?.quantity}
                      img={item?.images[0]?.url}
                    />
                  );
                }
              })}
            {/* <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct /> */}
          </div>
        </div>
      </Container>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Sản Phẩm Hot</h3>
            </div>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "popular") {
                  return (
                    <div key={index} className={"col-3"}>
                      <div className="product-card position-relative">
                        <div className="wishlist-icon position-absolute">
                          <button
                            className="border-0 transparent"
                            onClick={(e) => {
                              addToWishList(item?._id);
                            }}
                          >
                            <img src={wish} alt="Wishlist" />
                          </button>
                        </div>
                        <div className="product-image">
                          <img
                            src={item?.images[0]?.url}
                            className="img-fluid mx-auto"
                            alt="Product Image"
                            width={160}
                          />
                          <img
                            src={tab}
                            className="img-fluid mx-auto"
                            alt="Product Image"
                            width={160}
                          />
                        </div>
                        <div className="product-details">
                          <h6 className="brand">{item?.brand}</h6>
                          <h5 className="product-title">{item?.title}</h5>
                          <ReactStars
                            count={5}
                            size={24}
                            value={parseInt(item?.totalrating)}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <p className="price">{item?.price} VND</p>
                        </div>
                        <div className="action-bar position-absolute">
                          <div className="d-flex flex-column gap-15">
                            {/* <button className="border-0 transparent">
                              <img src={prodcompare} alt="Compare" />
                            </button> */}
                            <button className="border-0 transparent">
                              <img
                                src={view}
                                onClick={() =>
                                  navigate("/product/" + item?._id)
                                }
                                alt="View"
                              />
                            </button>
                            {/* <button className="border-0 transparent">
                              <img src={addcart} alt="Add Cart" />
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </section>
      {/* <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container> */}
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Tin Tức Mới Nhất</h3>
          </div>
        </div>
        <div className="row">
          {blogState &&
            blogState?.map((item, index) => {
              if (index < 3) {
                return (
                  <div className="col-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format("DD/MM/YYYY")}
                    />
                  </div>
                );
              }
            })}
        </div>
      </Container>
    </>
  );
};

export default Home;
