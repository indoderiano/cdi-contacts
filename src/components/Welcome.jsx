import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Routing } from '../redux/actions'

class WelcomePage extends Component {
    state = {  }

    componentDidMount=()=>{
        console.log(this.props.location.pathname)
        if(this.props.location.pathname=='/contacts'){
            console.log('to contacts')
            this.props.Routing('contacts')
        }else if(this.props.location.pathname=='/'){
            this.props.Routing('welcome')
        }
    }

    render() { 
        return ( 
            <div
                style={{
                    textAlign:'center',
                    marginTop:'50px',
                    fontFamily:'muli,sans-serif',
                    color: 'rgba(0,0,0,.75)'
                }}
            >
                <div
                    style={{
                        display: 'inline-block'
                    }}
                >
                    <span>Candidate</span>
                    <p 
                        style={{
                            fontSize:'30px',
                            fontWeight:'200'
                        }}
                    >Indo Halim</p>
                    <span>Date</span>
                    <p 
                        style={{
                            fontSize:'20px',
                            fontWeight:'200'
                        }}
                    >14 September 2020</p>
                </div>
                <div style={{marginTop: '6em'}}>
                    <div style={{marginBottom: '1em'}}>
                        Click here to see the result
                    </div>
                    <Button 
                        color='orange'
                        as={Link}
                        to='/contacts'
                        onClick={()=>{
                            this.props.Routing('contacts')
                        }}
                    >
                        Proceed
                    </Button>
                </div>
            </div>
         );
    }
}

export default connect(null,{Routing})(WelcomePage);