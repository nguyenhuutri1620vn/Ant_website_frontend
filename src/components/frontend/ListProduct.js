import { MenuOutlined } from "@ant-design/icons/lib/icons";
import {
  AutoComplete,
  BackTop,
  Card,
  Col,
  Pagination,
  Row,
  Select,
  Spin,
} from "antd";
import axios from "axios";
import _ from "lodash";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import product_image from "../../asset/frontend/product-image.jpg";
import Slidebar from "../../layouts/frontend/Slidebar";

function ListProduct() {
  document.title = "Product list";

  const [product, setProduct] = useState([]);
  const [slide, setSlide] = useState([]);
  const { Meta } = Card;
  const [current, setCurrent] = useState(1);
  const numEachPage = 54;
  const [brand, setBrand] = useState([]);
  const [state, setState] = useState({
    min: 0,
    max: numEachPage,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/product?q=rose&limit=25&page=1")
      .then((response) => {
        if (response.status === 200) {
          setProduct(response.data);
          setLoading(false);
        } else {
          console.log("Connect fail");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {};
  }, []);

  const options = useMemo(() => {
    const options = [];
    for (let i = 0; i < product.length; i++) {
      options.push(product[i].brand);
    }
    return _.uniq(options);
  }, [product]);

  const handleChangeBrand = useCallback(
    (value) => {
      setBrand(value);
      setCurrent(1);
      setState({ ...state, min: 0 });
      setSlide([]);
    },
    [state]
  );

  const filteredOptions = options.filter((o) => !brand.includes(o));
  const handleChange = (value, pageSize) => {
    if (pageSize !== numEachPage) {
      setState({
        min: (value - 1) * pageSize,
        max: value * pageSize,
      });
    } else {
      setState({
        min: (value - 1) * numEachPage,
        max: value * numEachPage,
      });
    }
    setCurrent(value);
  };

  const filterProduct = useMemo(() => {
    const brandMap = brand.reduce((obj, next) => {
      obj[next] = true;
      return obj;
    }, {});
    return brand.length
      ? _(product || {})
          .filter((i) => brandMap[i.brand])
          .value()
      : product;
  }, [brand, product]);

  const finalProduct = useMemo(() => {
    return _.slice(filterProduct, state.min, state.max);
  }, [filterProduct, state]);

  const LoadingPage = () => {
    return (
      <div className="loading-screen">
        {" "}
        <Spin /> <span>Loading...</span>
      </div>
    );
  };

  const handleClick = useCallback(
    (value) => {
      setSlide(product.filter((item) => item.brand === value.key));
      setCurrent(1);
      setBrand([]);
      setState({ ...state, min: 0 });
    },
    [product, state]
  );

  const finalSearch = useMemo(() => {
    return _.slice(slide, state.min, state.max);
  }, [slide, state]);

  const data = useMemo(() => {
    const data = [];
    for (let i = 0; i < product.length; i++) {
      data.push({
        value: product[i].name,
      });
    }
    return data;
  }, [product]);

  const onSelectAuto = (value) => {
    const select_product = product.filter((item) => item.name === value);
    window.location=`/product-item/${select_product[0].id}`;
  };

  return (
    <div className="site-card-wrapper">
      <Row>
        <BackTop />
        <Col span={4}>
          <div className="menu-slider">
            <div className="menu-slider-title">
              <MenuOutlined /> Product options
            </div>
            <div className="menu-slider-content">
              <Slidebar
                eventOnClick={handleClick}
                handleChangeBrand={handleChangeBrand}
                brand={options}
              />
            </div>
          </div>
        </Col>
        <Col span={20}>
          <Row>
            <Col span={16}>
              <Select
                mode="multiple"
                placeholder="Inserted brand"
                value={brand}
                onChange={handleChangeBrand}
                style={{ width: "99.5%", marginBottom: 30 }}
              >
                <Select.Option key="0">All</Select.Option>
                {filteredOptions.map((item) => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={8}>
              <AutoComplete
                className="search-by-name"
                options={data}
                placeholder="Search by name"
                filterOption={(inputValue, option) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
                onSelect={onSelectAuto}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            {loading ? (
              <LoadingPage />
            ) : (
              (finalSearch.length ? finalSearch : finalProduct).map((item) => {
                return (
                  <Col span={4} style={{ marginBottom: 30 }} key={item.id}>
                    <Link to={`product-item/${item.id}`}>
                      <Card
                        hoverable
                        title={item.name}
                        bordered={false}
                        children
                        className="card-product"
                      >
                        <div className="product-image-area">
                          <img
                            alt=""
                            src={product_image}
                            className="product-image"
                          />
                        </div>
                        <Meta
                          title={item.brand}
                          description={
                            <div className="description-product">
                              {item.ingredient_list.toString()}
                            </div>
                          }
                        />
                      </Card>
                    </Link>
                  </Col>
                );
              })
            )}
          </Row>
          <div className="paginate-align">
            {
              <Pagination
                current={current}
                pageSizeOptions={[10, 20, 30, 50, 100]}
                size="large"
                total={slide.length || filterProduct.length}
                showSizeChanger
                showQuickJumper
                defaultPageSize={numEachPage}
                onChange={handleChange}
              />
            }
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default ListProduct;
