import styled from 'styled-components';
import PropTypes from 'prop-types';
import Three from '../pages/shop/three.js/three'

const CardContainer = styled.div`
    width: 10rem;
    height: 13rem;
    margin: 1rem 2rem; 

    border-radius: 1.5rem;

    display: flex;
    flex-direction: column;
    flex: 0 0 18%;

    background-color: var(--text-white);
    overflow: visible;

    div {
        display: flex;
        flex: 0.9;
        align-items: center;
        justify-content: center;

        border-radius: 1.3rem;
        background-color: var(--background);
    }

    p {
        display: flex;
        flex: 0.15;
        align-items: center;
        justify-content: center;

        font-weight: 700;
    }
`;

function Card({ modelPath }) {
    return (
        <>
            <CardContainer>
                <div><Three modelPath={modelPath}  /></div>
                <p>Nombre</p>
            </CardContainer>
        </>
    )
}

Card.propTypes = {
    modelPath: PropTypes.string
};

export default Card