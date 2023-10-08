import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 transparent">
              <img src={wish} alt="Wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="Product Image" />
            <img src={watch} className="img-fluid" alt="Product Image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Apple</h6>
            <h5 className="product-title">Iphone 14</h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Đây là điện thoại tốt nhất
            </p>
            <p className="price">20000000 VND</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 transparent">
                <img src={prodcompare} alt="Compare" />
              </button>
              <button className="border-0 transparent">
                <img src={view} alt="View" />
              </button>
              <button className="border-0 transparent">
                <img src={addcart} alt="Add Cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 transparent">
              <img src={wish} alt="Wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="Product Image" />
            <img src={watch} className="img-fluid" alt="Product Image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Apple</h6>
            <h5 className="product-title">Iphone 14</h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Đây là điện thoại tốt nhất
            </p>
            <p className="price">20000000 VND</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 transparent">
                <img src={prodcompare} alt="Compare" />
              </button>
              <button className="border-0 transparent">
                <img src={view} alt="View" />
              </button>
              <button className="border-0 transparent">
                <img src={addcart} alt="Add Cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;