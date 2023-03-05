import InfiniteScroll from './infiniteScroll.js';
import SiteOfDayBanner from './siteOfDayBanner.js';
import PrevSitesOfDay from './prevSitesOfDay.js'
import React, { useState } from 'react';

const Header = () => {
    const daysOld = (num) =>{
        const currentDate = new Date();
        const x = num;
        const pastDate = new Date(currentDate.getTime() - (x * 24 * 60 * 60 * 1000));
        let selectedDate = pastDate.toString().slice(4,15).split('');
        selectedDate.splice(6,1,', ');
        const presentedDate = selectedDate.join('')

        return(presentedDate)
    }

    const [siteOfDay, siteState] = useState({
        siteName: "Traffic Productions", daysOld: daysOld(0),  rating: "7.57", type: "Site of the Day", imgUrl:"./Images/site-day.jpeg", company: "Holographik", design:"7.61", usability:"7.35,", creativity:"7.91", content:"7.41", 
    })
    const [prevSitesOfDay, prevSitesState] = useState([
        { siteName: "Atria", daysOld: daysOld(1),  rating: "7.60", type: "Site of the Day", imgUrl:"./Images/sotd-0.jpeg", company: "Non-Linear Studio", design:"7.82", usability:"7.37", creativity:"7.52", content:"7.58" },
        { siteName: "Eco", daysOld: daysOld(2),  rating: "7.75", type: "Site of the Day", imgUrl:"./Images/sotd-1.png", company: "Aristide Benoist", design:"7.84", usability:"7.42", creativity:"7.95", content:"8.02" },
        { siteName: "Halo Media", daysOld: daysOld(3),  rating: "7.36", type: "Site of the Day", imgUrl:"./Images/sotd-2.jpeg", company: "Mallard & Claret", design:"7.36", usability:"7.23", creativity:"7.43", content:"7.63" },
        { siteName: "Axis Arbor", daysOld: daysOld(4),  rating: "7.62", type: "Site of the Day", imgUrl:"./Images/sotd-3.png", company: "Mallard & Claret", design:"7.91", usability:"7.35", creativity:"7.53", content:"7.41" },
        { siteName: "Carolina Herrera Virtual Store", daysOld: daysOld(5),  rating: "7.97", type: "Site of the Day", imgUrl:"./Images/sotd-4.jpeg", company: "Immersive Garden", design:"8.13", usability:"7.49", creativity:"8.39", content:"7.89" },
        { siteName: "CMCC", daysOld: daysOld(6),  rating: "7.77", type: "Site of the Day", imgUrl:"./Images/sotd-5.png", company: "Immersive Garden", design:"7.77", usability:"7.66,", creativity:"7.31", content:"7.40" }
    ]);
    return(
        <div className="inner foreground">
            <div className="heading-svg__title">
                <svg class="" viewBox="0 0 1779 172">
                            <path d="M58.52 171.92C48.6 171.92 39.56 169.84 31.4 165.68C23.4 161.52 16.68 155.84 11.24 148.64C5.96 141.44 2.44 133.52 0.68 124.88L25.88 109.04C28.44 119.28 32.44 127.52 37.88 133.76C43.48 140 50.6 143.12 59.24 143.12C65.8 143.12 71.08 141.52 75.08 138.32C79.08 134.96 81.08 129.92 81.08 123.2C81.08 119.04 79.72 115.36 77 112.16C74.28 108.96 70.84 106.16 66.68 103.76C62.68 101.36 56.92 98.32 49.4 94.64L42.44 91.28C32.84 86.48 25.16 80.48 19.4 73.28C13.64 65.92 10.76 56.56 10.76 45.2C10.76 36.72 12.68 29.04 16.52 22.16C20.52 15.28 26.04 9.91999 33.08 6.07999C40.28 2.08 48.44 0.079999 57.56 0.079999C80.76 0.079999 96.6 10.24 105.08 30.56L79.88 46.64C75.72 34.8 68.28 28.88 57.56 28.88C52.92 28.88 48.92 30.4 45.56 33.44C42.2 36.32 40.52 39.92 40.52 44.24C40.52 48.56 41.96 52.4 44.84 55.76C47.88 58.96 51.48 61.76 55.64 64.16C59.96 66.4 66.12 69.36 74.12 73.04C81.96 76.72 88.52 80.48 93.8 84.32C99.24 88.16 103.64 93.2 107 99.44C110.52 105.52 112.28 112.96 112.28 121.76C112.28 131.84 109.96 140.72 105.32 148.4C100.84 155.92 94.52 161.76 86.36 165.92C78.2 169.92 68.92 171.92 58.52 171.92ZM138.26 1.99999H169.46V170H138.26V1.99999ZM235.102 30.8H188.302V1.99999H313.102V30.8H266.302V170H235.102V30.8ZM332.021 1.99999H435.941V30.8H363.221V66.08H421.541V94.88H363.221V141.2H438.341V170H332.021V1.99999ZM597.29 171.92C582.73 171.92 569.45 168.72 557.45 162.32C545.45 155.92 535.85 146.32 528.65 133.52C521.61 120.56 518.09 104.72 518.09 86C518.09 67.28 521.61 51.52 528.65 38.72C535.85 25.76 545.45 16.08 557.45 9.67999C569.45 3.28 582.73 0.079999 597.29 0.079999C611.85 0.079999 625.13 3.28 637.13 9.67999C649.13 16.08 658.65 25.76 665.69 38.72C672.89 51.52 676.49 67.28 676.49 86C676.49 104.72 672.89 120.56 665.69 133.52C658.65 146.32 649.13 155.92 637.13 162.32C625.13 168.72 611.85 171.92 597.29 171.92ZM597.29 143.12C606.09 143.12 614.01 141.12 621.05 137.12C628.25 132.96 634.01 126.64 638.33 118.16C642.65 109.52 644.81 98.8 644.81 86C644.81 73.2 642.65 62.56 638.33 54.08C634.01 45.44 628.25 39.12 621.05 35.12C614.01 30.96 606.09 28.88 597.29 28.88C588.49 28.88 580.49 30.96 573.29 35.12C566.25 39.12 560.57 45.44 556.25 54.08C551.93 62.56 549.77 73.2 549.77 86C549.77 98.8 551.93 109.52 556.25 118.16C560.57 126.64 566.25 132.96 573.29 137.12C580.49 141.12 588.49 143.12 597.29 143.12ZM705.279 1.99999H811.599V30.8H736.479V69.2H796.959V98H736.479V170H705.279V1.99999ZM927.946 30.8H881.146V1.99999H1005.95V30.8H959.146V170H927.946V30.8ZM1024.86 1.99999H1056.06V65.84H1123.26V1.99999H1154.46V170H1123.26V94.64H1056.06V170H1024.86V1.99999ZM1191.47 1.99999H1295.39V30.8H1222.67V66.08H1280.99V94.88H1222.67V141.2H1297.79V170H1191.47V1.99999ZM1385.7 1.99999H1438.26C1452.18 1.99999 1465.06 5.03999 1476.9 11.12C1488.74 17.2 1498.26 26.56 1505.46 39.2C1512.82 51.68 1516.5 67.28 1516.5 86C1516.5 104.72 1512.82 120.4 1505.46 133.04C1498.26 145.52 1488.74 154.8 1476.9 160.88C1465.06 166.96 1452.18 170 1438.26 170H1385.7V1.99999ZM1428.42 141.2C1444.42 141.2 1457.78 137.12 1468.5 128.96C1479.38 120.64 1484.82 106.32 1484.82 86C1484.82 65.68 1479.38 51.44 1468.5 43.28C1457.78 34.96 1444.42 30.8 1428.42 30.8H1416.9V141.2H1428.42ZM1578.79 1.99999H1609.99L1666.87 170H1633.27L1621.03 130.4H1567.75L1555.51 170H1521.91L1578.79 1.99999ZM1612.15 101.6L1594.39 43.28L1576.63 101.6H1612.15ZM1699.26 98.48L1650.78 1.99999H1684.38L1714.86 67.28L1745.34 1.99999H1778.94L1730.46 98.48V170H1699.26V98.48Z"></path>
                </svg>            
            </div>
            <div>
                <InfiniteScroll siteOfDay={siteOfDay}/>
            </div>
            <div className='heading-banner-wrap'>
                <div className='heading-siteday-banner'>
                    <SiteOfDayBanner siteOfDay={siteOfDay} />
                </div>
                <div className='by-company padding-body'>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px">    <path d="M 25 2 C 12.317 2 2 12.318 2 25 C 2 37.682 12.317 48 25 48 C 37.683 48 48 37.682 48 25 C 48 12.318 37.683 2 25 2 z M 26 11 C 28.504 11 30 16.593 30 22 C 30 25.983 29.075875 30.095344 27.296875 33.152344 C 27.912875 33.728344 28.516 34 29 34 C 30.946 34 32.212781 30.200547 33.050781 27.685547 C 33.225781 27.160547 33.797406 26.881734 34.316406 27.052734 C 34.840406 27.227734 35.122266 27.792406 34.947266 28.316406 C 33.866266 31.559406 32.388 36 29 36 C 28.121 36 27.133594 35.60225 26.183594 34.78125 C 24.593594 36.75625 22.522 38 20 38 C 17.11 38 14 35.81 14 31 C 14 25.474 17.771 24 20 24 C 20.542 24 21.321703 24.145422 22.095703 24.482422 C 22.032703 23.697422 22 22.871 22 22 C 22 20.874 22.112 11 26 11 z M 25.939453 13.007812 C 25.239453 13.200813 24 16.661 24 22 C 24 23.706 24.131469 25.211344 24.355469 26.527344 C 24.375469 26.594344 24.387578 26.662469 24.392578 26.730469 C 24.755578 28.743469 25.338094 30.302172 25.996094 31.451172 C 27.315094 28.812172 28 25.354 28 22 C 28 16.516 26.565453 13.424812 25.939453 13.007812 z M 20 26 C 19.332 26 16 26.241 16 31 C 16 34.69 18.154 36 20 36 C 21.971 36 23.598422 34.961734 24.857422 33.302734 C 23.834422 31.867734 22.956125 29.844547 22.453125 27.185547 C 21.909125 26.421547 20.686 26 20 26 z"/></svg>
                    <p className='block subheading2 bold '>{siteOfDay.company}</p>
                </div>
            </div>
            <div className='padding-body'>
                <div className='heading-prev-sitedays padding-body'>
                    <p className='subheading2'>Winners</p>
                    <p id='sotd-head-text' className='heading bold'>LATEST SOTDS</p>
                    <p id='sotd-sub-text' className='subheading'>See our latest winners and get inspired!</p>
                </div>
            </div>
            <div className='padding-body sotd-grid'>
                <PrevSitesOfDay prevSitesOfDay={prevSitesOfDay} />
            </div>
        </div>
    )
}

export default Header;