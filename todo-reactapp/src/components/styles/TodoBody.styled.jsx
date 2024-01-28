import styled from 'styled-components';

export const BoxItem = styled.form`
  padding: 0.7rem 1.2rem;
  background-color: ${({ theme }) => theme.header_ItemBoxBG};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
`;

export const CreateItemInput = styled.input`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.itemTexts};
  width: 95%;
  padding: 0.3rem 0;
  font-weight: 600;
  font-family: 'Josefin Sans';
  font-size: 0.9rem;

  &:focus {
    outline: none;
  }
`;

export const AddButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  border-radius: 50px;
  color: ${({ theme }) => theme.blue};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
