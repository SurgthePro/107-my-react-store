function Admin()
{
    return(
        <div>
            <h1 className='text-center mb-5'>Store Administrations</h1>
            <section>
                <h2>Add Products</h2>
                
                <div className= "card w-50">
                    <div className="card-body">
                        <div>
                            <label className="form-label">Title:</label>
                            <input type="text" className="form-control"/>
                        </div>

                        <div>
                            <label className="form-label">Category:</label>
                            <input type="text" className="form-control"/>
                        </div>

                        <div>
                            <label className="form-label">Image:</label>
                            <input type="text" className="form-control"/>
                        </div>

                        <div>
                            <label className="form-label">Price:</label>
                            <input type="number" className="form-control"/>
                        </div>

                        <div>
                            <button className="btn btn-dark">Save Product</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Admin;