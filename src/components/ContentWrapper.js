import Topbar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'

function ContentWrapper() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">
            <Topbar />
            <div id="content">
                <ContentRowTop />
            </div>
            <Footer />
        </div>

    )
}

export default ContentWrapper;