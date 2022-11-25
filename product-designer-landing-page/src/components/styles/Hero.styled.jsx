import styled from "styled-components";

export const StyledHero = styled.div`
    position: relative;
    height: 50rem;
    width: 100%;
    background: ${({ theme }) => theme.backgroundColors.body};
    border-bottom: 1px solid #292929;

    @media (320px <= width <= 480px) {
        overflow-x: hidden;
    }
`

export const Navbar = styled.div`
    width: 100%;
    padding: 2rem 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.backgroundColors.navbarBorderBottom};
    
    @media (481px <= width <= 820px) {
        padding: 1rem 3rem;
    }

    @media (320px <= width <= 480px) {
        padding: 1rem 1.3rem;
    }
`

export const Logo = styled.img`
    width: 5rem;
`

export const NavLinks = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 3.7rem;

    @media (320px <= width <= 480px) {
        gap: 2rem;
    }
`

export const Link = styled.li`
    a {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.aboutTextColor};
        text-decoration: none;
        font-size: 1rem;
    }
`

export const Button = styled.button`
    background-color: ${({ theme }) => theme.backgroundColors.buttonbg};
    color: ${({ theme }) => theme.colors.buttonTextColor};
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 1rem;
    font-family: 'Roboto Condensed', sans-serif;

    @media (320px <= width <= 480px) {
        display: none;
    }
`

export const SwitchMode = styled.div`
    position: fixed;
    top: 2.5rem;
    right: 15rem;
    z-index: 9999;
    cursor: pointer;
    
    @media (481px <= width <= 820px) {
        top: 1.5rem;
        right: 11rem;
    }

    @media (320px <= width <= 480px) {
        position: absolute;
        top: 5rem;
        right: 1rem;
    }
`

export const Heading = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10rem;
    color: ${({ theme }) => theme.colors.heroTextColor};
    line-height: 100%;
    text-align: center;
    max-width: 45rem;
    
    @media (481px <= width <= 820px) {
        max-width: 35rem;
        font-size: 6rem;
    }

    @media (320px <= width <= 480px) {
        max-width: 25rem;
        font-size: 5.5rem;
    }
`

export const ImageRight = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 40rem;
    width: 30rem;
    z-index: 999;

    @media (481px <= width <= 820px) {
        width: 15rem;
        height: 40rem;
    }

    @media (320px <= width <= 480px) {
        display: none;
    }
`

export const ImageLeft = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 40rem;
    width: 30rem;
    z-index: 999;

    @media (481px <= width <= 820px) {
        width: 15rem;
        height: 40rem;
    }

    @media (320px <= width <= 480px) {
        display: none;
    }
`

export const ElipseLeft = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 37rem;
    width: 19rem;

    @media (481px <= width <= 820px) {
        width: 10rem;
    }

    @media (320px <= width <= 480px) {
        width: 8rem;
        height: 20rem;
    }
`

export const ElipseRight = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 37rem;
    width: 19rem;

    @media (481px <= width <= 820px) {
        width: 10rem;
    }

    @media (320px <= width <= 480px) {
        top: 4.5rem;
        width: 8rem;
        height: 15rem;
    }
`

export const ArrowDown = styled.img`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 1.2rem;
    width: 5rem;

    @media (481px <= width <= 820px) {
        transform: translate(-50%);
    }

    @media (320px <= width <= 480px) {
        transform: translate(-50%);
    }
`