import saleImage from "../assets/images/saleImage.jpg"

function SaleImage(){
    return(
        <div className="sale-image">
      <img src={saleImage} alt="sale" ></img>
      <div className="sale-image__offer">
        <h2>Udemy flash sale! 24 hours to save</h2>
        <p>
          Get the top courses for just 499. Just one day to save, lfetime to
          learn
        </p>
      </div>
    </div>
    )
}

export default SaleImage;