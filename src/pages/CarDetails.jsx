import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import carData from "../assets/carData.js";
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { id, imgUrl, carName, price, brand, description, rating, model, gps, automatic, speed, seatType } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const result = carData[id - 1];

    dispatch(selectedProduct(result));
  };
  const Helmet = (props) => {
    document.title = "Rent Car Service - " + props.title;
    return <div className="w-100">{props.children}</div>;
  };
  const CommonSection = ({ title }) => {
    return (
      <section className="common__section mb-5">
        <Container className="text-center">
          <h1 className="text-light">{title}</h1>
        </Container>
      </section>
    );
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <Helmet title={carName}>
      <CommonSection title="Car Listing" />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    Rs {price}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({rating} ratings)
                  </span>
                </div>
                
                <p className="section__description">
                  {description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {brand}
                  </span>
                  
                </div>
              </div>
              <div
                  className=" d-flex align-items-center gap-5 mb-4 mt-3"
                  style={{ columnGap: "4rem" }}
                >
                <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    <Button variant="dark" type="submit">
                      <Link to={`/form/${id}`}>Book Now</Link>
                    </Button>
                  </span>
                  </div>
            </Col>

            


          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
