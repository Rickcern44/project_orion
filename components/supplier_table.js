import {useEffect, useState} from "react";
import {supabaseClient} from "../lib/supabaseService";
import ReactTable from "react-table";

function SupplierTable(){
    const [suppliers, setSuppliers] = useState([]);
    useEffect(
        () => { getSuppliers()}
    )
    const getSuppliers = async () => {
        let {data: suppliers, error} = await supabaseClient.from('supplier').select('*');
        if (error)
            console.log('error fetching data', error);
        else
            setSuppliers(suppliers)
    }
    return(
        <>
            <ReactTable data={suppliers} columns={columns}/>
        </>
    )
}

export default SupplierTable

