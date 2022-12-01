import styled from 'styled-components'

export const FormSection = styled.form`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 17rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  row-gap: 1.1rem;
`

export const FormLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  font-size: 0.9rem;

  input {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.lightGrayishViolet};
    border-radius: 5px;
    padding: 0.35rem 0.6rem;
    font-size: 0.85rem;
  }

  input:focus {
    outline: 1px solid ${({ theme }) => theme.colors.inputBorder};
  }
`
