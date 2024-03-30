import { useState } from 'react'
import './Accordian.css';
import data from './accordianData.js';

const Accordian = () => {
    // Use to store the id of the selected question in the single selection mode
    const [select, setSelected] = useState(null);
    // use to store the state of the mutli select enable option
    const [multiple, setMultiple] = useState(false);
    // use to store the ids of the questions in the mutli select enable option
    const [multipleSelected, setMultipleSelected] = useState([]);

    const handleSingleSelect = (currentId) => {
        // if the currentId is already selected remove it or else select the id
        if (currentId === select) {
            setSelected(null);
        } else {
            setSelected(currentId);
        }
    }

    const handleMultipleSelect = (currentId) => {
        // if the currentId is present in the selectedIds then remove it or else add to the list of the seleced ids
        let copySelectedIds = [...multipleSelected];
        let indexOfCurrentId = copySelectedIds.indexOf(currentId);
        if (indexOfCurrentId === -1) {
            copySelectedIds.push(currentId);
        } else {
            copySelectedIds = copySelectedIds.filter((id) => id != currentId);
        }
        setMultipleSelected(copySelectedIds);
    }
    return (
        <div className="container mt-3">
            <div className="text-center">
                <button className='btn btn-primary medium' onClick={() => setMultiple(!multiple)}>{!multiple ? "Enable Multiselect" : "MutliSelect Enabled"}</button>
            </div>
            <div className='wrapper'>
                {
                    data && data.length > 0 ? (
                        data.map(item => (
                            <div key={item.id} className="mt-2 question">
                                <div className="title" onClick={multiple ? () => handleMultipleSelect(item.id) : () => handleSingleSelect(item.id)}>
                                    <h3>{item.question}</h3>
                                    <p className = "icons">
                                        {
                                            multiple
                                                ? multipleSelected.indexOf(item.id) !== -1 ? <i className="fa fa-angle-double-up"></i> : <i className="fa fa-angle-double-down"></i>
                                                : select === item.id ? <i className="fa fa-angle-double-up"></i> : <i className="fa fa-angle-double-down"></i>
                                        }
                                    </p>
                                </div>
                                <div className='answer'>
                                    {
                                        multiple
                                            ? multipleSelected.indexOf(item.id) !== -1 && <p>{item.answer}</p>
                                            : select === item.id && <p>{item.answer}</p>
                                    }
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No Data Available</div>
                    )
                }
            </div>
        </div>
    )
}

export default Accordian
