import { useSelector } from "../../../src/services/store";
import TitleUI from "../ui/TitleUI/TitleUI"
import { getPageTitle } from "../../../src/services/slices/periodsSlice";

const Title: React.FC = () => {
    const title = useSelector(getPageTitle)
    return (
        <>
            <TitleUI value={title} />
        </>
    )
}

export default Title;