import cardFront from '../assets/bg-card-front.png'
import cardBack from '../assets/bg-card-back.png'
import cardLogo from '../assets/card-logo.svg'
import {
  BackCard,
  CardCVC,
  CardExpDate,
  CardLogo,
  CardName,
  CardNumber,
  CardSection,
  FrontCard,
} from './styles/Card.styled'

export default function Card({ cardDetails }) {
  return (
    <>
      <CardSection>
        <FrontCard src={cardFront} />
        <BackCard src={cardBack} />
        <CardLogo src={cardLogo} />
        <CardNumber>
          {cardDetails.cardNumber === ''
            ? '0000 0000 0000 0000'
            : cardDetails.cardNumber}
        </CardNumber>
        <CardName>
          {cardDetails.cardName === ''
            ? 'JANE APPLESEED'
            : cardDetails.cardName.toUpperCase()}
        </CardName>
        <CardExpDate>
          {cardDetails.cardExpiryMonth === ''
            ? '00'
            : cardDetails.cardExpiryMonth}
          /
          {cardDetails.cardExpiryYear === ''
            ? '00'
            : cardDetails.cardExpiryYear}
        </CardExpDate>
        <CardCVC>
          {cardDetails.cvcNumber === '' ? '000' : cardDetails.cvcNumber}
        </CardCVC>
      </CardSection>
    </>
  )
}
