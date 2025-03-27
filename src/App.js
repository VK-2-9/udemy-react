import Navbar from "./components/navbar"
import Categories from "./components/categories"
import SaleImage from "./components/saleImage"
import Recommended  from "./components/recommended"
import Topics from "./components/topics"
import Popular from "./components/popular"
import Footer from "./components/footer"



function App(){

    return (
        <>
        <Navbar></Navbar>
        <Categories></Categories>
        <SaleImage></SaleImage>
        <Recommended></Recommended>
        <Topics></Topics>
        <Popular>  </Popular>
        <Footer></Footer>
        </>
    )
}

export default App