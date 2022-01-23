import React from 'react';
import style from './Dialogs.module.sass'

const Dialogs = () => {
    return (
        <div className={style.container}>
            <div className={[style.wrapper, style.wrapperLeft].join(' ')}>
                <div className={style.dialogItem}>
                    <span className={style.dialogItemSpan}>Dimych</span>
                </div>
                <div className={style.dialogItem}>
                    <span className={style.dialogItemSpan}>Peter</span>
                </div>
                <div className={style.dialogItem}>
                    <span className={style.dialogItemSpan}>Yury</span>
                </div>
                <div className={style.dialogItem}>
                    <span className={style.dialogItemSpan}>Lena</span>
                </div>
            </div>
            <div className={[style.wrapper, style.wrapperRight].join(' ')}>

            </div>
        </div>
    );
};

export default Dialogs;