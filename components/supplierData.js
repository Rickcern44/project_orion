function SupplierData({ supplier}){
    return(
        <>
            <div>
                <div className="card text-bg-secondary">
                    <div className="card-body">
                        <h6 className="card-title">{supplier.name}</h6>
                        <p className="card-text">{supplier.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupplierData
