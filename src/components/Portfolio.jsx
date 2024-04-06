import weatherApp from "../assets/weather_app.png"
import theblogApp from "../assets/the_blog.png"
import githubSmall from "../assets/Github_logo_25.png"
import apiApp from "../assets/api_app.png"
import noteApp from "../assets/note_taking.png"
import passwordApp from "../assets/password_generator.png"
import quizApp from "../assets/quiz_app.png"
import { useState } from 'react';

const Portfolio = () => {

  const [projects] = useState([
    {
      name: "Weather app",
      imgAsset: weatherApp,
      repoUrl: "https://github.com/woestyn101/myweather_app?tab=readme-ov-file",
      appUrl: "https://woestyn101.github.io/myweather_app/",
        },
    {
      name: "Blog app",
      imgAsset: theblogApp,
      repoUrl: "https://github.com/woestyn101/theblog.git",
      appUrl: "https://marius-blog-b90344ce9071.herokuapp.com",
    },
    {
      name: "Api Site",
      imgAsset: apiApp,
      repoUrl: "https://github.com/woestyn101/chicken_V2.git",
      appUrl: "https://dashboard.heroku.com/apps/chicken-v2",
    },
    {
      name: "Note taking app",
      imgAsset: noteApp,
      repoUrl: "https://github.com/woestyn101/my_new_note_taking_app.git",
      appUrl: "https://new-note-taker-c51069616412.herokuapp.com",
    },
    {
      name: "Password Generator",
      imgAsset: passwordApp,
      repoUrl: "https://github.com/woestyn101/mypassword_generator.git",
      appUrl: "https://woestyn101.github.io/mypassword_generator/",
    },
    {
      name: "Quiz app",
      imgAsset: quizApp,
      repoUrl: "https://github.com/woestyn101/mod4Quiz.git",
      appUrl: "https://woestyn101.github.io/mod4Quiz/",
    },
    
    
  ]);
    return (
      <div className="myprojects">
        <div className="theprojects">
                         
      {projects.map((image, i) => (  
        <div className="thewrapper" key={i}>        
        <h3 className="name-repo"><span className="project-title"><a href={image.appUrl} target="_blank">{image.name}</a></span> </h3>      
        <img className="project-img" key={image.name} src={image.imgAsset} alt={image.name} />
        <h3><a className="gitrepo" href={image.repoUrl}target="_blank">Github Repo<img className="gitSmall" src={githubSmall} alt="Github Repository"/></a></h3>
            
             
               </div>  
))}
    </div>
        </div>
       
      );
}
 
export default Portfolio;
