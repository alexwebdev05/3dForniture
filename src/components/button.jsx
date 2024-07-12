import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonContainer = styled.button`
    padding: 0.35rem 2.3rem;
    margin: 1rem 0.5rem;

    border: 2px solid var(--text-white);
    border-radius: 0.5rem;

    font-size: 0.9rem;
    color: var(--text-white);
    background-color: transparent;
    cursor: pointer;

    transition: border 0.3s ease, background-color 0.3s ease, color 0.3s ease;

    &:hover {
        border: 2px solid var(--primary-color);
        background-color: var(--primary-color);
    }

    @media (min-width: 2099px) {
        
    padding: 0.5rem 2.7rem;
    font-size: 1.3rem;

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

function Button({ children, onClick }) {
    return (
        <>
            <ButtonContainer onClick={onClick}>
                {children}
            </ButtonContainer>
        </>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
};

export default Button