import React from 'react'
// useNavigate replaces useHistory
import { useNavigate } from 'react-router-dom'

function Profile() {
    // this is used now as a redirect
    let navigate = useNavigate();
    return (
        <div>
            This is the PROFILE PAGE.
            <button
                onClick={() => {
                    navigate('/about');
                }}> {' '}
                Change to About page!</button >
        </div >
    )
}

export default Profile
