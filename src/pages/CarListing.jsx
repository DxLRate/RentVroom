import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import CarItem from "../components/CarItem";
import {Container, Row, Col} from 'react-bootstrap';
import carData from "../assets/carData";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts =  () => {
    dispatch(setProducts(carData));
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
    fetchProducts();
  }, []);

  console.log("Products :", products);

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductPage;
