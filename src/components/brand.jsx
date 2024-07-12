import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BrandContainer = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    font-weight: 700;

    background-color: #433F3C;
    z-index: 99;
    cursor: pointer;

    img {
        margin: 0.5rem 1rem;

        width: 1.5rem;
    }

        
    @media (min-width: 2099px) {
        font-size: 2rem;

        img {
            margin: 1rem 1rem 1rem 2rem;

            width: 2.2rem;
        }

    }

    @media (min-width: 1200px) and (max-width: 2099px) {

    }

    @media (max-width: 992px) {

    }

    @media (max-width: 768px) {

    }

    @media (max-width: 576px) {

    }

    @media (max-width: 360px) {

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