"use client";
import React, { useState, useEffect } from "react";
import NewReleasesRoundedIcon from "@mui/icons-material/NewReleasesRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton } from "@mui/material";

export default function Notification(props) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const notificationState = localStorage.getItem('notificationVisibility');
        if (notificationState === 'hidden') {
          setIsVisible(false);
        }
      }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('notificationVisibility', 'hidden');
    };
    return (
        <>
            {isVisible && (
                <div className="new-update w-full py-2 relative z-10 rounded-sm">
                    <div className="notification-container flex items-center justify-between w-11/12 m-auto h-fit text-white">
                        <NewReleasesRoundedIcon color="primary" />
                        <div className="left-notification w-11/12 overflow-hidden ml-1">
                            <p>{props.title}</p>
                            <div className="thin-text">
                                <ul className="h-fit">
                                    <li>{props.point1}</li>
                                    <li>{props.point2}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-notification">
                            <IconButton onClick={handleClose}>
                                <CloseRoundedIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
