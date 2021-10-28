import React, {ChangeEvent} from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: number[]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange(newValue as [number,number]);
    };

    return (
        <>
            <Slider
                size={"small"}
                step={1}
                style={{width: '300px', marginLeft: '30px'}}
                value={value}
                onChange={handleChange}

            />
        </>
    )
}

export default SuperDoubleRange
