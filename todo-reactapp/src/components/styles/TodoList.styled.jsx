import styled from 'styled-components';

export const Todos = styled.section`
  margin-top: 1.3rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.header_ItemBoxBG};
  box-shadow: 2px 7px 12px rgba(0, 0, 0, 0.15),
    -2px 7px 12px rgba(0, 0, 0, 0.15);
`;

export const TodoItems = styled.div`
  padding: 1rem 1.2rem;
  background-color: ${({ theme }) => theme.header_ItemBoxBG};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px 6px 0 0;
  border-bottom: 1px solid
    ${({ theme }) => theme.checkerBorder_ItemBottomBorder};
`;

export const CheckItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;

  & .unChecked {
    color: ${({ theme }) => theme.checkerBorder_ItemBottomBorder};
    font-size: 22px;
  }

  & .checked {
    color: hsl(220, 98%, 61%);
    font-size: 22px;
  }
`;

export const Item = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.itemTexts};
`;

export const ItemCompleted = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.itemCompleted};
  text-decoration: line-through;
  text-decoration-color: ${({ theme }) => theme.itemCompleted};
`;

export const ItemsLeft = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.itemCompleted};
`;

export const ClearCompleted = styled.button`
  font-weight: 500;
  font-size: 0.9rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.itemCompleted};
  font-family: 'Josefin Sans', 'Poppins', sans-serif;
  cursor: pointer;
`;

export const TodoItemsFooter = styled.div`
  padding: 1rem 1.2rem;
  background-color: ${({ theme }) => theme.header_ItemBoxBG};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  border-bottom: 1px solid
    ${({ theme }) => theme.checkerBorder_ItemBottomBorder};
`;
export const EditDeleteIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & .close {
    font-size: 0.9rem;
    color: #d00000;
    cursor: pointer;
  }

  & .edit {
    color: green;
    font-size: 0.9rem;
    cursor: pointer;
  }
`;
