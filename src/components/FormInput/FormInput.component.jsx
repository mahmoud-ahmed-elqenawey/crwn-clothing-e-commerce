import './FormInput.styles.scss';

const FormInput = ({ label, id, ...otherProps }) => {
    return (
        <div className='group'>
            <input id={id} className='form-input' {...otherProps} />
            {label && (
                <label
                    className={`${
                        otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;
