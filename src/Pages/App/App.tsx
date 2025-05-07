import PeriodControls from "../../../src/Components/PeriodControls/PeriodControls";
import Period from "../../../src/Components/Period/Period";
import Title from "../../Components/Title/Title";
import EventCardList from "../../../src/Components/EventCardList/EventCardList";
import styles from './App.module.scss';
import { useEffect, useState } from "react";
import clsx from "clsx";
import MobileCenterLineUI from "../../../src/Components/ui/MobileCenterLineUI/MobileCenterLineUI";
import Circle from "../../../src/Components/Circle/Circle";
import PeriodTitle from "../../../src/Components/PeriodTitle/PeriodTitle";

const MOBILE_BREAKPOINT = Number(process.env.MOBILE_BREAKPOINT) || 720;

const App = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);
    console.log("App isMobile: ", isMobile);
    const handleResize = () => {
        setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        console.log("isMobile: ", window.innerWidth <= MOBILE_BREAKPOINT);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className={styles.container}>
            {!isMobile && <Circle />}
            <Title isMobile={isMobile}/>
            <Period />
            {isMobile && <PeriodTitle />}
            {isMobile && <MobileCenterLineUI />}
            <div className={clsx([styles.eventsContainer, isMobile ? styles.sliderLayoutMobile : styles.sliderLayoutDesktop])}>
                <PeriodControls isMobile={isMobile} />
                <EventCardList isMobile={isMobile} />
            </div>
        </div>
    )
}
export default App;