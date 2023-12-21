import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import tab from "../images/tab.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/product/productSlice";

const ProductCard = (props) => {
  const { grid, data } = props;
  const dispatch = useDispatch();
  // console.log(data);
  let location = useLocation();
  const addToWishList = (id) => {
    // alert(id);
    dispatch(addToWishlist(id));
  };
  return (
    <>
      {Array.isArray(data) &&
        data?.map((item, index) => {
          return (
            <div
              key={index}
              className={` ${
                location.pathname === "/product" ? `gr-${grid}` : "col-3"
              } `}
            >
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
                  <p
                    className={`description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  >
                    {/* {item?.description} */}
                  </p>
                  <p className="price">{item?.price} VND</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    {/* <button className="border-0 transparent">
                      <img src={prodcompare} alt="Compare" />
                    </button> */}
                    <Link
                      to={"/product/" + item?._id}
                      className="border-0 transparent"
                    >
                      <img src={view} alt="View" />
                    </Link>
                    {/* <button className="border-0 transparent">
                      <img src={addcart} alt="Add Cart" />
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductCard;
