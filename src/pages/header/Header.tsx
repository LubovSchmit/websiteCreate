import React from 'react';
import style from './Header.module.scss';


export const Header = () => {
    return (
        <div className={style.headerBlock}>
            <div className={style.slogan}> Pour vos soucis quotidiens</div>
            <div className={style.img}></div>
            <div className={style.info}>tel/email</div>
        </div>
    );
}


