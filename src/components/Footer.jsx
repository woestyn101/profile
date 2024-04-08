import githubLogo from "../assets/Github_logo_50.png"
import linkedIn_logo from "../assets/linkedIn_logo_50.png"
import dev_logo from "../assets/dev_logo.png"
import {Footer} from 'flowbite-react'


const FooterComp = () => {

   
    return (
        <Footer>
            <div className="sub-footer">
            <a href="https://github.com/woestyn101" target="_blank">
          <img src={githubLogo} className="logo-github" alt="Github profile" />
        </a>
        <a href="https://www.linkedin.com/in/marius-du-plooy-18150090/" target="_blank">
          <img src={linkedIn_logo} className="logo-linkedIn" alt="LinkedIn profile" />
        </a>
                <a href="https://dev.to/woestyn" target="_blank">
          <img src={dev_logo} className="logo-dev" alt="Dev community" />
        </a>
            </div>
            
        </Footer>
         
   

      );
}
 
export default FooterComp;
