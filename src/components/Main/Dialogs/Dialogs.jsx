import React from 'react';
import style from './Dialogs.module.sass'

const Dialogs = () => {
    return (
        <div className={style.container}>
            <div className={[style.wrapper, style.wrapperLeft].join(' ')}>
                <div className={style.dialogs}>
                    <div className={style.dialogItem + ' ' + style.active}>
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
                    <div className={style.dialogItem}>
                        <span className={style.dialogItemSpan}>Lena</span>
                    </div>
                    <div className={style.dialogItem}>
                        <span className={style.dialogItemSpan}>Lena</span>
                    </div>
                    <div className={style.dialogItem}>
                        <span className={style.dialogItemSpan}>Lena</span>
                    </div>
                </div>
            </div>
            <div className={[style.wrapper, style.wrapperRight].join(' ')}>
                <div className={style.messages}>
                    <div className={style.message}>Hi!</div>
                    <div className={style.message}>Hi!</div>
                    <div className={style.message}>Hi!</div>
                    <div className={style.message}>H R U?</div>
                    <div className={style.message}>What You doing?</div>
                    <div className={style.message}>What You doing?</div>
                    <div className={style.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                        distinctio doloremque dolores quod soluta. Animi at beatae consectetur deserunt dolorum eius
                        enim error est, ex neque, numquam suscipit unde ut.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;