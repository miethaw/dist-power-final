import React from 'react';
import { Link } from 'react-router-dom';
import { history } from '../../../_redux/_helpers';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { headerActions, userActions } from '../../../_redux/_actions';
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import { fromUnixTime, getUnixTime } from "date-fns";
import moment from 'moment';

import DateTime from './headerComponents/DataTime';
import TimePeriod from './headerComponents/Period';
import MyFont from '../../../config/fonts';
import colors from '../../../config/colors';


const UserDropDownHeader = props =>{
    const { userData }= props
    const dispatch = useDispatch();
    const logout = () => {
        let confirmLogout = window.confirm("Are you sure you want to logout ?");
        if (confirmLogout) {
            dispatch(userActions.logout());
            window.location.pathname = '/login';
            history.push('/login')
        }
    }

    return(
        <div className='d-flex justify-content-between  flex-wrap'>
            <div className='d-flex justify-content-between flex-wrap' style={{ fontSize : MyFont.smaller }}>
                <div className='d-flex flex-column  text-light py-1 px-3 mx-1 my-1' style={{ border :`1px solid ${colors.deepBlue}`, borderRadius : 15 }}>
                    <DateTime portlet="header" /> Period <TimePeriod />
                </div>
                <div className='d-flex flex-column  text-light py-1 px-3 mx-1 my-1' style={{ border :`1px solid ${colors.deepBlue}`, borderRadius : 15 }}>
                ContRes S$6.00/MWh
                </div>
                <div className='d-flex flex-column  text-light py-1 px-3 mx-1 my-1' style={{ border :`1px solid ${colors.deepBlue}`, borderRadius : 15 }}>
                P. Capacity 1.8 MW
                </div>
            </div>
            
            <div className="col-sm-12 col-md-3 dropdown pt-1">
                <div className="dropdown-toggle text-light text-center" data-toggle="dropdown" style={{ fontSize : MyFont.small }}>
                {userData ? userData.data.email : "admin@gmail.com"}
                </div>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item py-2" to="/user-list" onClick={() => history.push('/user-list')}>
                            USER LIST
                        </Link>
                    </li>
                    {/* <li>{this.userListPage()}</li> */}
                    <li>
                        <Link className='dropdown-item py-2' onClick={logout}>
                            <span class="glyphicon glyphicon-log-in" /> LOGOUT
                         </Link>
                    </li>
                </ul>
                </div>
        </div>
    )
}
export default (UserDropDownHeader)
