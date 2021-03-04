import logo from './logo.svg';
import './App.css';
import Todo from './pages/Todo.js';
import MaterialTest from './pages/MaterialTest';
import AnimationTest from './pages/AnimationTest';
import Carousel from './component/Carousel';
import RouteTest from './component/route-test';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PathTest from './component/path-test';
import VideoStudy from './pages/video-study/video-study';
import SagaTest from './pages/sagaTest';
import BasketBall from './pages/basketball';
import HtmlTest from './pages/htmlTest';

function App() {
  // console.log('??');

  // console.log(process.env);
  return (
    <Router>
      <Switch>
        {/* <Todo /> */}
        {/* <hr /> */}
        {/* <MaterialTest /> */}
        {/* <hr /> */}
        <Route path='/' component={AnimationTest} />
        {/* <Carousel /> */}
        <Route path='/video-study' component={VideoStudy} />
        <Route path='/saga' component={SagaTest} />
        <Route path='/path' component={PathTest} />
        {/* <Route path='/' component={BasketBall} /> */}
        {/* <Route path='/' component={HtmlTest} /> */}
      </Switch>
    </Router>
  );
}

export default App;
