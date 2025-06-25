import Header from './components/Header'
import Footer from './components/Footer'
import Title from './components/Title';

function Location() {
    return(
        <>
        <div className="container">
        <div className="menu"><Header /></div>
        <div className="content">
            
            <Title titleName="Location"/>
            <div className='footer'><Footer /></div>
        </div>
        </div>
        </>
    );
}

export default Location;