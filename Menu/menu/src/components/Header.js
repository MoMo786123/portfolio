import keyConceptsImage from '../assets/images/key-concepts.png';
import React from 'react';

function Header() {
    return (
        <header>
            <img src={keyConceptsImage} alt="Medal badge with star" />
            <h1>Key React Concepts</h1>
            <p>Selected key React concepts you should know about </p>
        </header>
  );
}

export default Header;