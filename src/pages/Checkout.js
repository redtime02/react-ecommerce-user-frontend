import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { config } from "../utils/axiosConfig";
import {
  createAnOrder,
  deleteUserCart,
  getUserCart,
  resetState,
} from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const shippingSchema = yup.object({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  address: yup.string().required("Address Details are Required"),
  city: yup.string().required("City is Required"),
  country: yup.string().required("Country is Required"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.auth.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({
    razorpayPaymentId: "",
    razorpayOrderId: "",
  });
  const [cartProductState, setCartProductState] = useState([]);
  const navigate = useNavigate();
  console.log();
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum += Number(cartState[index].quantity) * cartState[index].price;
      setTotalAmount(sum);
    }
  }, [cartState]);

  // useEffect(() => {
  //   dispatch(getUserCart());
  // }, []);

  // const loadScript = (src) => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // };

  useEffect(() => {
    let items = [];
    for (let index = 0; index < cartState?.length; index++) {
      items.push({
        product: cartState[index].productId._id,
        color: cartState[index].color._id,
        quantity: cartState[index].quantity,
        price: cartState[index].price,
      });
    }
    console.log(items);
    setCartProductState(items);
  }, []);
  console.log(cartProductState);

  const history = useNavigate(); // Thêm dòng này để sử dụng để chuyển hướng

  const checkoutHandler = async () => {
    // try {
    //   const res = await loadScript(
    //     "https://www.paypal.com/sdk/js?client-id=AdOtUOMj1QrXwExOrTsrwZUpyyjAA8QVE1zbbcIFKb5RByJPo1QiUfMXPsX7e_Jiv1o6H_mM250OR4so&currency=USD"
    //   );
    //   if (!res) {
    //     alert("PayPal SDK failed to Load");
    //     return;
    //   }
    //   const result = await axios.post(
    //     "http://localhost:5000/api/user/order/checkout", // Cập nhật URL backend và API endpoint
    //     { amount: (totalAmount + 0) / 20000 },
    //     config
    //   );
    //   if (!result) {
    //     alert("Something Went Wrong");
    //     return;
    //   }
    //   if (!result || !result.data || result.data.success !== true) {
    //     console.error("Error in checkout endpoint:", result);
    //     alert("Error creating PayPal payment. Please try again later.");
    //     return;
    //   }
    //   const { amount, currency } = result.data.payment.transactions[0];
    //   const { id: order_id } = result.data.payment;
    //   // const options = {
    //   //   key: "EL2cU0dBIel0CRhetOwJNw-2g9tU_TSUbqr1Pt0mFS4U5YLe_6uo5TK7OOwl_4yYHjSqp-df_QoEI5k-",
    //   //   amount: amount,
    //   //   currency: currency,
    //   //   name: "Phan Khoi",
    //   //   description: "Test Transaction",
    //   //   order_id: order_id,
    //   //   handler: async function (response) {
    //   //     const data = {
    //   //       orderCreationId: order_id,
    //   //       // Modify the following properties based on your needs
    //   //       payerId: response.payerId,
    //   //       paymentId: response.paymentId,
    //   //     };
    //   //     const paymentVerificationResult = await axios.post(
    //   //       "http://localhost:5000/api/user/order/paymentVerification",
    //   //       data,
    //   //       config
    //   //     );
    //   //     console.log(data);
    //   //     setPaymentInfo({
    //   //       // Adjust these properties based on your backend response
    //   //       razorpayPaymentId: response.razorpay_payment_id,
    //   //       razorpayOrderId: response.razorpay_order_id,
    //   //     });
    //   //     dispatch(
    //   //       createAnOrder({
    //   //         totalPrice: totalAmount,
    //   //         totalPriceAfterDiscount: totalAmount,
    //   //         orderItems: cartProductState,
    //   //         paymentInfo,
    //   //         shippingInfo,
    //   //       })
    //   //     );
    //   //   },
    //   //   prefill: {
    //   //     name: "Phan Khoi",
    //   //     email: "phan4@gmail.com",
    //   //     contact: "9999999999",
    //   //   },
    //   //   notes: {
    //   //     address: "Can Tho",
    //   //   },
    //   //   theme: {
    //   //     color: "#61dafb",
    //   //   },
    //   // };
    //   // window.paypal.Buttons(options).render("#paypal-button-container"); // Replace with the ID of your container
    // } catch (error) {
    //   // Xử lý lỗi tại đây
    //   console.error(error);
    //   // Hoặc hiển thị thông báo lỗi cho người dùng
    //   alert("Something went wrong. Please try again later.");
    // }
    // setPaymentInfo({
    //   // Adjust these properties based on your backend response
    //   razorpayPaymentId: response.razorpay_payment_id,
    //   razorpayOrderId: response.razorpay_order_id,
    // });
    // dispatch(
    //   createAnOrder({
    //     totalPrice: totalAmount,
    //     totalPriceAfterDiscount: totalAmount,
    //     orderItems: cartProductState,
    //     // paymentInfo,
    //     shippingInfo,
    //   })
    // );

    const orderData = {
      totalPrice: totalAmount,
      totalPriceAfterDiscount: totalAmount,
      orderItems: cartProductState,
      shippingInfo: JSON.parse(localStorage.getItem("address")),
    };

    console.log("Order Data:", orderData);

    dispatch(createAnOrder(orderData));
    dispatch(deleteUserCart());
    localStorage.removeItem("address");
    dispatch(resetState());
  };

  useEffect(() => {
    if (
      authState?.orderProduct?.order !== null &&
      authState?.orderProduct?.status === true
    ) {
      navigate("/my-orders");
    }
  }, [authState]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      localStorage.setItem("address", JSON.stringify(values));
      setTimeout(() => {
        checkoutHandler();
      }, 300);
      // alert(JSON.stringify(values));
      // setShippingInfo(values);
    },
  });

  // console.log(cartState);
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkou-left-data">
                <h3 className="website-name">Zero</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark total-price" to="/cart">
                        Giỏ Hàng
                      </Link>
                    </li>
                    &nbsp; /
                    <li
                      className="breadcrumb-item total-price active"
                      aria-current="page"
                    >
                      Thông Tin
                    </li>
                    &nbsp; /
                    <li
                      className="breadcrumb-item total-price active"
                      aria-current="page"
                    >
                      Hình Thức Thanh Toán
                    </li>
                    &nbsp; /
                    <li
                      className="breadcrumb-item total-price active"
                      aria-current="page"
                    >
                      Thanh Toán
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Thông tin liên hệ</h4>
                <p className="user-details">Admin (admin@gmail.com)</p>
                <h4>Địa chỉ giao hàng</h4>
                <form
                  onSubmit={formik.handleSubmit}
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange("country")}
                      onBlur={formik.handleBlur("country")}
                      className="form-control form-select"
                      id=""
                    >
                      <option value="" selected disabled>
                        Chọn quốc gia
                      </option>
                      <option value="Vietnam">Việt Nam</option>
                    </select>
                    <div className="error ms-2 my-1">
                      {formik.touched.country && formik.errors.country}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Họ"
                      className="form-control"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange("firstName")}
                      onBlur={formik.handleBlur("firstName")}
                    />
                    <div className="error ms-2 my-1">
                      {formik.touched.firstName && formik.errors.firstName}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Tên"
                      className="form-control"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange("lastName")}
                      onBlur={formik.handleBlur("lastName")}
                    />
                    <div className="error ms-2 my-1">
                      {formik.touched.lastName && formik.errors.lastName}
                    </div>
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Địa chỉ"
                      className="form-control"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange("address")}
                      onBlur={formik.handleBlur("address")}
                    />
                    <div className="error ms-2 my-1">
                      {formik.touched.address && formik.errors.address}
                    </div>
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Địa chỉ tạm trú (nếu có)"
                      className="form-control"
                      name="other"
                      value={formik.values.other}
                      onChange={formik.handleChange("other")}
                      onBlur={formik.handleBlur("other")}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Thành phố"
                      className="form-control"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange("city")}
                      onBlur={formik.handleBlur("city")}
                    />
                    <div className="error ms-2 my-1">
                      {formik.touched.city && formik.errors.city}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Mã bưu chính"
                      className="form-control"
                      name="pincode"
                      value={formik.values.pincode}
                      onChange={formik.handleChange("pincode")}
                      onBlur={formik.handleBlur("pincode")}
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="me-2" />
                        Trở về giỏ hàng
                      </Link>
                      <Link to="/cart" className="button">
                        Tiếp tục mua sắm
                      </Link>
                      <button className="button" type="submit">
                        Đặt Hàng Ngay
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                {cartState &&
                  cartState?.map((item, index) => {
                    return (
                      <div key={index} className="d-flex gap-10 mb-2">
                        <div className="w-75 d-flex gap-10">
                          <div className="w-25 position-relative">
                            <span
                              style={{ top: "-10px", right: "2px" }}
                              className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                            >
                              {item?.quantity}
                            </span>
                            <img
                              src={item?.productId?.images[0]?.url}
                              className="img-fluid"
                              width={100}
                              height={100}
                              alt="Product"
                            />
                          </div>
                          <div>
                            <h5 className="total-price">
                              {item?.productId?.title}
                            </h5>
                            <p className="total-price">{item?.color?.title}</p>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="total">
                            {item?.price * item?.quantity} VND
                          </h5>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Tổng Cộng</p>
                  <p className="total-price">
                    {totalAmount ? totalAmount : "0"} VND
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Tiền Ship</p>
                  <p className="mb-0 total-price">0 VND</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Thành Tiền</h4>
                <h5 className="total-price">
                  {totalAmount ? totalAmount + 0 : "0"} VND
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
