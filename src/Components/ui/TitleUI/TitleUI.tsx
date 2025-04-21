import React from "react";
import styles from './Title.module.scss';

interface TTitleProps {
    value: string;
}

const TitleUI: React.FC<TTitleProps> = ({value}) => (
        <>
            <h1 className={styles.title}>
                {value}
            </h1>
        </>
    )

export default TitleUI;