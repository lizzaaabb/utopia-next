import styles from './page.module.css';
import Header from '../components/Header';
import Landing from '../components/Landing';
import About from '../components/About';
import Georgia from '../components/Georgia';
import { LanguageProvider } from '../components/LanguageContext';
import GeorgiaHeader from '../components/GeorgiaHeader';
import AboutGeorgia from '../components/AboutGeorgia';
import TourismHeader from '../components/TourismHeader';
import TourismGeorgia from '../components/TourismGeorgia';
import ReGeorgia from '../components/ReGeorgia';
import Opportunity from '../components/Opportunity';

export default function Home() {
  return (
    <LanguageProvider>
      <div className={styles.page}>
        <Header>
          <Landing />
        </Header>
        <About />
        <Georgia />
        <GeorgiaHeader />
        <AboutGeorgia />
        <TourismHeader />
        <TourismGeorgia />
        <ReGeorgia />
        <Opportunity />
      </div>
    </LanguageProvider>
  );
}