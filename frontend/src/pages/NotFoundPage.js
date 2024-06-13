import React from 'react'
import Message from '../components/Message'
import Footer from "../components/Footer";

function NotFoundPage() {
    return (
        <div>
            <Message variant='danger'>
                404 Not Found
            </Message>
        
        <Footer/>
        </div>
    )
}

export default NotFoundPage
