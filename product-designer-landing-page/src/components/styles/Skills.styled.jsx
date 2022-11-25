import styled from "styled-components"

export const SkillsContainer = styled.div`
    padding: 6rem 6rem 20rem;
    background-color: ${({ theme }) => theme.backgroundColors.body};
    text-align: center;

    @media (481px <= width <= 820px) {
        padding: 6rem 3rem 10rem;
    }
`

export const Boxes = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    margin-top: 5rem;

    @media (481px <= width <= 820px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const Box = styled.div`
    width: 100%;
    height: 13rem;
    background-color: ${({ theme }) => theme.backgroundColors.skillsBox};
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.3rem;

    @media (481px <= width <= 820px) {
        padding: 3rem;
    }

    p {
        font-size: 2rem;
        background: ${({ theme }) => theme.backgroundColors.skillsPercentage};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    h1 {
        font-size: 3rem;
        line-height: 100%;
        color: white;
    }
`