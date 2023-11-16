import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        {/* <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Nhập địa chỉ email..."
                  aria-label="Nhập địa chỉ email..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Liên hệ</h4>
              <div>
                <address className="text-white fs-6">
                  Địa chỉ: Cái Khế, Ninh Kiều, <br />
                  Cần Thơ
                </address>
                <a
                  href="tel: +84 987654321"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +84 987654321
                </a>
                <a
                  href="mailto: admin@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  admin@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="#" className="text-white">
                    <BsLinkedin className="fs-4"></BsLinkedin>
                  </a>
                  <a href="#" className="text-white">
                    <BsInstagram className="fs-4"></BsInstagram>
                  </a>
                  <a href="#" className="text-white">
                    <BsGithub className="fs-4"></BsGithub>
                  </a>
                  <a href="#" className="text-white">
                    <BsYoutube className="fs-4"></BsYoutube>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Thông tin</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white mb-1 py-2">
                  Chính sách bảo mật
                </Link>
                <Link to="/refund-policy" className="text-white mb-1 py-2">
                  Chính sách hoàn trả
                </Link>
                <Link to="/shipping-policy" className="text-white mb-1 py-2">
                  Chính sách vận chuyển
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="text-white mb-1 py-2"
                >
                  Điều khoản và điều kiện
                </Link>
                <Link className="text-white mb-1 py-2">Blog</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Tài khoản</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">Về chúng tôi</Link>
                <Link className="text-white mb-1 py-2">Faq</Link>
                <Link className="text-white mb-1 py-2">Liên hệ</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Đường dẫn</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">Điện thoại</Link>
                <Link className="text-white mb-1 py-2">Máy tính bảng</Link>
                <Link className="text-white mb-1 py-2">Tai nghe</Link>
                <Link className="text-white mb-1 py-2">Khác</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Zero
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
