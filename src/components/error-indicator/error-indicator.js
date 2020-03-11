import React from 'react'

import icon from './archive.png'
import './error-indicator.css'

export const ErrorIndicator = () => (
    <div className="oopssError">
        <img src={icon} alt="error icon" />
        <span>Doesn't find book</span>
        <span>Sorry about it</span>
        <span>Don't worry we fix it</span>
    </div>
)