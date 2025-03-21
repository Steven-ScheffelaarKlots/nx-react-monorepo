
import { Route, Routes, Link } from 'react-router-dom';

import { Products } from '@react-monorepo/products';
import { Orders } from '@react-monorepo/orders';

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Products</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
