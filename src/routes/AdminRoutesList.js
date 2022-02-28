import Dashboard from "../components/admin/Dashboard";
import Product from "../components/admin/Product";

const AdminRoutesList = [
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/product', exact: true, name: 'Product', component: Product },

];
export default AdminRoutesList;