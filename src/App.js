import './App.css';
import { routes } from "./routes/routes";
// import { theme } from './styling/GlobalStyles'
// import {SharedLayout} from '../src/components/SharedLayout/SharedLayout'
// import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SharedLayout } from '../src/components/SharedLayout/SharedLayout';


function App() {
  return (
    <>
        {/* <Router>
          <Routes>
          <Route path='/'>
          <>
            {routes.map((route, index) => {
              return <Route path={route.path} element={<route.Component />} key={index} />
            })}
          </>
        </Route>
          </Routes>
        </Router> */}
        <>
      {/* <ThemeProvider > */}
      <Router>
          <Routes>
            <Route path='/' element={<SharedLayout />}>
              {routes.map((route, index) => {
                return (
                  <Route
                    index={route.name === 'Home'}
                    path={route.name === 'Home' ? null : route.path}
                    element={<route.Component />}
                    key={index}
                  />
                );
              })}
            </Route>
          </Routes>
        </Router>
      {/* </ThemeProvider> */}
    </>
    </>
  );
}

export default App;
