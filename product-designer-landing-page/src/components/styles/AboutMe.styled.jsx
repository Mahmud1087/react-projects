import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    padding: 4rem 6rem;
    background: ${({ theme }) => theme.backgroundColors.body};
    border-bottom: 1px solid #292929;

    @media (481px <= width <= 820px) {
        padding: 8rem 3rem;
    }

    @media (320px <= width <= 480px) {
        padding: 4rem 1.3rem;
    }
`

export const AboutTexts = styled.div`
    width: 44rem;

    @media (320px <= width <= 480px) {
        width: 100%;
    }
`

export const StyledHeading = styled.h1`
    font-size: 4rem;
    line-height: 100%;
    color: ${({ theme }) => theme.colors.aboutTextColor};

    @media (320px <= width <= 480px) {
        font-size: 3rem;
    }
`

export const HorizontalLine = styled.hr`
    width: 4.3rem;
    height: 1.5rem;
    border: none;
    background-color: #A87FF3;
    margin: 0.5rem 0 3rem;

    @media (320px <= width <= 480px) {
        width: 3rem;
    }
`

export const AboutParagraph = styled.p`
    font-family: 'Roboto Condensed', monospace;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.colors.aboutTextColor};

    @media (320px <= width <= 480px) {
        font-size: 0.7rem;
    }
`

export const AboutImage = styled.div`
    width: 34rem;

    @media (320px <= width <= 480px) {
        display: none;
    }
`

export const Image = styled.img`
    width: 100%; 
`