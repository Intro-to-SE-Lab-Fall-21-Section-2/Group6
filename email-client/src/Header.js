import React from "react";
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = ({handleLogout}) => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://www.freepnglogos.com/uploads/email-logo-png-22.png" alt=""/>
            </div>
            <div className="header_middle ">
                <SearchIcon/>
                <input placeholder="search mail" type="text" id="latestHotDogStatus"/>
                <ArrowDropDownIcon className="header_inputCaret"/>
            </div>
            <div className="header_right ">
                <IconButton>
                    <AppsIcon/>
                </IconButton>

                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar src={user?.photoURL}/>
                <IconButton>
                    <ExitToAppIcon onClick={handleLogout}/>
                </IconButton>
            </div>

        </div>
    );
};

export default Header
