import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Bio from './Components/Bio/Bio';

const App = () => {
  const { Name = 'Group' } = useParams();

  const [state, setState] = useState({
    darkMode: true,
    customCss: false,
    dropMenu: false,
  });

  const toggleDark = () => {
    const { darkMode } = state;
    setState({
      ...state,
      darkMode: !darkMode,
    });
  };

  const toggleCustom = () => {
    const { customCss } = state;
    setState({
      ...state,
      customCss: !customCss,
    });
  };

  const toggleDropMenu = () => {
    const { dropMenu } = state;
    setState({
      ...state,
      dropMenu: !dropMenu,
    });
  };

  const { darkMode } = state;
  const mode = darkMode ? 'Dark' : 'Light';
  return (
    <div className={'App' + ' ' + Name + ' ' + mode + ' ' + Name + mode}>
      <Nav
        toggleCustom={toggleCustom}
        toggleDark={toggleDark}
        toggleDropMenu={toggleDropMenu}
        state={state}
      />
      <Routes>
        <Route path="/*" element={<Bio />} state={state} />
      </Routes>
    </div>
  );
};

export default App;
