import React from 'react'

const Form = () => {

    return (

        <>
            <input type="checkbox" id='display' />
            <label htmlFor="form" className='try'>
                <form>
                    <div className="form-content">
                        <input
                            className='search-input'
                            name='city'
                            type='search'
                            placeholder='Search City/Country...'
                            autoComplete='on'
                        />
                        <button className='btn'><i className="fas fa-search"></i>
                        </button>
                    </div>
                </form>
            </label>
            <label htmlFor="display">
                <div className='show-btn'>
                    <i className="fas fa-search"></i>
                </div>
            </label>
            <label htmlFor="display">
                <div className="logo"> <span className="smile">StBugyei&#9787;Weather</span> <span className="smile"></span>
                </div>
            </label>
        </>
    )
}

export default Form
