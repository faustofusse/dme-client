import { ON_LOAD, OFF_LOAD} from '../../constants';

export const inLoading = () => {
return dispatch({
        type : ON_LOAD,
    });
}

export const inLoading = () => {
return dispatch({
        type : OFF_LOAD,
    });
}