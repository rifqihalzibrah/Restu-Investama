import React from 'react'
import './Service.css'
import LineOfBusiness from './LineOfBusiness'
import CorporateAction from './CorporateAction'
import CompanyPartner from './CompanyPartner'

const Service = () => {
    return (
        <div>
            <div className='line-of-business pb-5'>
                <LineOfBusiness />
            </div>
            <div className='corporate-action'>
                <CorporateAction />
            </div>
            <div className='company-partner '>
                <CompanyPartner />
            </div>
        </div>
    )
}

export default Service