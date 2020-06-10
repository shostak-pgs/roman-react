import React from 'react';
import './CreateTicket.css';
import {Select, FieldDatePicker} from './../utils/CustomTags';
import {Field, reduxForm} from 'redux-form';
import {required} from './../validator/CrUpdValidator';

let BaseCreateTable = (props) => {

      const handleSubmit = (formData) => {
          debugger;

          let dynamicRequest = {
              currencyId : formData.currency,
              startdate : formData.startdate,
              enddate : formData.enddate,
              };
          props.getCurrencyDynamic(dynamicRequest);
      }

      return(
          <div>
              <CurrencyRateReduxForm onSubmit = {handleSubmit}currencies = {props.currencies}/>
          </div>
      )
  }

  const CurrencyRateForm = (props) => {
      return(
          <form>
              <div><Field placeholder = {'Currency'} name = {'currency'}
                          component = {Select} enum = {props.currencies} validate = {[required]} /></div>
              <div><Field placeholder = {'dd/MM/yyyy'} name = {'startdate'}
                          component = {FieldDatePicker} validate = {[required]}/></div>
              <div><Field placeholder = {'dd/MM/yyyy'} name = {'enddate'}
                          component = {FieldDatePicker} validate = {[required]}/></div>
              <div>
                  <button onClick={props.handleSubmit(values => props.onSubmit({
                      ...values}))} className='overviewButton'>Submit</button>
              </div>
          </form>
      )
  }

  const CurrencyRateReduxForm = reduxForm( { form : 'currencyRateForm' } ) (CurrencyRateForm)

  export default BaseCreateTable;

