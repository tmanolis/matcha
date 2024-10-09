import { Link, Outlet } from 'react-router-dom'

export default function Profiles() {
    const profiles = [1, 2, 3, 4, 5];

    return (
        <div>
            {profiles.map((profile) => 
            <div>
                <Link key={profile} to={`/profiles/${profile}`}>
                    Profile {profile}
                </Link>
            </div>
            )}
            <Outlet/>
        </div>
    )
}