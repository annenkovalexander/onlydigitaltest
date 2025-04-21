import PeriodControls from "../../../src/Components/PeriodControls/PeriodControls";
import Period from "../../../src/Components/Period/Period";
import Title from "../../Components/Title/Title";
import EventCardList from "../../../src/Components/EventCardList/EventCardList";
import styles from './App.module.scss';

const App = () => (
        <div className={styles.container}>
            <Title />
            <Period />
            <PeriodControls />
            <EventCardList />
        </div>
    )

export default App;