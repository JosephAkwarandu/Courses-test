import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";

import Template from "./pages/template";
import Home from "./pages/home";
import Courses from "./pages/courses";
import Contact from "./pages/contact";
import About from "./pages/about";
import Authentication from "./pages/authentication";
import Signup from "./pages/signup";
import Signin from "./pages/signin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Template />}>
      <Route index element={<Home />} />
      <Route path="courses" element={<Courses />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="auth" element={<Authentication />}>
        <Route index element={<Signup />}/>
        <Route path="signin" element={<Signin />}/>
      </Route>
    </Route>
  )
);


function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
