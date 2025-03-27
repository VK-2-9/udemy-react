import AWS from "../assets/images/AWS.jfif";
import azure from "../assets/images/azure.jfif";
import HTMLCSSJS from "../assets/images/HTMLCSSJS.jfif";
import JAVA from "../assets/images/JAVA.jfif";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";




function Popular(){
    return (
        <div className="popular">
      <h1 className="popular__title">Most Popular</h1>
      <p className="popular__subtite">Pick the best fit</p>
      <div className="popular__container">

        <div className="course-card">
          <img src={AWS} alt="AWS"></img>
          <h3>Introduction to Cloud Computing on AWS for Beginners</h3>
          <p>Ramos</p>
          <p>3 ⭐⭐⭐</p>
          <p>RS199 <del>399</del></p>
        </div>

        <div className="course-card">
          <img src={azure} alt="Azure" ></img>
          <h3>Microsoft Azure: From Zero to Hero - The Complete Guide</h3>
          <p>Yamal</p>
          <p>4.9 ⭐⭐⭐</p>
          <p>RS399 <del>799</del></p>
        </div>

        <div className="course-card">
          <img src={HTMLCSSJS} alt="HTML CSS JS"></img>
          <h3>50 Projects In 50 Days - HTML, CSS & JavaScript</h3>
          <p>Pedri</p>
          <p>4.6 ⭐⭐⭐⭐</p>
          <p>RS999 <del>1299</del></p>
        </div>

        <div className="course-card">
          <img src={JAVA} alt="JAVA" ></img>
          <h3>Java Spring Framework 6 with Spring Boot 3</h3>
          <p>Gavi</p>
          <p>4.2 ⭐⭐⭐</p>
          <p>RS199 <del>499</del></p>
        </div>

        <div className="course-card">
          <img src={c1} alt="Python" ></img>
          <h3>2023 Python Data Visualization Masterclass</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>RS499 <del>999</del></p>
        </div>

        <div className="course-card">
          <img src={c2}alt="Web development" ></img>
          <h3>Web Development Bootcamp 2023</h3>
          <p>Sastri</p>
          <p>4.9 ⭐⭐⭐</p>
          <p>RS399 <del>799</del></p>
        </div>

        <div className="course-card">
          <img src={c3} alt="Node JS"></img>
          <h3>Node JS crash course</h3>
          <p>Jaya</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>RS699 <del>999</del></p>
        </div>

        <div className="course-card">
          <img src={c4} alt="Everyhing about Audrino" ></img>
          <h3>Everything about Audrino</h3>
          <p>Salah</p>
          <p>4.9 ⭐⭐⭐</p>
          <p>RS199 <del>499</del></p>
        </div>
        
      </div>
    </div>
    )
}

export default Popular;