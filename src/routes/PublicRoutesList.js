import Home from "../components/frontend/Home";
import ListProduct from "../components/frontend/ListProduct";
import Detail from "../components/frontend/Detail";

const PublicRoutesList = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/list-product', exact: true, name: 'ListProduct', component: ListProduct },
    { path: '/product-item/:id', exact: true, name: 'Detail', component: Detail },

];
export default PublicRoutesList;