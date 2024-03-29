import './App.css';
import Pagebreakpackages from './Application/Components/Elements/Pagebreak/Pagebreakpackages/Pagebreakpackages';
import Home from './Application/Pages/Home/Home';
import Packages from './Application/Pages/Packages/Packages';
import Pagebreakareacover from './Application/Components/Elements/Pagebreak/PageBreakareacover/PageBreakareacover';
import Chooseus from './Application/Pages/Chooseus/Chooseus';
import PageBreakblank from './Application/Components/Elements/Pagebreak/PageBreakblank/PageBreakblank';
import Facts from './Application/Pages/Facts/Facts';
import PageBreakchoose from './Application/Components/Elements/Pagebreak/PageBreakchoose/PageBreakchoose';
import GoogleMap from './Application/Pages/GoogleMap/GoogleMap';
import Footer from './Application/Pages/Footer/Footer';
import ContactUs from './Application/Pages/ContactUs/ContactUs';



function App() {
  return (
    <>
    <Home/>
    <Pagebreakpackages/>
    <Packages/>
    <PageBreakchoose/>
    <Chooseus/>
    <PageBreakblank/>
    <Facts/>
    <Pagebreakareacover/>
    <GoogleMap/>
    <ContactUs/>
    <Footer/>
    </>
  );
}

export default App;
