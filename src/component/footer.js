import githubImg from "../images/github.png"
import "./styles/footer.css"
const Footer =()=>{
    return(
        <div className="footer">
            <a href="https://github.com/sumitshinde-84">Copyright © {new Date().getFullYear()} sumitshinde-84</a>
             <img src={githubImg} alt="githublogo"/>
        </div>

    )
}

export default Footer;