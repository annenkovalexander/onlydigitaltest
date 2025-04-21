import styles from './EventCardUI.module.scss';

interface TEventCardProps {
    year: number;
    description: string;
}

const EventCardUI: React.FC<TEventCardProps> = ({year, description}) => (
        <div className={styles.container}>
            <h2 className={styles.year}>{year}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    )
export default EventCardUI;