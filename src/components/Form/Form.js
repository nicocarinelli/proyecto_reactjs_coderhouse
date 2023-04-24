import './Form.css'
import { useState } from "react"
import { useCart } from "../../context/CartContext"

const Form = ({ onFill }) => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const { cart, total } = useCart()

    const objOrder = {
        buyer: {
            name: name,
            address: address,
            email: email,
            phone: phone,
        },
        items: cart,
        total:total
    }

    return (
        <div>
            <div className='header'>
                <h1>Checkout</h1>
            </div>

            <div className="grid">
                <div className="form-floating mb-3">
                    <input className="form-control" placeholder="Nombre Completo" value={name} onChange={(e) => {setName(e.target.value)}}/>
                    <label htmlFor="floatingInput">Nombre Completo</label>
                </div>
            </div>
            <div className="grid">
                <div className="form-floating mb-3">
                    <input className="form-control" placeholder="Dirección de Envío" value={address} onChange={(e) => {setAddress(e.target.value)}}/>
                    <label htmlFor="floatingInput">Dirección de Envío</label>
                </div>
            </div>
            <div className="grid">
                <div className="form-floating mb-3">
                    <input className="form-control" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <label htmlFor="floatingInput">Email</label>
                </div>
            </div>
            <div className="grid">
                <div className="form-floating mb-3">
                    <input className="form-control" placeholder="Celular" value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
                    <label htmlFor="floatingInput">Celular</label>
                </div>
            </div>

            <div className='Footer'>
                <button onClick={() => onFill(objOrder)}>Generar orden</button>
            </div>
        </div>
    )
}

export default Form