import React from "react";
import AdminRoutesList from "../../routes/AdminRoutesList";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Slidebar from "./Slidebar";
import { Col, Row } from "antd";

const MasterPage = () => {
  return (
    <div className="container-admin">
      <Header />
      <div >
        <Row className="content-admin">
          <Col span={3}>
            <Slidebar />
          </Col>
          <Col span={20}>
            <div className="site-layout-background page-admin">
            <Switch>
              {AdminRoutesList.map((route, idx) => {
                return (
                  route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => <route.component {...props} />}
                    />
                  )
                );
              })}
              <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default MasterPage;
