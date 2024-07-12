import styled from 'styled-components';

const FooterContainer = styled.footer`
    width: 100vw;
    padding: 0.5rem 0;

    text-align: center;
    color: white;
    background: linear-gradient(45deg, var(--primary-color), var(--gradient));
    z-index: 99;

    p {
        margin: 0 2rem;
    }

    a {
        text-decoration: none;
        color: rgb(0, 0, 0);
        cursor: pointer;
        font-weight:700;
    }

    
    @media (min-width: 2099px) {
        font-size: 1.2rem;

        padding: 1rem 0;
    }
`;

function Footer() {
    return (
        <>
            <FooterContainer>
                <p>This web is made all by me, and the code is in <a href="https://github.com/alexwebdev05" target='_blank'>my GitHub.</a> The models are taken from <a href="https://www.blenderkit.com/" target='_blank'>BlenderKit.</a></p>
            </FooterContainer>
        </>
    )
}

export default Footer