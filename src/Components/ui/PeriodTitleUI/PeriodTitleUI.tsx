import styles from './PeriodTitleUI.module.scss';

interface PeriodTitleUIProps {
    periodTitle: string;
}

const PeriodTitleUI: React.FC<PeriodTitleUIProps> = ({periodTitle}) => (
        <div className={styles.container}>
            <h3 className={styles.periodTitle}>{periodTitle}</h3>
        </div>
    )

export default PeriodTitleUI;