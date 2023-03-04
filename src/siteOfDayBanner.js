import TextLoop from './textLoop.js'
import './siteOfDayBanner.css'
const SiteOfDayBanner = (props) => {  
    return(
        <div className="heading-siteday-banner" id="heading-siteday-banner">
            <img src={props.siteOfDay.imgUrl} className="heading-bannerImg"/>
            <div id="TextLoop" className="subheading bold"></div>
            <TextLoop props={props} tag="TextLoop"/>
        </div>
        
    )
}

export default SiteOfDayBanner;

