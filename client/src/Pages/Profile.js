import React from 'react'
// useNavigate replaces useHistory
import { useNavigate, useParams } from 'react-router-dom'

function Profile() {
    // this is used now as a redirect
    let navigate = useNavigate();
    let { username } = useParams();

    return (
        <div>
            {/* //this allows a dynamic param to be used and displayed on the page, best use may be the users id, to check type directly into the url - localhost:3000/profile/jessica - or whatever name you want . this is helpful with APIs */}
            This is the PROFILE page for {username}.
            <button
                onClick={() => {
                    navigate('/about');
                }}> {' '}
                Change to About page!</button >
        </div >
    )
}

export default Profile
