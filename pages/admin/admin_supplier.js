import {useEffect, useState} from "react";
import {supabase} from "../../lib/supabaseService";

export default function SupplierAdmin(){
    const [suppliers, setSuppliers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => { getSuppliers() }, [])

    const getSuppliers = async () => {
        let {data: suppliers, error } = await supabase.from('suppliers')
            .select('*')
            .order('id', true);
        if (error){
            console.log('error: ', error)
        }
        else{
            setSuppliers(suppliers)
        }
    }
    return(
        <>
            <div className={'container-fluid align-content-center'}>
                <table className="table table-striped table-dark table-responsive">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                    </thead>
                    <tbody>
                    {suppliers.map((supplier) => (
                        <>
                            <tr key={supplier.id}>{supplier.id}</tr>
                            <tr>{supplier.name}</tr>
                        </>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
