import users from './../../mocks/users.json';

const Projects = () => (
    <div>
        {users.map((user) => (
            <div>
                <span>
                    {user.id}
                </span>
                <span>
                    {user.address.state}
                </span>
            </div>
        ))}
    </div>
);

export default Projects;