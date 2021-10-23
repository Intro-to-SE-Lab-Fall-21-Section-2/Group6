import React, {useEffect, useState} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import './EmailList.css'
import EmailRow from "./EmailRow";

import {db} from './Firebase';

function EmailList()
{
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setEmails(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(),
                    }))));
    }, []);

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>

                    <IconButton>
                        <RedoIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>

                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="emailList__list">
                {emails.map(({id, data: {to, subject, message, file, timestamp}}) =>
                    (<EmailRow

                            id={id}
                            key={id}
                            title={to}
                            subject={subject}
                            description={message}
                            file={file}
                            time={new Date(timestamp?.seconds * 1000).toUTCString()}
                        />
                    ))}

            </div>
        </div>
    )
}

export default EmailList;