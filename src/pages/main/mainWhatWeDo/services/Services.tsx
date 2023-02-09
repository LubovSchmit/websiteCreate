import React from 'react';
import style from './Services.module.scss';
import {Service} from './service/Service';



export const Services = () => {
    return (
        <div className={style.servicesBlock}>

            <Service serviceName={'Bricolage'} serviceDescription={'Spécialiste de la réparation d’équipement, DOMA vous accompagne pour vos soucis quotidiens'}/>
            <Service serviceName={'Jardin'} serviceDescription={'Vos équipements extérieurs sont aussi notre terrain de jeu'}/>
            <Service serviceName={'Instruments'} serviceDescription={'Les équipements de la maison - on s en occupe aussi!'}/>

        </div>

    )
}