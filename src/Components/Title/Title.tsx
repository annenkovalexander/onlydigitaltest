import { useSelector } from "../../../src/services/store";
import TitleUI from "../ui/TitleUI/TitleUI"
import { getPageTitle } from "../../../src/services/slices/periodsSlice";

interface TTitleProps {
    isMobile: boolean;
}

const Title: React.FC<TTitleProps> = ({isMobile}) => {
    const title = useSelector(getPageTitle)
    return (
        <>
            <TitleUI value={title} isMobile={isMobile}/>
        </>
    )
}

export default Title;