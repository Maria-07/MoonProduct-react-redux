import "./App.css";
import "./Custome-antd.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import ProductProvider from "./Context/ProductProvider";

function App() {
  return (
    <div>
      <ProductProvider></ProductProvider>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
