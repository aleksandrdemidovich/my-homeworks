import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeStateType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {


    const dispatch = useDispatch()
    let theme = useSelector<AppStoreType, ThemeStateType>(state => state.theme)

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeC(e.currentTarget.value))
    }

    // useDispatch, onChangeCallback

    return (
        //todo
        <div className={s[theme.theme]}>
            <hr/>
            <span className={s[theme.theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect options={themes}
                         value={theme.theme}
                         onChange={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
