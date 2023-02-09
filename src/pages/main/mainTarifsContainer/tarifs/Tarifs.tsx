import React from 'react';
import style from './Tarifs.module.scss';
import {Tarif} from './tarif/Tarif';



export const Tarifs = () => {
    return (
        <div className={style.tarifsBlock}>

            <Tarif tarifDescription={'Sur devis à la tache selon le travail à effectuer'} price={null}/>
            <Tarif tarifDescription={'Une base tarifaire simple'} price={'19,90 eur/heure'}/>

        </div>
    );
}