import datascience from "../assets/images/datascience.jfif";
import AI from "../assets/images/AI.jpg";       
import videoediting from "../assets/images/videoediting.jfif";
import contentcreation from "../assets/images/contentcreation.jfif";



function Recommended(){
    return(

        <div className="recommended">
        <h1 className="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div className="recommended__container">
          
          <div className="course-card">
            <img src={datascience} alt="Datascience" ></img>
            <h3>Data Science A-Z: Hands-On Exercises </h3>
            <p>Messi</p>
            <p>4.5 ⭐⭐⭐⭐</p>
            <p>RS399 <del>599</del></p>
          </div>
  
          <div className="course-card">
            <img src={AI} alt="AI"></img>
            <h3>The Complete AI-Powered Copywriting Course</h3>
            <p>Ronaldo</p>
            <p>4.8 ⭐⭐⭐</p>
            <p>RS799 <del>1199</del></p>
          </div>
  
          <div className="course-card">
            <img src={videoediting} alt="Video Editing" ></img>
            <h3>Editing Mastery: How To Edit Writing To Perfection</h3>
            <p>Neymar</p>
            <p>4.0 ⭐⭐⭐⭐</p>
            <p>RS699 <del>999</del></p>
          </div>
  
          <div className="course-card">
            <img src={contentcreation} alt="Content Creation" ></img>
            <h3>Content Creation Masterclass for Beginners</h3>
            <p>Salah</p>
            <p>4.9 ⭐⭐⭐</p>
            <p>RS199 <del>499</del></p>
          </div>
        </div>
      </div>
    )
}

export default Recommended;