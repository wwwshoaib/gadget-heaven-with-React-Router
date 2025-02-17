
import { FaCheck } from "react-icons/fa6";
import PropTypes from "prop-types";
const Specification = ({specification}) => {
   
    return (
        <div className="flex items-center gap-2"> 
        <p className="text-black"><FaCheck /></p>
        <p className="text-sm">{specification}</p>
            
        </div>
    );
};
Specification.propTypes = {
    specification:PropTypes.array
}
export default Specification;