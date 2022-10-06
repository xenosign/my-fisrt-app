import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
import ClassState from './components/ClassState';
import FunctionalState from './components/FuntionalState';
import StatePractice from './components/StatePractice';
import Counter from './components/Counter';
import MainHeader from './components/MainHeader';
import CustomList from './components/CustomList';
import CustomObj from './components/CustomObj';
import ChangeObj from './components/ChangeObj';
import TestCss from './components/TestCss';
import TestStyled from './components/TestStyled';
import Logo from './components/Logo';
import { useEffect, useRef, useState } from 'react';
import ConditionalRender from './components/ConditionalRender';
import PracticeOne from './components/PracticeOne';
import PracticeTwo from './components/PracticeTwo';
import TestRef from './components/TestRef';
import ChangeFocus from './components/ChangeFocus';
import ReactFragment from './components/ReactFragment';
import TableColumn from './components/TableColumn';
import Comparing from './components/Comparing';
import TestUseEffect from './components/TestUseEffect';
import Timer from './components/Timer';
import PracticeTimer from './components/PracticeTimer';
import TestUseMemo from './components/TestUseMemo';
import UsingUseMemo from './components/UsingUseMemo';
import Where from './components/Where';
import Image from './components/Image';
import Dialog from './components/Dialog';
import WelcomeDialog from './components/WelcomeDialog';
import WelcomeDialogBtn from './components/WelcomeDialogBtn';
import FancyBorder from './components/FancyBorder';
import SignUpDialog from './components/SignUpDialog';
import Profile from './components/Profile';
import Board from './components/Board';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
