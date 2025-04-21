import {clsx} from 'clsx';

import styles from './PeriodUI.module.scss';

interface TPeriodUIProps {
    year1: number;
    year2: number;
}

const PeriodUI: React.FC<TPeriodUIProps> = ({year1, year2}) => (
        <>
            <div className={clsx([styles.container, styles.year])}>
                <span className={styles.firstYear}>{year1}</span><span className={styles.secondYear}>{year2}</span>
            </div>
        </>
    )

export default PeriodUI;