import { LeftOutlined } from "@ant-design/icons/lib/icons";
import { Button, Col, Image, InputNumber, Radio, Rate, Row, Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import product_image from "../../asset/frontend/product-image.jpg";

function Default(props) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const product_id = props.match.params.id;
    axios.get(`/products/${product_id}`).then((res) => {
      if (res.status === 200) {
        setProduct(res.data);
        setLoading(false);
      } else {
        console.log("Connect fails");
      }
    });
  }, [props.match.params.id]);

  const LoadingPage = () => {
    return (
      <div className="loading-screen">
        {" "}
        <Spin /> <span>Loading...</span>
      </div>
    );
  };

  const onChangeNumber = (value) => {
    console.log(value);
  };

  return (
    <div className="product-detail">
      {loading ? (
        <LoadingPage />
      ) : (
        <div>
          <Button onClick={() => window.history.back()}>
            <LeftOutlined /> Back
          </Button>
          <Row>
            <Col span={12} className="center-text">
              <div className="image-product-detail">
                <Image width={500} src={product_image} />
              </div>
            </Col>
            <Col span={12}>
              <div className="product-item-content">
                <div className="product-item-title-area">
                  <div className="product-item-title">{product.name}</div>
                </div>
                <div className="product-item-brand">
                  Brand: <span>{product.brand}</span>
                </div>
                <div className="product-item-ingredient">
                  <b>Ingredient: </b>
                  {product.ingredient_list.toString()}
                </div>
                <div className="btn-quantity-cart">
                  <div className="choose-type-product">
                    <div className="mar-bot">
                      <div className="price-product">
                        price: <span className="origin-price">$2.99</span>
                        <br />
                        safe off, only:{" "}
                        <span className="sell-price">$1.99</span>
                      </div>
                      <Rate allowHalf defaultValue={4} />
                      <br />
                      <span>(23 feedback)</span>
                    </div>
                    <br />
                    <Radio.Group defaultValue="a" size="large">
                      <Radio.Button value="a">Fake</Radio.Button>
                      <Radio.Button value="b">Rep</Radio.Button>
                      <Radio.Button value="c">Real</Radio.Button>
                      <Radio.Button value="d">Limited</Radio.Button>
                    </Radio.Group>
                  </div>
                  <Row>
                    <Col span={4}>
                      <InputNumber
                        min={1}
                        max={10}
                        size="large"
                        defaultValue={1}
                        className="btn-quantity btn-100"
                        onChange={onChangeNumber}
                      />
                    </Col>
                    <Col span={20}>
                      <Button size="large" type="primary" className="btn-100">
                        Add to cart
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
export default Default;
