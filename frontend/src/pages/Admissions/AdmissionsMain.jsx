import React from 'react'
import AdmissionsHero from './AdmissionsHero'
import EligibilityAndDocuments from './EligibilityAndDocuments'
import Process from './Process'
import ContactCTA from '../../components/ContactCTA.jsx'

const AdmissionsMain = () => {
    return (
        <div>
            <AdmissionsHero />
            <EligibilityAndDocuments />
            <Process />
            <ContactCTA />
        </div>
    )
}

export default AdmissionsMain
