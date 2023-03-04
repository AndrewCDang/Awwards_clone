const Misc = () => {
    return(
        <div className="inner padding-body">
            <div className="flex-center padding-misc">
                <a href="/" className="nav-logo">
                    <svg width="30" height="16" viewBox="0 0 30 16"><path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z"></path>
                        <path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z"></path>
                    </svg>
                </a>
            </div>
            <div className="misc-main-content">
                <div className="misc-links-grid">
                    <div className="links-group">
                        <div className="text-16 bold inline-block">Websites</div>
                        <div className="text-16 bold inline-block">Collections</div>
                    </div>
                    <div className="links-group">
                        <div className="text-16 bold inline-block">Academy</div>
                        <div className="text-16 bold inline-block">Jobs</div>
                    </div>
                    <div className="links-group">
                        <div className="text-16 bold inline-block">Directory</div>
                        <div className="text-16 bold inline-block">Conferences</div>
                    </div>
                    <div className="links-group">
                        <div className="text-16 bold inline-block">FAQs</div>
                        <div className="text-16 bold inline-block">About Us</div>
                        <div className="text-16 bold inline-block">Contact Us</div>
                    </div>
                </div>
                <div className="conference">
                    <div className="conference-items">
                        <p>Next Conferences</p>
                        <svg id="misc-svg" fill="#000000" width="40px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.24 10.28h-0.44v-2.96c0-0.48-0.36-0.84-0.84-0.84s-0.84 0.36-0.84 0.84v2.96h-6.8v-2.96c0-0.48-0.36-0.84-0.84-0.84s-0.84 0.36-0.84 0.84v2.96h-0.44c-2.32 0-4.2 1.88-4.2 4.2v6.8c0 2.32 1.88 4.2 4.2 4.2h11.080c2.32 0 4.2-1.88 4.2-4.2v-6.8c0-2.28-1.92-4.2-4.24-4.2zM17.8 21.32c0 1.4-1.16 2.52-2.56 2.52h-11c-1.4 0-2.52-1.12-2.52-2.52v-6.8c0-1.4 1.12-2.52 2.52-2.52h0.44v2.96c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-2.96h6.84v2.96c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-2.96h0.44c1.4 0 2.52 1.12 2.52 2.52v6.8z"></path>
                        </svg>
                        <p className="text-attention">Amsterdam</p>
                        <p>and</p>
                        <p className="text-attention">Toronto</p>
                    </div>
                </div>
            </div>
            <div className="misc-terms-socials">
                <div className="misc-ts-items">
                    <p>Cookies Policy</p>
                    <p>Legal Terms</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="misc-ts-items">
                    <p className="bold"> Conntect:</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                    <p>Youtube</p>
                    <p>TikTok</p>
                    <p>Pinterest</p>
                </div>

            </div>
        </div>
    )
}
export default Misc;