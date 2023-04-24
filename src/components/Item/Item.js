import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, img }) => {

    return (
        <div className="col">
            <Link to={`/detail/${id}`} className='Item'>
                <div className="card border-0">
                    <img src={img} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h1 className="card-title display-6">{name}</h1>
                        <p className="card-text"><strong>${price}</strong></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item