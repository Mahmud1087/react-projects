import logo from "../assets/LogoDark.png";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkedIn from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import { 
    FooterContainer, 
    Socials 
} from "./styles/Footer.styled";

export default function Footer() {
  return (
    <FooterContainer>
        <a href="#"><img src={logo} /></a>
        <Socials>
            <img src={instagram} />
            <img src={facebook} />
            <img src={linkedIn} />
            <img src={twitter} />
        </Socials>
    </FooterContainer>
  )
}
