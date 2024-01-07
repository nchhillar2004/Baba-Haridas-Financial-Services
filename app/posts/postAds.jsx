import React from "react";
import { Divider } from "@mui/material";
import {Icon} from "@mui/material";

export default function PostAds(props) {
    return (
        <div>
            <div className="ad pb-6 px-1">
                <div className="adtop flex items-center justify-between mb-2">
                    <div className="adleft">
                        <b>{props.heading}</b>
                    </div>
                    <a className="adright" href={props.href}>
                        <Icon>{props.icon}</Icon>
                        {props.link}
                    </a>
                </div>
                <div className="adbottom flex items-center justify-between">
                    <div className="adleft">
                        <img src={props.image} width={props.width} alt={props.heading} className="rounded-sm"/>
                    </div>
                    <div className="adright">
                        <p className="from-neutral-800">{props.right}</p>
                    </div>
                </div>
            </div>
            <Divider />
        </div>
    );
}
