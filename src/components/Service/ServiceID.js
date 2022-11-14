import React from 'react'
import './Service.css'
import LineOfBusinessID from './LineOfBusinessID.js'
import CorporateActionID from './CorporateActionID.js'
import CompanyPartnerID from './CompanyPartnerID.js'

const ServiceID = () => {
    return (
        <div>
            <div className='line-of-business pb-5'>
                <LineOfBusinessID />
            </div>
            <div className='corporate-action'>
                <CorporateActionID />
            </div>
            <div className='company-partner '>
                <CompanyPartnerID />
            </div>
        </div>
    )
}

export default ServiceID