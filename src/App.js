import React, { useEffect } from 'react';
import { history } from './_redux/_helpers';
import { alertActions } from './_redux/_actions';
// import RouteList from './route/RouteList';
import { useDispatch, useSelector } from 'react-redux';

import Login from './pages/login'
import { 
    // Router, 
    Route, 
    Switch, 
    Redirect, 
    // useLocation, 
    withRouter 
} from 'react-router-dom';
import routes from './route/RouteList'

import { Header } from './pages/constants/components/Header';
import UserDropDown from './pages/constants/components/userDropDown';

function App() {
    const alert = useSelector(state => state.alert); 
    const dispatch = useDispatch();
    //dist power
    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);
    return (
      
        <div className=" m-0">
            {history.location.pathname !== "/" && localStorage.getItem("loginData") && < Header />}
            <div>
            {history.location.pathname !== "/" && localStorage.getItem("loginData") && <div className='w-100 py-2' style={{backgroundColor:'#192353'}}><UserDropDown userData={JSON.parse(localStorage.getItem("loginData"))} /> </div>}

            < Switch >
                {" "}
                < Route exact path="/" component={Login} />
                {
                    localStorage.getItem("loginData")
                        ? (
                            Object.keys(routes.routes).map((v, k) => (
                                <Route
                                    key={k}
                                    path={`/${v}`}
                                    component={routes.routes[v].component}
                                />
                            ))
                        ) : (
                            <Redirect to={routes.default} />
                        )
                }
                {/* <Route
            path="*"
            component={() => <ErrorPage ErrorInfo={"Page Not Found!"} />}
        /> */}
            </Switch >
            </div>
            
        </div>
    );
}

export default withRouter(App);
