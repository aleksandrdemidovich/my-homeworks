import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from './HW10.module.css'

function HW10() {

    const dispatch = useDispatch()
    let loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 2000);
    };

    return (
        <div>
            <hr/>
            homeworks 10
            {loading
                ? (
                    <div className={s.loadingCircle}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            <hr/>
            <hr/>
        </div>
    )
}

export default HW10
