import React from 'react'
import Internships from './Internships'
import Languages from './Languages'
import PersonalInterest from './PersonalInterest'
import Projects from './Projects'

const Page3 = () => {
    return (
        <div className="container pg2">
            {/* <!-- -----row start here----- --> */}
            <div className="row">
                {/* <!-- -----col left side start here----- --> */}
                <div className="col-md-5">


                    {/* <!-- -----Technical Skills-section start here----- --> */}
                    <div className="technical-skills-section">
                        <div className="technical">
                            <img src="/shape1.png" id="top-image2" />
                            <Languages />
                            <Internships />
                            <PersonalInterest />
                            <img src="/shap2.png" id="image-shap22" />
                        </div>
                    </div>
                    {/* <!-- -----Technical Skills-section end here----- --> */}
                </div>
                {/* <!-- -----col left side end here----- -->
                    <!-- -----col right side start here----- --> */}
                <div className="col-md-7">
                    <Projects />
                </div>
                {/* <!-- -----col right side end here----- --> */}
            </div>
            {/* <!-- -----row end here----- --> */}
            <img src="/shape3.png" id="bottom-image2" />
        </div>
    )
}

export default Page3