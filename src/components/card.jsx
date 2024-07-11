import styled from 'styled-components';
import PropTypes from 'prop-types';
import Three from '../pages/exhibitor/three.js/three'

import { fornitures } from '../fornitures/fornitures'

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
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.5));
    cursor: pointer;

    transition: filter 0.4s ease;

    &:hover {
        filter: drop-shadow(0px 4px 10px rgba(255, 255, 255, 0.1));
    }

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

function Card({ modelNumber, onClick }) {

    const keys = Object.keys(fornitures);
    
    return (
        <>
            <CardContainer onClick={ onClick }>
                <div><Three modelPath={fornitures[keys[modelNumber]].path} /></div>
                <p>{fornitures[keys[modelNumber]].name}</p>
            </CardContainer>
        </>
    )
}

Card.propTypes = {
    modelNumber: PropTypes.number,
    onClick: PropTypes.func
};

export default Card