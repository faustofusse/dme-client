import React from 'react'
import { connect } from 'react-redux';
import '../../styles/loading.scss';

const Loading = (props) => {
    if (!props.loading) return null;
    return (
        <div className="loading-container">
            <div id="preloader">
                <div id="loader"></div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ loading: state.loading });
export default connect(mapStateToProps, null)(Loading);