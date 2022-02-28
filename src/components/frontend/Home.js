import React from "react";
import { Layout, Carousel, Row, Col, Divider, Button } from "antd";
import banner_1 from "../../asset/frontend/banner-1.jpg";
import banner_2 from "../../asset/frontend/banner-2.png";
import banner_3 from "../../asset/frontend/banner-3.jpg";
import banner_4 from "../../asset/frontend/banner-4.jpg";
import swimming_float from "../../asset/frontend/swimming-float.png";
import bag_icon from "../../asset/frontend/bag-icon.png";
import me from "../../asset/frontend/me.jpeg";

import clock_icon from "../../asset/frontend/clock-icon.png";
import dashboard_icon from "../../asset/frontend/dashboard-icon.jpg";
import { RightCircleOutlined } from "@ant-design/icons/lib/icons";

function Home() {
  document.title = "BEAUTY-G | MAKE YOU BECOME PRINCESS";
  return (
    <Layout className="home">
      <div className="carousel">
        <Carousel effect="fade" autoplay>
          <div>
            <img alt="banner-1" src={banner_1} className="carousel-banner" />
          </div>
          <div>
            <img alt="banner-1" src={banner_2} className="carousel-banner" />
          </div>
          <div>
            <img alt="banner-1" src={banner_3} className="carousel-banner" />
          </div>
          <div>
            <img alt="banner-1" src={banner_4} className="carousel-banner" />
          </div>
        </Carousel>
      </div>
      <div className='content-main'>
      <div className="infomation-helper">
        <Row>
          <Col span={6} className="infomation-helper-col">
            <div className="infomation-helper-conent">
              <div className="img-area-infomation-helper">
                <img
                  alt="swimming-float"
                  src={swimming_float}
                  className="image-infomation-helper"
                />
              </div>
              <Divider >
                <h1 className="infomation-helper-title">Support 24/7</h1>
              </Divider>
              <p className="infomation-helper-detail">
                Lorem ipsum doler sit port amet, consectetur adipi-sicing elit,
                sed do eiusmoc 24/7 support!
              </p>
              
            </div>
            <Button>
                Read more <RightCircleOutlined />
              </Button>
          </Col>
          <Col span={6} className="infomation-helper-col">
            <div className="infomation-helper-conent">
              <div className="img-area-infomation-helper">
                <img
                  alt="swimming-float"
                  src={bag_icon}
                  className="image-infomation-helper"
                />
              </div>
              <Divider>
                <h1 className="infomation-helper-title">Pride Folio</h1>
              </Divider>
              <p className="infomation-helper-detail">
                Lorem ipsum doler sit port amet, consectetur adipi-sicing elit,
                sed do eiusmoc Stunning portfolio!
              </p>
            </div>
            <Button>
              Read more <RightCircleOutlined />
            </Button>
          </Col>
          <Col span={6} className="infomation-helper-col">
            <div className="infomation-helper-conent">
              <div className="img-area-infomation-helper">
                <img
                  alt="swimming-float"
                  src={clock_icon}
                  className="image-infomation-helper"
                />
              </div>
              <Divider>
                <h1 className="infomation-helper-title">Time Respect</h1>
              </Divider>
              <p className="infomation-helper-detail">
                Lorem ipsum doler sit port amet, consectetur adipi-sicing elit,
                sed do eiusmoc We're always on time!
              </p>
            </div>
            <Button>
              Read more <RightCircleOutlined />
            </Button>
          </Col>
          <Col span={6} className="infomation-helper-col">
            <div className="infomation-helper-conent">
              <div className="img-area-infomation-helper">
                <img
                  alt="swimming-float"
                  src={dashboard_icon}
                  className="image-infomation-helper"
                />
              </div>
              <Divider>
                <h1 className="infomation-helper-title">Best Quality</h1>
              </Divider>
              <p className="infomation-helper-detail">
                Lorem ipsum doler sit port amet, consectetur adipi-sicing elit,
                sed do eiusmoc case study!
              </p>
            </div>
            <Button>
              Read more <RightCircleOutlined />
            </Button>
          </Col>
        </Row>
      <hr width="80%" align="center" className="hr-css" />
      </div>
      <div className="infomation-about-us">
        <Row>
          <Col span={12}>
            <div className="infomation-about-us-content">
              <div className="infomation-about-us-title">
                Who we are
              </div>
              <div className="infomation-about-us-description">
              Lorem ipsum doler sit port amet, consectetur adipi-sicing elit,
                sed do eiusmoc who we are!
              </div>
            </div>
            <div className="infomation-about-us-content">
              <div className="infomation-about-us-title">Behind the logo</div>
              <div className="infomation-about-us-description">
              Lorem ipsum doler sit port amet, consectetur adipi-sicing elit,
                sed do eiusmoc behind the logo!
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="infomation-about-us-content">
              <div className="infomation-about-us-title">Our team</div>
              <div className="infomation-about-us-description">
              Lorem ipsum doler sit port amet, consectetur adipi-sicing elit,
                sed do eiusmoc our team!
              </div>
            </div>
            <Row>
              <Col span={6}>
                <div className="infomation-about-us-invidual">
                  <div className="infomation-about-us-invidual-image-area">
                    <img
                      alt="ceo"
                      src={me}
                      className="infomation-about-us-invidual-image"
                    />
                  </div>
                  <div className="infomation-about-us-invidual-info">
                    <div className="infomation-about-us-invidual-name">
                      Nguyen Huu Tri
                    </div>
                    <div className="infomation-about-us-invidual-description">
                      22 year old single
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={6}>
                <div className="infomation-about-us-invidual">
                  <div className="infomation-about-us-invidual-image-area">
                    <img
                      alt="ceo"
                      src={me}
                      className="infomation-about-us-invidual-image"
                    />
                  </div>
                  <div className="infomation-about-us-invidual-info">
                    <div className="infomation-about-us-invidual-name">
                      Nguyen Huu Tri
                    </div>
                    <div className="infomation-about-us-invidual-description">
                    22 year old single
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={6}>
                <div className="infomation-about-us-invidual">
                  <div className="infomation-about-us-invidual-image-area">
                    <img
                      alt="ceo"
                      src={me}
                      className="infomation-about-us-invidual-image"
                    />
                  </div>
                  <div className="infomation-about-us-invidual-info">
                    <div className="infomation-about-us-invidual-name">
                      Nguyen Huu Tri
                    </div>
                    <div className="infomation-about-us-invidual-description">
                    22 year old single
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={6}>
                <div className="infomation-about-us-invidual">
                  <div className="infomation-about-us-invidual-image-area">
                    <img
                      alt="ceo"
                      src={me}
                      className="infomation-about-us-invidual-image"
                    />
                  </div>
                  <div className="infomation-about-us-invidual-info">
                    <div className="infomation-about-us-invidual-name">
                      Nguyen Huu Tri
                    </div>
                    <div className="infomation-about-us-invidual-description">
                    22 year old single
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
