import App from "./components/App/App.jsx";
import Home from "./components/Home/Home.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

/**
 * note: use react-router provided <Link to="<url_to_another_page>"></Link>
 *       while navigating to another page.
 */
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
        path: "weekend-plan",
        element: <Checkout />
      }
    ]
  },
];

export default routes;