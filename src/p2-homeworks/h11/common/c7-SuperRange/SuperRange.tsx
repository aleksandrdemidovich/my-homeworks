import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Slider} from "@mui/material";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange: (value: number) => void
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const handleChange = (event: Event, newValue: number | number[]) => {
            onChangeRange(newValue as number);
    };

    return (
        <>
            <Slider
                style={{width:'300px', marginLeft:'30px'}}
                size="small"
                value={restProps.value as number}
                step={1}
                onChange={handleChange}
            />
        </>
    )
}

export default SuperRange
