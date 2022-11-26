import aboutMeData from "../aboutMeData"
import { 
    AboutImage,
    AboutParagraph,
    AboutTexts, 
    Container, 
    HorizontalLine,
    Image,
    StyledHeading
} from "./styles/AboutMe.styled"
import { FlexColumn, FlexRow } from "./styles/Flex.styled"

const aboutDetails = aboutMeData.map((about, index) => {
    return (
            <FlexRow key={index} direction={about.even ? 'row-reverse' : 'row'}>
                <AboutTexts>
                    <StyledHeading>
                        {about.heading}
                    </StyledHeading>
                    <HorizontalLine />
                    <AboutParagraph>{about.paragraph1}</AboutParagraph>
                    <AboutParagraph>{about.paragraph2}</AboutParagraph>
                </AboutTexts>
                <AboutImage>
                    <Image src={about.image} />
                </AboutImage>
            </FlexRow>
    )
})

export default function AboutMe() {
  return (
    <Container id="about">
        <FlexColumn>
            {aboutDetails}
        </FlexColumn>
    </Container>
  )
}
