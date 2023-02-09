import React from 'react';
import style from './MainWhatWeDo.module.scss';
import {Services} from './services/Services';



export const MainWhatWeDo = () => {
    return (
            <div className={style.mainWhatWeDoBlock}>
               <div className={style.nameWhatWeDoBlock}>What we do</div>
                <Services/>
            </div>

    );
}