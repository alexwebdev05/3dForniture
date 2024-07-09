import styled from 'styled-components';

const BrandContainer = styled.div`
    display: flex;
    align-items: center;

    background-color: #433F3C;
    z-index: 99;

    img {
        margin: 0.5rem 1rem;

        width: 1.5rem;
    }
`;

function Brand() {
    return (
        <>
            <BrandContainer>
                <img src="/public/vite.svg" alt="Logo" />
                <span className='white'>3dForniture</span>
            </BrandContainer>
        </>
    )
}

export default Brand