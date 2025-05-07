import { getPeriodTitle } from "../../../src/services/slices/periodsSlice"
import { useSelector } from "../../../src/services/store"
import PeriodTitleUI from "../ui/PeriodTitleUI/PeriodTitleUI";

const PeriodTitle: React.FC = () => {
    const periodTitle = useSelector(getPeriodTitle);
    return (
        <>
            <PeriodTitleUI periodTitle={periodTitle} />
        </>
    )
}

export default PeriodTitle;