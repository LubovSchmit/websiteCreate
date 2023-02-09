import React from 'react';
import style from './Service.module.scss';



export type PropsType= {
    serviceName: string,
    serviceDescription: string
}

export const Service = (props: PropsType) => {
    return (
        <div className={style.serviceBlock}>
            <div className={style.img}></div>
            <div className={style.serviceName}>{props.serviceName}</div>
            <div className={style.serviceDescription}>{props.serviceDescription}</div>

        </div>
    );
}