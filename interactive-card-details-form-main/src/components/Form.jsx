import { Button, FlexRow } from './styles/Body.styled'
import { FormLabel, FormSection } from './styles/Form.styled'

export default function Form({
  cardDetails,
  setCardDetails,
  isFilled,
  setIsFilled,
  error,
  setError,
}) {
  function handleClick(e) {
    const { name, value } = e.target
    setCardDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (
      cardDetails.cardName !== '' &&
      cardDetails.cardNumber !== '' &&
      cardDetails.cardExpiryMonth !== '' &&
      cardDetails.cvcNumber !== ''
    ) {
      setIsFilled(true)
    }
    // else {
    //   setError(true)
    // }
  }

  return (
    <>
      <FormSection>
        <FormLabel htmlFor='name'>
          CARDHOLDER NAME
          <input
            type='text'
            id='name'
            name='cardName'
            value={cardDetails.cardName}
            onChange={handleClick}
            placeholder='e.g. Jane Appleseaed'
          />
        </FormLabel>
        <FormLabel htmlFor='number'>
          CARD NUMBER
          <input
            type='text'
            id='number'
            name='cardNumber'
            value={cardDetails.cardNumber}
            onChange={handleClick}
            placeholder='e.g. 1234 5678 9123 0000'
          />
        </FormLabel>
        <FlexRow>
          <FormLabel htmlFor='date'>
            EXP. DATE (MM/YY)
            <FlexRow>
              <input
                type='number'
                id='date'
                name='cardExpiryMonth'
                value={cardDetails.cardExpiryMonth}
                onChange={handleClick}
                placeholder='MM'
              />
              <input
                type='number'
                id='date'
                name='cardExpiryYear'
                value={cardDetails.cardExpiryYear}
                onChange={handleClick}
                placeholder='YY'
              />
            </FlexRow>
          </FormLabel>
          <FormLabel htmlFor='cvc'>
            CVC
            <input
              type='number'
              id='cvc'
              name='cvcNumber'
              value={cardDetails.cvcNumber}
              onChange={handleClick}
              placeholder='e.g. 123'
            />
          </FormLabel>
        </FlexRow>
        <Button onClick={handleSubmit}>Confirm</Button>
      </FormSection>
    </>
  )
}
