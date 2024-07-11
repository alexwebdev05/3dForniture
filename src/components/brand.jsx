import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BrandContainer = styled.div`
    display: flex;
    align-items: center;

    background-color: #433F3C;
    z-index: 99;
    cursor: pointer;

    img {
        margin: 0.5rem 1rem;

        width: 1.5rem;
    }
`;

function Brand() {
    const navigate = useNavigate();

    const home = () => {
        navigate('/');
      };

    return (
        <>
            <BrandContainer onClick={ home }>
                <img src="/public/vite.svg" alt="Logo" />
                <span className='white'>3dForniture</span>
            </BrandContainer>
        </>
    )
}

export default Brand