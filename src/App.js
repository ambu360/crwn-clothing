import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router";
import Navigation from "./routes/navigation/navigation.component";
import Signin from "./routes/authentication/authentication.component";
const Shop = () => {
  return <h1>I am the shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path='auth' element={<Signin/>}/>
        
      </Route>
    </Routes>
  );
};

export default App;
