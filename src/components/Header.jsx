import React, { Component } from 'react'
import { Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';

class HeaderPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{
                    textAlign:'center', 
                    padding: this.props.Page.page=='welcome'?'3em 0':'1em', 
                    backgroundColor:'rgba(0,0,0,.95)',
                    color: 'white',
                    transition: 'all .7s ease'
                }}
            >
                <Header 
                    // color=''
                    style={{
                        fontFamily: 'muli,sans-serif',
                        fontWeight: '100',
                        fontSize: '36px',
                        color: 'white'
                    }}
                >Recruitment Test</Header>
                <div
                    style={{
                        // backgroundColor:'orange',
                        height: this.props.Page.page=='welcome'?'54px':'0',
                        overflow: 'hidden',
                        transition: 'all .7s ease'
                    }}
                >
                    <p
                        style={{
                            marginTop:'20px',
                            fontFamily: 'muli,sans-serif',
                            fontSize: '24px',
                            fontWeight: '800'
                        }}
                    >PT Code Development Indonesia</p>
                </div>

                {/* <p>{this.props.Page.page}</p> */}
            </div>
         );
    }
}

const MapstatetoProps=(state)=>{
    return {
        Page: state.Page
    }
}


 
export default connect(MapstatetoProps) (HeaderPage);