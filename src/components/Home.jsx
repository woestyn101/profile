import profileImage from "../assets/marius4.png"

const Home = () => {
    return (
        <div className="home">
       <div className="about-me">

      <div className="about-title">
      <h2>About me</h2>
     </div>
     <div className="about-image-content">
     <div className="about-image">
     <img src={profileImage} className="profile-image" alt="profile image" />
     </div>
     <div className="about-content">
      My love for computer programmming started in the early 2000's when I had to built a personal website. From there my knowledge just great exponentially and on the way I learned to code with actionscript and then php. Three years I ago, a friend introduced me to python and I absolute loved it, especiale working with pandas and dataframes. I am currently enrolled in a coding bootcamp from Ohio State University and I my vision is to use my knowledge to help companies function better. 
     </div>

     </div>
     

     </div>
    
    </div>

      );
}
 
export default Home;
