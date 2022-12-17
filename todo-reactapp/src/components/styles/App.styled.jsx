import styled from 'styled-components'

export const LightModeBgMobile = styled.img`
  display: none;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
`

export const LightModeBgDesktop = styled.img`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  height: 30%;
  object-fit: cover;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`

export const DarkModeBgMobile = styled.img`
  display: none;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
`

export const DarkModeBgDesktop = styled.img`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  height: 30%;
  object-fit: cover;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`

export const Container = styled.div`
  width: 90%;
  margin: auto;

  @media screen and (min-width: 481px) and (max-width: 760px) {
    width: 70%;
  }

  @media screen and (min-width: 761px) {
    width: 45%;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0 2.3rem;
`

export const Heading = styled.h2`
  letter-spacing: 13px;
  font-weight: 700;
  color: hsl(0, 0%, 98%);
`

export const LightModeIcon = styled.img`
  width: 1.3rem;
`

export const DarkModeIcon = styled.img`
  width: 1.3rem;
`

export const Footer = styled.footer`
  margin: 3rem 0;
  color: ${({ theme }) => theme.itemCompleted};
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
`
