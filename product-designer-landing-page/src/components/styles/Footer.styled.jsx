import styled from "styled-components"

export const FooterContainer = styled.div`
    padding: 2rem 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColors.footer};
`

export const Socials = styled.div`
    display: flex;
    gap: 2.5rem;

    img {
        width: 1.8rem;
        cursor: pointer;
    }
`