import './Modal.css'
import PropTypes from 'prop-types';

const Modal = ({ classname, id, changeHanlder, header, body, footer }) => {
    return (
        <div className={classname || 'modal-class-name'} id={id || 'modal-id-name'}>
            <div className='content-modal'>
                <div className='header'>
                    <span className='close-modal-icon' onClick={changeHanlder}>&times;</span>
                    <h3>{header ? header : "Header"}</h3>
                </div>
                <div className='body'>
                    {
                        body ? (
                            body
                        ) : (
                            <div>This is our Modal Body</div>
                        )
                    }

                </div>
                <div className='footer'>
                    <h3>{footer ? footer : "Footer"}</h3>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    id: PropTypes.string,
    classname: PropTypes.string,
    changeHanlder: PropTypes.func,
    header: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string,
}

export default Modal
