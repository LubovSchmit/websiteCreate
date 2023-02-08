import React from 'react';
import style from './Main.module.scss';
import {MainInfoHours} from './mainInfoHours/MainInfoHours';
import {MainWhatWeDo} from './mainWhatWeDo/MainWhatWeDo';
import {MainTarifsContainer} from './mainTarifsContainer/MainTarifsContainer';


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <MainInfoHours/>
            <MainWhatWeDo/>
            <MainTarifsContainer/>
        </div>


    );
}