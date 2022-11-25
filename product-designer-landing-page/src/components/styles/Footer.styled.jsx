import styled from "styled-components"

export const FooterContainer = styled.div`
    padding: 2rem 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColors.footer};

    @media (320px <= width <= 480px) {
        padding: 1rem 1.3rem;
    }
`

export const Socials = styled.div`
    display: flex;
    gap: 2.5rem;

    img {
        width: 1.8rem;
        cursor: pointer;
    }

    @media (320px <= width <= 480px) {
        gap: 1.2rem;
    }
`