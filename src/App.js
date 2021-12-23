/* eslint-disable */
import './App.css';
import { Route,Link,Switch } from 'react-router-dom';
import { useState } from 'react';
import Header from './component/Header';
import Main from './pages/Main';
import Menu from './component/Menu'
import Map from './component/Map';

function App() {
  const [스위치,set스위치] = useState(false);

  const [css1,setCss1] = useState("menu_wrap_active");
  const [css2,setCss2] = useState("menu_fact_close");
  const onToggle = () => {
    set스위치(!스위치)
  } 



  return (
    <>
      <Header 스위치={스위치} set스위치={set스위치} onToggle={onToggle} css1={css1} setCss2={setCss2} css2={css2} setCss1={setCss1}/>
      <Menu 스위치={스위치} set스위치={set스위치} onToggle={onToggle} css1={css1} setCss2={setCss2} css2={css2} setCss1={setCss1}/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/map" component={Map} />
      </Switch>
    </>
  );
}

export default App;
