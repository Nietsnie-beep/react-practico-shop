
import '../styles/global.scss'

import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";
import Hola from '../components/Hola';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

function App() {
  const initialState = useInitialState();
  return (
      <AppContext.Provider value={initialState}>
      <BrowserRouter>
    <Layout >
    <Switch>
    <Route exact path ='/' component={Home} /> 
      <Route exact path ='/login' component={Login} /> 
      <Route exact path ='/recovery-password' component={RecoveryPassword} /> 
      <Route path="*" component={NotFound} />
    </Switch>
        </Layout>
    </BrowserRouter>
      </AppContext.Provider>
    
  )
}

export default App
