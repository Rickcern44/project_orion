import SupplierData from "../../components/supplierData";

export default function SupplierAdmin(){
    function show(id){
        alert(id)
    }
    const sup =
        [
            {id: 1, name: 'Rick', description: 'Gets the goods!'},
            {id: 2, name: 'Shel', description: 'Gets the better goods!'}
        ]
    return(
        <>
            {sup.map((supplier) =>{
                return(
                    <div key={supplier.id} onClick={() => show(supplier.id)}>
                        <SupplierData supplier={supplier}/>
                    </div>
                )
            })}
        </>
    )
}
