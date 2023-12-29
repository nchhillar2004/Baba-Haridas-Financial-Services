import React from 'react'
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded';
import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton } from '@mui/material';
export default function Notification() {
  return (
    <div className="new-update w-full py-2 relative z-10 rounded-sm">
        <div className="notification-container flex items-center justify-between w-11/12 m-auto h-fit text-white">
                <NewReleasesRoundedIcon color='primary'/>
            <div className="left-notification w-11/12 overflow-hidden ml-1">
            <p>V-1.0.0 : About this version</p>
            <div className="thin-text">
                <ul>
                    <li>This website is under development</li>
                    <li>This is sample notification</li>
                </ul>
            </div>
            </div>
            <div className="right-notification">
                <IconButton>
                    <CloseRoundedIcon/>
                </IconButton>
            </div>
        </div>
    </div>
  )
}
