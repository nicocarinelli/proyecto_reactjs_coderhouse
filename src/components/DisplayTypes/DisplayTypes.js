import './DisplayTypes.css'
import { NavLink } from 'react-router-dom';
import { getTypes } from '../../services/firebase/firestore/types';
import { useAsync } from "../../hooks/useAsync";

const DisplayTypes = () => {

    const getMainTypes = () => getTypes()
    const { data: types, loading } = useAsync(getMainTypes)

    if(loading) {
        return 
    }

    return (
        <div className="btn-group me-auto mb-2 mb-lg-0" role="group" aria-label="Default button group">
            {
                types.map((type) => (
                    <NavLink key={type.id} to={`type/${type.slug}`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>{type.label}</NavLink>
                ))
            }
        </div>
    )
}

export default DisplayTypes