import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import AboutUs from "./components/About Us/aboutUs";
import Benefits from "./components/Benefits/benefits";
import Work from "./components/how we work/work";
import "./App.css"

export default () => {
  return <div>
    <div id="top">
      <Header></Header>
      <Home></Home>
    </div>
    <AboutUs></AboutUs>
    <Benefits></Benefits>
    <Work></Work>
    <Footer></Footer>
  </div>
}