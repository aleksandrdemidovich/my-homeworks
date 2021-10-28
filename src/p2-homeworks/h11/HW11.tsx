import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value, setValue] = React.useState<number[]>([0, 100]);

    return (
        <div>
            <hr/>
            homeworks 11
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <span style={{position:'absolute'}}>{value1}</span>
                <SuperRange onChangeRange={setValue1}
                            value={value1}
                />
            </div>

            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <span style={{position:'absolute'}}>{value[0]}</span>
                <SuperDoubleRange value={value}
                                  onChangeRange={(value) => {setValue(value)}}
                />
                <span style={{paddingLeft:'10px'}}>{value[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
