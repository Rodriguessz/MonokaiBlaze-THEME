// Importações básicas do React
import React, { useState, useEffect, useContext, useRef, useReducer, createContext, memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Criando um contexto
const AppContext = createContext();

// Componente de estilo utilizando styled-components
const StyledButton = styled.button`
  background-color: ${({ primary }) => (primary ? 'blue' : 'gray')};
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }
`;

// Reducer para controle de estado com useReducer
const initialState = { count: 0 };
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Componente Memoizado
const MemoizedChild = memo(({ text }) => {
  useEffect(() => {
    console.log('MemoizedChild renderizou');
  }, [text]);

  return <div>Texto Memoizado: {text}</div>;
});

MemoizedChild.propTypes = {
  text: PropTypes.string.isRequired,
};

// Componente Principal
const App = () => {
  // useState para controlar o estado
  const [inputValue, setInputValue] = useState('');
  const [toggle, setToggle] = useState(false);

  // useReducer para lógica mais complexa de estado
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // useContext para consumir valores globais
  const { appTitle } = useContext(AppContext);

  // useRef para acessar elementos diretamente
  const inputRef = useRef(null);

  // useEffect para efeito colateral
  useEffect(() => {
    document.title = `Contagem: ${state.count}`;
  }, [state.count]);

  // Manipulação de eventos
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h1>{appTitle}</h1>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>

      <StyledButton primary={toggle} onClick={handleButtonClick}>
        {toggle ? 'Ativado' : 'Desativado'}
      </StyledButton>

      <div>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite algo"
        />
        <MemoizedChild text={inputValue} />
      </div>
    </div>
  );
};

// Provedor de contexto global
const AppProvider = ({ children }) => {
  const appTitle = 'Meu App React Completo';

  return <AppContext.Provider value={{ appTitle }}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Renderizando o aplicativo
const Root = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default Root;
