import styled from 'styled-components';

const FooterContainer = styled.footer`
    width: 100vw;
    padding: 0.5rem 0;

    text-align: center;
    color: white;
    background: linear-gradient(45deg, var(--primary-color), var(--gradient));
    z-index: 99;

    a {
        text-decoration: none;
        color: rgb(0, 64, 182);
        cursor: pointer;
    }
`;

function Footer() {
    return (
        <>
            <FooterContainer>
                <p>This web is made all by me, and the code is in <a href="https://github.com/alexwebdev05" target='_blank'>my github.</a> The models are taken from blenderkit.</p>
            </FooterContainer>
        </>
    )
}

export default Footer