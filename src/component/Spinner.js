import React from 'react'
import '../styles/spinner.css'

export default function Spinner() {
    return (
        <div className="spinner-position">
            <div className="spinner">
                <div className="spinner-text">Searching</div>
                <div className="spinner-sector spinner-sector-orange"></div>
                <div className="spinner-sector spinner-sector-lightblue"></div>
                <div className="spinner-sector spinner-sector-blue"></div>
            </div>
        </div>

    )
}
