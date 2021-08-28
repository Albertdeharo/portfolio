import { useState } from "react";
import { Span } from './headerStyle'
import { Container, Container2 } from './../../styles/GlobalComponents'

const Header = () => (
    // const [HeaderState, setHeaderSTate] = useState([]);
    <header className="App-header">
        <Container>
          <span>PORTFOLIO WITH REACT</span>
          <Span>PORTFOLIO</Span>
          <Container2>
              123
          </Container2>
        </Container>
    </header>
);

export default Header;