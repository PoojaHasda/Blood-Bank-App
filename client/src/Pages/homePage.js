import React from "react";
import Spinner from "../Components/shared/Spinner";
import {useSelector} from 'react-redux';
import Layout from "../Components/shared/Layouts/Layout";
const HomePage = () => {
    const {loading,error} = useSelector(state => state.auth)
    return(
        <Layout>
        {error && <span>{alert(error)}</span>}
            {loading ? (<Spinner /> ): (
                <>
                 <h1>Home Page</h1>
                </>
            )}
           
        </Layout>
    )
}

export default HomePage;