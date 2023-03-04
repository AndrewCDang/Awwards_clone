import './infiniteScroll.css';

const InfiniteScroll = (props) => {
    // Repeating props in infinite banner
    // - March 1, 2023 <strong>Traffic Productions</strong> - Site of the Day - <strong>7.57</strong> 
    const currentDate = props.siteOfDay.daysOld;
    const siteName = props.siteOfDay.siteName;
    const contentType = props.siteOfDay.type;
    const siteRating = props.siteOfDay.rating;
    const bannerText = `<div class='infiniteBanner'>- ${currentDate} <strong>${siteName}</strong> - ${contentType} - <strong>${siteRating}</strong></div>`;
    return (
        <div className='header-banner-wrap'>
            <div dangerouslySetInnerHTML={{__html: bannerText}}></div>
            <div dangerouslySetInnerHTML={{__html: bannerText}}></div>
            <div dangerouslySetInnerHTML={{__html: bannerText}}></div>
        </div>
    )
}
export default InfiniteScroll;