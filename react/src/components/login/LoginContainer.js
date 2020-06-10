import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '../preloader/Preloader';
import LoginService from '../service/LoginService';
import { setUser } from '../store/LoginReducer';
import { switchIsFetching, } from '../store/CurrencyReducer';
import Login from './Login';

class LoginContainer extends Component {

    constructor(props){
        super(props);
        this.getUser = this.getUser.bind(this);
    }

    getUser(userData){
        this.props.switchIsFetching({isFetching : true});
            LoginService.login(userData).then(response => {
                if ((response.status === 200)) {
                    this.props.setUser({user : response.data});
                    this.props.history.push(`currencyRate`);
                } else {
                    this.props.setUser({user : {id : '', firstName : '', password : '' }})
                    this.props.history.push(`/`)
                }
        });
        this.props.switchIsFetching({isFetching : false});
    }

    render() {
        return(<div> {this.props.isFetching ? <Preloader/> : null}
                    <Login getUser = {this.getUser}                                
                            user = {this.props.user}/> 
                </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching : state.currencyPage.isFetching,
        user: state.loginPage.user
    }
}

let WithRouteLoginContainer = withRouter(LoginContainer);
  
export default connect(mapStateToProps, {
    setUser, switchIsFetching
    })(WithRouteLoginContainer);
