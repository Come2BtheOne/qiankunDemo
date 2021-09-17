import { Suspense } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Home from '@/pages/Home.jsx'

function App() {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/React" : "/"}>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
