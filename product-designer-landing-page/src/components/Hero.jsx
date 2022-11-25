import elipseRight from "../assets/Ellipse 2.png"
import elipseLeft from "../assets/Ellipse 1.png"
import imageLeft from "../assets/vintage 1 (1).png"
import imageRight from "../assets/vintage 1.png"
import arrowDownLight from "../assets/arrow-down-light.png"
import arrowDownDark from "../assets/arrow-down.png"
import logoLight from "../assets/Logo.png"
import logoDark from "../assets/LogoDark.png"
import { 
  Navbar, 
  StyledHero, 
  NavLinks, 
  Logo, 
  Link, 
  Button,
  Heading,
  ImageRight,
  ImageLeft,
  ArrowDown,
  ElipseRight,
  ElipseLeft
} from "./styles/Hero.styled";

export default function Hero({ darkMode }) {

  
  return (
    <StyledHero>
      <Navbar>
        <Logo src={darkMode ? logoDark : logoLight} />
        <NavLinks>
          <Link>
            <a href="#">Home</a>
          </Link>
          <Link>
            <a href="#about">About Me</a>
          </Link>
          <Link>
            <a href="#skills">Skills</a>
          </Link>
        </NavLinks>
        <Button>Contact Me</Button>
      </Navbar>

      <Heading>
        PRODUCT DESIGNER
      </Heading>

      <ImageRight src={imageRight} />
      <ImageLeft src={imageLeft} />

      <ElipseLeft src={elipseLeft} />
      <ElipseRight src={elipseRight} />

      <ArrowDown src={darkMode ? arrowDownLight : arrowDownDark} />
    </StyledHero>
  )
}
