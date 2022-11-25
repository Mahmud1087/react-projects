import styled from "styled-components"

export const FlexRow = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: center;
    gap: 15rem;

    @media (481px <= width <= 820px) {
        display: flex;
        flex-direction: column;
        row-gap: 5rem;
    }
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10rem;
`