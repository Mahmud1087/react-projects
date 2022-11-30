import leftBgDesktop from '../assets/bg-main-desktop.png'
import leftBgMobile from '../assets/bg-main-mobile.png'
import cardFront from '../assets/bg-card-front.png'
import cardBack from '../assets/bg-card-back.png'
import cardLogo from '../assets/card-logo.svg'
import competeIcon from '../assets/icon-complete.svg'
import {
  Attribution,
  BackCard,
  Button,
  CardCVC,
  CardExpDate,
  CardLogo,
  CardName,
  CardNumber,
  CardSection,
  Container,
  FlexRow,
  FormLabel,
  FormSection,
  FrontCard,
  LeftBackgroundDesktop,
  LeftBackgroundMobile,
  StyledBody,
} from './styles/Body.styled'

export default function Body() {
  return (
    <>
      <StyledBody>
        <LeftBackgroundDesktop src={leftBgDesktop} />
        <LeftBackgroundMobile src={leftBgMobile} />

        <Container>
          <CardSection>
            <FrontCard src={cardFront} />
            <BackCard src={cardBack} />
            <CardLogo src={cardLogo} />
            <CardNumber>0000 0000 0000 0000</CardNumber>
            <CardName>Jane Appleseed</CardName>
            <CardExpDate>00/00</CardExpDate>
            <CardCVC>000</CardCVC>
          </CardSection>

          <FormSection>
            <FormLabel htmlFor='name'>
              CARDHOLDER NAME
              <input type='text' id='name' placeholder='e.g. Jane Appleseaed' />
            </FormLabel>
            <FormLabel htmlFor='number'>
              CARD NUMBER
              <input
                type='text'
                id='number'
                placeholder='e.g. 1234 5678 9123 0000'
              />
            </FormLabel>
            <FlexRow>
              <FormLabel htmlFor='date'>
                EXP. DATE (MM/YY)
                <FlexRow>
                  <input type='number' id='date' placeholder='MM' />
                  <input type='number' id='date' placeholder='YY' />
                </FlexRow>
              </FormLabel>
              <FormLabel htmlFor='cvc'>
                CVC
                <input type='number' id='cvc' placeholder='e.g. 123' />
              </FormLabel>
            </FlexRow>
            <Button>Confirm</Button>
          </FormSection>
        </Container>
        <Attribution>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href='http://twitter.com/MahmudEnesi'>Mahmud Abdulazeez</a>.
        </Attribution>
      </StyledBody>
    </>
  )
}
