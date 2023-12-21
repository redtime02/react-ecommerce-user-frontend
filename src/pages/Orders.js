import React, { useEffect } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";
import Moment from "moment";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getOrderedProduct?.orders
  );
  console.log(orderState);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <>
      <BreadCrumb title="Lịch sử đơn hàng" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <h5>Mã đơn</h5>
              </div>
              <div className="col-3">
                <h5>Tổng cộng</h5>
              </div>
              <div className="col-3">
                <h5>Ngày đặt hàng</h5>
              </div>
              <div className="col-3">
                <h5>Trạng thái</h5>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <div
                    style={{ backgroundColor: "#1a6f32" }}
                    className="row pt-3 my-3"
                    key={index}
                  >
                    <div className="col-3">
                      <p className="text-white">{item?._id}</p>
                    </div>
                    <div className="col-3">
                      <p className="text-white">
                        {item?.totalPriceAfterDiscount} VND
                      </p>
                    </div>
                    <div className="col-3">
                      <p className="text-white">
                        {Moment(item?.paidAt).format("DD/MM/YYYY")}
                      </p>
                      {/* new Date(item?.paidAt).toLocaleString() */}
                    </div>
                    <div className="col-3">
                      <p className="text-white">{item?.orderStatus}</p>
                    </div>
                    <div className="col-12">
                      <div
                        className="row p-3"
                        style={{ backgroundColor: "#b5c3c7" }}
                      >
                        <div className="col-3">
                          <h6 className="">Tên sản phẩm</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="">Số lượng</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="">Tổng tiền</h6>
                        </div>
                        {/* <div className="col-3">
                          <h6 className="text-white">Màu sắc</h6>
                        </div> */}
                        {item?.orderItems?.map((i, index) => {
                          return (
                            <div className="col-12" key={index}>
                              <div className="row py-3">
                                <div className="col-3">
                                  <p className="">{i?.product?.title}</p>
                                </div>
                                <div className="col-3">
                                  <p className="">{i?.quantity}</p>
                                </div>
                                <div className="col-3">
                                  <p className="">{i?.price} VND</p>
                                </div>
                                {/* <div className="col-3">
                                  <ul className="colors ps-0">
                                    <li
                                      style={{
                                        backgroundColor: i?.color,
                                      }}
                                    ></li>
                                  </ul>
                                </div> */}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Orders;
