import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {getAllProducts, updateProduct} from "../../redux/actions";
import './ProductEdit.css';

function ProductEdit() {

    const regexInteger = /^\d*$/;
    const regexDecimal = /^(\d+\.?\d*|\.\d+)$/;
    const regexAlphanumeric = /^[\dA-Za-záéíóúüñç\s-]*$/;
    const regexUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z\d@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z\d@:%_+.~#?&/=]*)/g;

    const dispatch = useDispatch();
    const allInstruments = useSelector((state) => state.allInstruments)
    const {id} = useParams();
    const navigate = useNavigate();

    const [instrumentItem, setInstrumentItem] = React.useState({
        id: 0,
        name: '',
        price: 1.0,
        description: '',
        image: '',
        stock: 0,
        color: '',
        categorie: '',
        brand: '',
        location: '',
        status: '',
    });

    const [errorInfo, setErrorInfo] = React.useState({
        name: '',
        price: '',
        description: '',
        image: '',
        stock: '',
        color: '',
        categorie: '',
        brand: '',
        location: '',
        status: '',
    });

    function handleChange(event) {
        setInstrumentItem({...instrumentItem, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        if (allInstruments.length === 0) {
            dispatch(getAllProducts());
        } else {
            const instrumentItem = allInstruments.find(item =>
                item.id === id);
            setInstrumentItem(instrumentItem);
        }
    }, [dispatch, allInstruments, id]);

    function renderInstrument() {
        if (allInstruments.length === 0) {
            return (
                <h1 className='instrumentErrorMessage'>
                    The store is loading...
                </h1>
            );
        }
        if (!instrumentItem) {
            return (
                <h1 className='instrumentErrorMessage'>
                    The requested instrument was not found.
                </h1>
            );
        }
        return renderForm(instrumentItem);
    }

    function renderForm(instrumentItem) {
        return (
            <div className='editInstrumentContainer'>
                <h1 className='editInstrumentTitle'>Edit {instrumentItem.name}</h1>

                <form onSubmit={e => handleSubmit(e)}>
                    <div className='inputLabelField'>
                        <label>Name: </label>
                        <input placeholder='Instrument name'
                               onChange={(e) => handleChange(e)}
                               onBlur={() => validateAlpha('name', instrumentItem.name)}
                               value={instrumentItem.name}
                               type='text' name={'name'}/>
                        <span className="errorMessage">{errorInfo.name}</span>
                    </div>

                    <div className='inputLabelField'>
                        <label>Price: $</label>
                        <input placeholder='Instrument price'
                               onChange={(e) => handleChange(e)}
                               onBlur={() => validateDecimal('price', instrumentItem.price)}
                               value={instrumentItem.price}
                               type='text' name={'price'}/>
                        <span className="errorMessage">{errorInfo.price}</span>
                    </div>

                    <div className='inputLabelField'>
                        <label>Description: </label>
                        <input placeholder='Instrument description'
                               onChange={(e) => handleChange(e)}
                               onBlur={() => validateAlpha('description', instrumentItem.description)}
                               value={instrumentItem.description}
                               type='text' name={'description'}/>
                        <span className="errorMessage">{errorInfo.description}</span>
                    </div>

                    <div className='inputLabelField'>
                        <label>Image: </label>
                        <input placeholder='Instrument image'
                               onChange={(e) => handleChange(e)}
                               onBlur={() => validateUrl('image', instrumentItem.image)}
                               value={instrumentItem.image}
                               type='text' name={'image'}/>
                        <span className="errorMessage">{errorInfo.image}</span>
                    </div>

                    <div className='inputLabelField'>
                        <label>Stock: </label>
                        <input placeholder='Instrument stock'
                               onChange={(e) => handleChange(e)}
                               onBlur={() => validateInteger('stock', instrumentItem.stock)}
                               value={instrumentItem.stock}
                               type='text' name={'stock'}/>
                        <span className="errorMessage">{errorInfo.stock}</span>
                    </div>

                    <div className='inputLabelField'>
                        <label>Color: </label>
                        <input placeholder='Instrument color'
                               onChange={(e) => handleChange(e)}
                               onBlur={() => validateAlpha('color', instrumentItem.color)}
                               value={instrumentItem.color}
                               type='text' name={'color'}/>
                        <span className="errorMessage">{errorInfo.color}</span>
                    </div>

                    <div className='inputLabelField'>
                        <label>Category: </label>
                        <input placeholder='Instrument category'
                               onChange={(e) => handleChange(e)}
                               onBlur={() => validateAlpha('category', instrumentItem.categorie)}
                               value={instrumentItem.categorie}
                               type='text' name={'categorie'}/>
                        <span className="errorMessage">{errorInfo.categorie}</span>
                    </div>

                    <div className='inputLabelField'>
                        <label>Brand: </label>
                        <input placeholder='Instrument brand'
                               onChange={(e) => handleChange(e)}
                               onBlur={() => validateAlpha('brand', instrumentItem.brand)}
                               value={instrumentItem.brand}
                               type='text' name={'brand'}/>
                        <span className="errorMessage">{errorInfo.brand}</span>
                    </div>

                    <div className='inputLabelField'>
                        <label>Location: </label>
                        <input placeholder='Instrument location'
                               onChange={(e) => handleChange(e)}
                               onBlur={() => validateAlpha('location', instrumentItem.location)}
                               value={instrumentItem.location}
                               type='text' name={'location'}/>
                        <span className="errorMessage">{errorInfo.location}</span>
                    </div>

                    <div className='inputLabelField'>
                        <label>Brand: </label>
                        <input placeholder='Instrument status'
                               onChange={(e) => handleChange(e)}
                               onBlur={() => validateAlpha('status', instrumentItem.status)}
                               value={instrumentItem.status}
                               type='text' name={'status'}/>
                        <span className="errorMessage">{errorInfo.status}</span>
                    </div>

                    <div className="buttonsGroup">
                        <button className='submitButton' type='submit'>Save</button>
                        <button className='cancelButton'
                                type='button'
                                onClick={() => handleCancel()}
                        >Cancel
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    function handleSubmit(event) {
        event.preventDefault();
        const error = validateProduct(instrumentItem);
        if (error) {
            return;
        }
        dispatch(updateProduct(instrumentItem));
        navigate(`/detail/${id}`);
    }

    function handleCancel() {
        navigate(`/detail/${id}`);
    }

    function validateProduct() {
        const errorName = validateAlpha('name', instrumentItem.name);
        const errorPrice = validateDecimal('price', instrumentItem.price);
        const errorDescription = validateAlpha('description', instrumentItem.description);
        const errorImage = validateUrl('image', instrumentItem.image);
        const errorStock = validateInteger('stock', instrumentItem.stock);
        const errorColor = validateAlpha('color', instrumentItem.color);
        const errorCategory = validateAlpha('category', instrumentItem.categorie);
        const errorBrand = validateAlpha('brand', instrumentItem.brand);
        const errorLocation = validateAlpha('location', instrumentItem.location);
        const errorStatus = validateAlpha('status', instrumentItem.status);

        return errorName || errorPrice || errorDescription ||
               errorImage || errorStock || errorColor ||
               errorCategory || errorBrand || errorLocation ||
               errorStatus;
    }

    function validateInteger(key, value) {
        let message = ''
        let result = false;
        if (!regexInteger.test(value)) {
            message = 'The value should contain only numbers.'
            result = true;
        }
        setErrorInfo({
            ...errorInfo,
            [key]: message
        });
        return result;
    }

    function validateDecimal(key, value) {
        let message = ''
        let result = false;
        if (!regexDecimal.test(value)) {
            message = 'The value should contain only decimal numbers.'
            result = true;
        }
        setErrorInfo({
            ...errorInfo,
            [key]: message
        });
        return result;
    }

    function validateAlpha(key, value) {
        let message = ''
        let result = false;
        if (!regexAlphanumeric.test(value)) {
            message = 'The value should contain letters and numbers.'
            result = true;
        }
        setErrorInfo({
            ...errorInfo,
            [key]: message
        });
        return result;
    }

    function validateUrl(key, value) {
        let message = ''
        let result = false;
        if (!regexUrl.test(value)) {
            message = 'The value should contain only a Url.'
            result = true;
        }
        setErrorInfo({
            ...errorInfo,
            [key]: message
        });
        return result;
    }

    return (
        <div className='ProductEdit'>
            {renderInstrument()}
        </div>
    );
}

export default ProductEdit;