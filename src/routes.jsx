import App from "./components/App/App.jsx";
import Home from "./components/Home/Home.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Category from "./components/Category/Category.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: ":category",
        element: <Category />
      },
      {
        path: "weekend-plan",
        element: <Checkout />
      }
    ]
  },
];

export default routes;