import completeIcon from '../assets/icon-complete.svg'
import { Button, FlexColumn } from './styles/Body.styled'
import { FormSection } from './styles/Form.styled'
import { CompleteIcon, Heading, Paragraph } from './styles/ThankYou.styled'

export default function ThankYouMessage() {
  return (
    <FormSection>
      <FlexColumn>
        <CompleteIcon src={completeIcon} />
        <Heading>THANK YOU!</Heading>
        <Paragraph>We've added your card details</Paragraph>
        <Button>Continue</Button>
      </FlexColumn>
    </FormSection>
  )
}
