import React, { useEffect } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import DateTime from './headerComponents/DataTime';
import TimePeriod from './headerComponents/Period';
import { useDispatch, useSelector } from 'react-redux';

import { headerActions, userActions } from '../../../_redux/_actions';
import { history } from '../../../_redux/_helpers';

import { useLocation } from "react-router-dom";

import SunseapLogo from '../../../assets/img/sunseap.jpg'


const Header = () => {
    const location = useLocation();

     const dispatch = useDispatch();
    const renderSwitch = () => {
        switch (location.pathname) {
            case '/':
                return 'OVERVIEW';
            case '/market-bidding':
                return 'MARKET BIDDING';
            case '/site-control':
                return 'SITE CONTROL';
            case '/activation-report':
                return 'ACTIVATION & REPORT';
            case '/user-list':
                return 'USER LIST';
            default:
                return 'OVERVIEW';
        }
    }


    useEffect(() => {
        dispatch(headerActions.getContRes());
        dispatch(headerActions.getPCapacity());
    }, []);

    const headerData = useSelector(state => state.header)

    let currentLocation= location.pathname

    return (
        // <header>
            <nav className="navbar navbar-expand-lg p-0 navbar-light w-100 justify-content-between">
                <div className='d-flex '>
                    <img src={SunseapLogo} alt="sunseap" style={{ height : 38 }} ></img>
                    <a className="navbar-brand align-self-center pl-3 text-secondary" href="#" >DistPower</a>
                </div>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse p-0 m-0 justify-content-end " id="navbarSupportedContent" style={{  }}>
                    <div className='d-flex flex-wrap'>
                    <div className='' style={{ maxWidth:250,  marginTop: 0}}>
                        <Link className="dropdown-item m-0 " to="/overview" style={{ borderTop: currentLocation.includes("/overview") && '4px solid #151F4B',background :currentLocation.includes("/overview") && '##DCDCDC', paddingTop: 12, paddingBottom: 12}}>
                            Overview
                        </Link>
                    </div>
                    <div className='' style={{ maxWidth:250,  marginTop: 0}}>
                        <Link className="dropdown-item m-0 " to="/market-bidding" style={{ borderTop: currentLocation.includes("/market-bidding") && '4px solid #151F4B',background :currentLocation.includes("/market-bidding") && '##F8F9FA', paddingTop: 12, paddingBottom: 12}} >
                            Market Bidding
                        </Link>
                        
                    </div>
                    <div className='' style={{ maxWidth:250,  marginTop: 0}}>
                        <Link className="dropdown-item m-0 " to="/site-control" style={{ borderTop: currentLocation.includes("/site-control") && '4px solid #151F4B',background :currentLocation.includes("/site-control") && '##F8F9FA', paddingTop: 12, paddingBottom: 12}}>
                            Site Control
                        </Link>
                    </div>
                    <div className='' style={{maxWidth:250,  marginTop: 0}}>
                        <Link className="dropdown-item m-0 " to="/activation-report" style={{ borderTop: currentLocation.includes("/activation-report") && '4px solid #151F4B',background :currentLocation.includes("/activation-report") && '##F8F9FA', paddingTop: 12, paddingBottom: 12}}>
                            Activation & Report
                        </Link>
                    </div>
                    </div>
                    
                
                </div>
                </nav>
        //</header>

    )
}

export { Header }


