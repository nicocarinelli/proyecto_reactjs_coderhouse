const Spinner = () => {

    document.title = 'Cargando'

    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Cargando</span>
            </div>
        </div>
    )
}

export default Spinner