import React from "react";
import PeriodUI from "../ui/PeriodUI/PeriodUI";
import { useSelector } from "../../../src/services/store";
import { getCurrentPeriodData } from "../../../src/services/slices/periodsSlice";

const Period: React.FC = () => {
    const {year1, year2} = useSelector(getCurrentPeriodData);
    console.log("year1: ", year1);
    console.log("year2: ", year2);
    return (
        <>
            <PeriodUI year1={year1} year2={year2} />
        </>
    )   
}

export default Period;