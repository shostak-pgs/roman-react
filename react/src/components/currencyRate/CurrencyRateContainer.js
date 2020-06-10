import React, { Component } from 'react';
import {switchIsFetching, setCurrencies, setRateDynamicData} from '../store/CurrencyReducer';
import Preloader from '../preloader/Preloader';
import CurrencyService from '../service/CurrencyService';
import { withRouter, Route } from 'react-router-dom';
import CurrencyRate from './CurrencyRate';
import { connect } from 'react-redux';

class CurrencyRateContainer extends Component {

    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getCurrencies = this.getCurrencies.bind(this);
        this.getCurrencyDynamic = this.getCurrencyDynamic.bind(this);
    }

    componentDidMount(){
        this.getCurrencies();
    }

    getCurrencyDynamic(dynamicRequest) {
    this.props.switchIsFetching({isFetching : true});
        CurrencyService.getCurrencyDynamic({user : this.props.user,
                                            dynamicRequest: dynamicRequest}).then(data => {
            this.props.setRateDynamicData({rateDynamicData : data})
            this.props.switchIsFetching({isFetching : false});
        })
    }

    getCurrencies(){
        this.props.switchIsFetching({isFetching : true});
        CurrencyService.getCurrencies({user : this.props.user}).then(data => {
            this.props.setCurrencies({currencies : data})
            this.props.switchIsFetching({isFetching : false});
        })
    }

    render() {
        return(
            <div>{this.props.isFetching ? <Preloader/> : null}
                <Route exact path='/currencyRate' render = { () => <CurrencyRate getCurrencyDynamic = {this.getCurrencyDynamic}
                                                                                 rateDynamicData = {this.props.rateDynamicData}
                                                                                 currencies = {this.props.currencies}/>}/>
            </div>
        )
    }
}

let WithRouteCurrencyRateContainer = withRouter(CurrencyRateContainer);

let mapStateToProps = (state) => {
    return {
        currencies : state.currencyPage.currencies,
        rateDynamicData : state.currencyPage.rateDynamicData,
        user : state.loginPage.user,
        isFetching : state.currencyPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    switchIsFetching, setCurrencies, setRateDynamicData
    })(WithRouteCurrencyRateContainer);