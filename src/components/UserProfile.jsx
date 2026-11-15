import { getUser } from "../data/user";

async function UserProfile() {
    const user = await getUser();

    return (
        <div>
            <h3>{user.name}</h3>
            <p>email: {user.email}</p>
            <p>role: {user.role}</p>
        </div>
    );
}

export default UserProfile