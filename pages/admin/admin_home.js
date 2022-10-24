import Link from "next/link";
import Head from "next/head";
export default function AdminHome(){
    return(
        <>

            <Head>
                <title>Admin Home</title>
            </Head>
            <div className={'container-fluid text-center'}>
                <h1 className={''}>Admin Page</h1>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12 mt-2'}>
                        <div className="card bg-dark">
                            <div className="card-body">
                                <h5 className="card-title">Supplier Admin Page</h5>
                                <p className="card-text">Create, Edit, and Delete Suppliers</p>
                                <Link href={'/admin/admin_supplier'}>
                                    <a className={'btn btn-info'}>Supplier Admin</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12 mt-2'}>
                        <div className="card bg-dark">
                            <div className="card-body">
                                <h5 className="card-title">Categories Admin</h5>
                                <p className="card-text">Create, Edit, and Delete Categories</p>
                                <Link href={'/admin/admin_supplier'}>
                                    <a className={'btn btn-info'}>Category Admin</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
