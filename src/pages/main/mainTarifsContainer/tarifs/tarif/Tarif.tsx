import React from 'react';
import style from './Tarif.module.scss';

export type PropsType={
    tarifDescription: string,
    price: string | null,

}

export const Tarif = (props: PropsType) => {
    return (
        <div className={style.tarifBlock}>
            <div className={style.img}></div>
            <div className={style.tarifDescription}>{props.tarifDescription}</div>
            <div className={style.price}>{props.price}</div>
        </div>
    );
}