import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)

    return (
        <div>
            <hr/>
            homeworks 11
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <span style={{position: 'absolute'}}>{value1}</span>
                <SuperRange onChangeRange={setValue1}
                            value={value1}
                />
            </div>

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <span style={{position: 'absolute'}}>{value1}</span>
                <SuperDoubleRange value={[value1, value2]}
                                  onChangeRange={(value) => {
                                      setValue1(value[0]);
                                      setValue2(value[1])
                                  }}/>
                <span style={{paddingLeft: '10px'}}>{value2}</span>
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
