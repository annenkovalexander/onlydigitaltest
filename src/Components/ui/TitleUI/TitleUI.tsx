import React from "react";
import styles from './Title.module.scss';
import clsx from "clsx";

interface TTitleProps {
    value: string;
    isMobile: boolean;
}

const TitleUI: React.FC<TTitleProps> = ({value, isMobile}) => (
        <>
            <h1 className={clsx([styles.title, !isMobile ? styles.desktop : ''])}>
                {value}
            </h1>
        </>
    )

export default TitleUI;