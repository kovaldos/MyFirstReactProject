import React from 'react';
import style from './Dialogs.module.sass'
import { NavLink } from "react-router-dom";

const setActiveLink = ({ isActive }) => isActive ? `${style.dialogItem + ' ' + style.active}` : style.dialogItem;

const DialogItem = (props) => {
    let path = "dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path} className={setActiveLink}>
                <span className={style.dialogItemSpan}>{props.name}</span>
            </NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {
    return (
        <div className={style.container}>
            <div className={[style.wrapper, style.wrapperLeft].join(' ')}>
                <div className={style.dialogs}>
                    <DialogItem name="Dimych" id="1"></DialogItem>
                    <DialogItem name="Peter" id="2"></DialogItem>
                    <DialogItem name="Yury" id="3"></DialogItem>
                    <DialogItem name="Lena" id="4"></DialogItem>
                    <DialogItem name="Alesya" id="5"></DialogItem>
                    <DialogItem name="Nastya" id="6"></DialogItem>
                </div>
            </div>
            <div className={[style.wrapper, style.wrapperRight].join(' ')}>
                <div className={style.messages}>
                    <Message message="Hi!"></Message>
                    <Message message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quia maxime molestias dicta id, a fugit voluptas, molestiae tempora at sunt dolor delectus odit dignissimos. Modi inventore consequuntur quae aliquid."></Message>
                    <Message message="Hi!!!"></Message>
                    <Message message="How R U?"></Message>
                    <Message message="What You doing?"></Message>
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                        distinctio doloremque dolores quod soluta. Animi at beatae consectetur deserunt dolorum eius
                        enim error est, ex neque, numquam suscipit unde ut.">
                    </Message>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;