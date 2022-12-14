import styled from 'styled-components'

export const StyledFooterButtons = styled.section`
  margin-top: 1.3rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.header_ItemBoxBG};
  box-shadow: 2px 7px 12px rgba(0, 0, 0, 0.15),
    -2px -7px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`

export const Button = styled.button`
  color: ${({ theme }) => theme.itemCompleted};
  font-weight: 600;
  background: transparent;
  border: none;
  font-size: 1.1rem;
  font-family: 'Josefin Sans', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;

  &:focus {
    outline: none;
  }

  &.active {
    color: hsl(220, 98%, 61%);
  }
`
