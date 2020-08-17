import axios from 'axios';
import { METHOD_GET, METHOD_POST, METHOD_PUT, METHOD_DELETE, ON_LOAD, OFF_LOAD, NOTIFICATION_ERROR } from '../constants';
import { setNotification } from '../redux/actions/notification';

export const call = ( method ,url ,param ,type ) => {
    param = param != null ? param : '';
    return dispatch => {    
        dispatch({type: ON_LOAD})
        return callService( method ,url ,param )
        .then(response => {
            dispatch({type: OFF_LOAD})
            if(response.data.error){
                dispatch(setNotification( NOTIFICATION_ERROR, response.data.error ))    
            }else{
                dispatch({  
                    type : type,
                    payload : response.data.success
                })
            }
        })
        .catch(err => {
            console.log(JSON.stringify("Error: "+err))
            dispatch({type: OFF_LOAD})
        });
    };
};

export const callServiceWithDispatch = ( method ,url ,param ,type, dispatch ) => {
    param = param != null ? param : '';
    dispatch({type: ON_LOAD})
    return callService( method ,url ,param )
    .then(response => {
        if(response.data.error){
            dispatch(setNotification( NOTIFICATION_ERROR, response.data.error ))    
        }else{
            dispatch({  
                type : type,
                payload : response.data.success
            })
            dispatch({type: OFF_LOAD})
        }
    })
    .catch(err => {
        console.log(JSON.stringify("Error: "+err))
        dispatch({type: OFF_LOAD})
    });
};

const callService = (method, url, param ) => {
    console.log(`Llamando al servicio ${url}, method ${method}, parametro ${JSON.stringify(param)}`);
    switch (method){
        case METHOD_GET: return axios.get(`${url}/${param}`);
        case METHOD_POST: return axios.post( url , param);
        case METHOD_PUT: return axios.put(url, param);
        case METHOD_DELETE: return axios.delete(`${url}/${param}`);
    }
}
