import leftBgDesktop from '../assets/bg-main-desktop.png'
import leftBgMobile from '../assets/bg-main-mobile.png'
import {
  Attribution,
  Container,
  LeftBackgroundDesktop,
  LeftBackgroundMobile,
  StyledBody,
} from './styles/Body.styled'
import Form from './Form'
import Card from './Card'
import ThankYouMessage from './ThankYouMessage'

export default function Body({
  cardDetails,
  setCardDetails,
  isFilled,
  setIsFilled,
  error,
  setError,
}) {
  return (
    <>
      <StyledBody>
        <LeftBackgroundDesktop src={leftBgDesktop} />
        <LeftBackgroundMobile src={leftBgMobile} />

        <Container>
          <Card cardDetails={cardDetails} />
          {isFilled ? (
            <ThankYouMessage />
          ) : (
            <Form
              cardDetails={cardDetails}
              setCardDetails={setCardDetails}
              isFilled={isFilled}
              setIsFilled={setIsFilled}
              error={error}
              setError={setError}
            />
          )}
          {/* <ThankYouMessage /> */}
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
