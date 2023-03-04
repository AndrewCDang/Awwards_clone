
const prevSitesOfDay = (props) =>{
    const prevSites = props.prevSitesOfDay
    return(
        <div className="prev-SOTD">
            {prevSites.map((prevSite) => (
                <div className="grid-item">
                    <a className="grid-item-a"></a>
                    <img className="grid-item-img" src={prevSite.imgUrl}></img>
                    <div className="grid-details">
                        <div className="grid-item-firstLine">
                            <div className="graytext text">{prevSite.daysOld}</div>
                            <div className="sotd-red">SOTD</div>
                        </div>
                        <div>
                            <div className="subheading">{prevSite.siteName}</div>
                            <div className="company-gridrow">
                                <div className="text">by</div>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px">    <path d="M 25 2 C 12.317 2 2 12.318 2 25 C 2 37.682 12.317 48 25 48 C 37.683 48 48 37.682 48 25 C 48 12.318 37.683 2 25 2 z M 26 11 C 28.504 11 30 16.593 30 22 C 30 25.983 29.075875 30.095344 27.296875 33.152344 C 27.912875 33.728344 28.516 34 29 34 C 30.946 34 32.212781 30.200547 33.050781 27.685547 C 33.225781 27.160547 33.797406 26.881734 34.316406 27.052734 C 34.840406 27.227734 35.122266 27.792406 34.947266 28.316406 C 33.866266 31.559406 32.388 36 29 36 C 28.121 36 27.133594 35.60225 26.183594 34.78125 C 24.593594 36.75625 22.522 38 20 38 C 17.11 38 14 35.81 14 31 C 14 25.474 17.771 24 20 24 C 20.542 24 21.321703 24.145422 22.095703 24.482422 C 22.032703 23.697422 22 22.871 22 22 C 22 20.874 22.112 11 26 11 z M 25.939453 13.007812 C 25.239453 13.200813 24 16.661 24 22 C 24 23.706 24.131469 25.211344 24.355469 26.527344 C 24.375469 26.594344 24.387578 26.662469 24.392578 26.730469 C 24.755578 28.743469 25.338094 30.302172 25.996094 31.451172 C 27.315094 28.812172 28 25.354 28 22 C 28 16.516 26.565453 13.424812 25.939453 13.007812 z M 20 26 C 19.332 26 16 26.241 16 31 C 16 34.69 18.154 36 20 36 C 21.971 36 23.598422 34.961734 24.857422 33.302734 C 23.834422 31.867734 22.956125 29.844547 22.453125 27.185547 C 21.909125 26.421547 20.686 26 20 26 z"/></svg>
                                <div className="company-text">{prevSite.company}</div>
                            </div>
                            <div className="prev-SOTD-table">
                                <div className="SOTD-table-col">
                                    <p>Design</p>
                                    <p>{prevSite.design}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default prevSitesOfDay;