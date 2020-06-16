import React from 'react'
import './form-input.styles.scss'

const FormInput=({handleChange,label,...otherFormComponents})=>{
    return(
        <div className="group">
            <input className='form-input' onChange={handleChange}{...otherFormComponents} />
            {
                label?(
                    <label className={`${otherFormComponents.value.length?'shrink':''}form-input-label`}>
                      {otherFormComponents.value?null:label}
                    </label>
                ):null}
        </div>
    )
}

export default FormInput