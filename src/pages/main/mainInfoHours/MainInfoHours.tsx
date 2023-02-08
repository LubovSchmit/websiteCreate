import React from 'react';
import style from './MainInfoHours.module.scss';
import {AboutUs} from './aboutUs/AboutUs';
import {WorkHours} from './workHours/WorkHours';



export const MainInfoHours = () => {
    return (
        <div className={style.mainInfoHoursBlock}>
            <AboutUs/>
            <WorkHours/>
        </div>
    );
}