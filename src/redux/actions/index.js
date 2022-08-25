import axios from 'axios'

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const GET_INSTRUMENT_BY_NAME = "GET_INSTRUMENTS_BY_NAME";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FILTERED_INSTRUMENTS = "FILTERED_INSTRUMENTS";


export const getAllProducts = () => {
    return async function (dispatch) {
        const products = await axios('/products');

        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: products.data
        });
    };
};

export const getAllCategories = () => {
    return function (dispatch) {
        return dispatch({ type: GET_ALL_CATEGORIES, payload: null })
    };
};

export const getProductById = (instrumentId) => {
    return function (dispatch) {
        axios.get(`/products/${instrumentId}`)
            .then(response =>
                dispatch({
                    type: GET_PRODUCT_BY_ID,
                    payload: response.data
                })
            )
            .catch(error =>
                dispatch({
                    type: GET_PRODUCT_BY_ID,
                    payload: { error: error.message }
                })
            );
    }
}

export const updateProduct = (instrumentItem) => {
    return async function (dispatch) {
        const response = await axios.put(`/products/${instrumentItem._id}`,
            instrumentItem);
        return dispatch({
            type: UPDATE_PRODUCT,
            payload: response.data
        });
    };
};

export function createProduct(payload) {
    return async function (dispatch) {
        await axios.post('/products', payload)
    }
}

let queries={
    name:"",
    categorie:"",
    status:"",
    brand:""
}
export function filteredIntruments(payload) {
    return async function (dispatch) {
        let condition=[];
        queries={...queries,...payload}
        for(const key in queries){
            if(queries[key]) condition.push(`${key}=${queries[key]}`)
        }
        const filter = await axios.get(`/filter?${condition.join('&')}`)
        dispatch({
            type: FILTERED_INSTRUMENTS,
            payload: filter.data
        })
    }
}