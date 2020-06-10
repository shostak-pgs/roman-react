import axios from 'axios'
import { Component } from 'react';

const APPLICATION_API_URL = 'http://localhost:8080/Help_Desk'

class CrUpdTicketService extends Component {
    constructor(props) {
        super(props)
        this.getCurrencies = this.getCurrencies.bind(this);
        this.getDate = this.getDate.bind(this);
    }

        getDate(props) {
            return `${props.getDate()}/${props.getMonth() + 1}/${props.getFullYear()}/`
        }

        getCurrencies(props) {
            return axios.get(`${APPLICATION_API_URL}/currencies`, {withCredentials: true,
                headers: {
                    "Authorization" : `Bearer ${props.user.jwt}`,
                    "Accept": "application/json",
                }
            })
            .then(response => {return response.data})
            .catch(error => {
                alert('Unable to load currencies')
                return Promise.reject(error)
            });
        }

    getCurrencyDynamic(props) {
        return axios.get(`${APPLICATION_API_URL}/rates/dynamics/${props.dynamicRequest.currencyId}?startdate=${this.getDate(props.dynamicRequest.startdate)}&enddate=${this.getDate(props.dynamicRequest.enddate)}`, {withCredentials: true,
            headers: {
                "Authorization" : `Bearer ${props.user.jwt}`,
                "Accept": "application/json",
            }
        })
        .then(response => {return response.data})
        .catch(error => {
            alert('Unable to load currencies dynamic data')
            return Promise.reject(error)
        });
    }
}

export default new CrUpdTicketService()