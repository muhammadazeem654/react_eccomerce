import React from "react";
import Home from "./Pages/Home";
import Shops from "./Pages/Shop";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    // <BrowserRouter>
<React.Fragment>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="shop" element={<Shops />} />
  <Route path="blog" element={<Blog />} />
  <Route path="about" element={<About />} />
  <Route path="contact" element={<Contact />} />
</Routes>

</React.Fragment>
// </BrowserRouter>

  );
}

export default App;
