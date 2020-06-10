import React from 'react';
import './CustomTags.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

    export const Select = ({input, meta, ...props}) => {
        const isCorrect = meta.touched && meta.error;

        let renderSelectOptions = (unit) => (
             <option key={unit} value={unit.id}>{unit.nameEng}({unit.abbreviation})</option>
          )
        return(
            <div className = {isCorrect ? 'error' : 'valid'}>
                <select {...input}>
                    <option disabled selected hidden value="">{props.placeholder === 'undefined' ? Select : props.placeholder}</option>
                    {props.enum.map(renderSelectOptions)}
                </select>
                {isCorrect && <span>{meta.error}</span>}
            </div>
        )
    }

    export const TextArea = ({input, meta, ...props}) => {
        const isCorrect = meta.touched && meta.error;
        return(
            <div className = {isCorrect ? 'error' : 'valid'}>
                <div><textarea {...input} {...props} /></div>
                {isCorrect && <span>{meta.error}</span>}
            </div>
        )
    }

    export const FieldDatePicker = ({input, placeholder, dateFormat, meta }) => {
        const isCorrect = meta.touched && meta.error;
        return(
            <div className = {isCorrect ? 'error' : 'valid'}>
                <DatePicker {...input} placeholder = {'placeholder'} dateFormat = "dd/MM/yyyy" selected = {input.value ? input.value : null} />
                {isCorrect && <span>{meta.error}</span>}
            </div>
         )
    }
