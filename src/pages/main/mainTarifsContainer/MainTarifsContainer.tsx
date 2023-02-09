import React from 'react';
import style from './MainTarifsContainer.module.scss';
import {Tarifs} from './tarifs/Tarifs';



export const MainTarifsContainer = () => {
    return (
            <div className={style.mainTarifsBlock}>
                <div className={style.nameTarifsBlock}>Tarifs</div>
                <Tarifs/>
            </div>
    );
}