import React from 'react'

import Layout from '../../Layouts/manage/links'

const Edit = () => {
    return(
        <Layout>
        <div className="container h-100 pt-5">
            <h1>Editar link</h1>
            <div className="d-flex flex-column h-100">
                <form>
                    <div className="form-group">
                        <label>Label</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Url</label>
                        <input type="text" className="form-control"/>
                    </div>
                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input type="checkbox" name="isSocial"></input>
                                <span className="form-check-sign"></span>
                                IsSocial?
                            </label>
                        </div>
                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </Layout>
    )
}

export default Edit