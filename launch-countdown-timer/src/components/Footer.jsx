import { FaFacebookSquare, FaInstagram, FaPinterest } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer>
        <FaFacebookSquare className='icons' />
        <FaPinterest className='icons' />
        <FaInstagram className='icons' />
      </footer>
      <div className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='#'>Mahmud Abdulazeez</a>.
      </div>
    </>
  )
}
