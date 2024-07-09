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