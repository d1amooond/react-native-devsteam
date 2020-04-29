import {_api} from "../../variables/_api";

const getData = () => dispatch => {
    return fetch(_api).then(res => res.json()).then((res) => dispatch({type: 'GET_DATA', payload: res}))
}

export {
    getData
}
