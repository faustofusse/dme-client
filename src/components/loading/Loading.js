import React from 'react'
import { connect } from 'react-redux';

const Loading = (props) => {
    if (!props.loading) return null;
    return (
        <div style={{
            position: 'absolute',
            width: '100%',
            height:'100%',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignContent:'center',
            alignItems:'center',
            backgroundColor: 'rgba(0,0,0,.6)',
            zIndex: 11
        }}>
            <h1 style={{color: '#fff'}}>Loading...</h1>
        </div>
    )
}

const mapStateToProps = state => ({ loading: state.loading });
export default connect(mapStateToProps, null)(Loading);