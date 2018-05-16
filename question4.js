// "Naturally this cascading parent-child relation means that
// Location Manager, Supervisor, Employee are all subordinate
// roles to System Administrator".... ah- *all* sub roles, not just immediate

function findSubs(id) {
    let user = usersArray.find(obj => {
        return obj.Id === id;
    });
    let userRole = user.Role;
    let subRole = rolesArray.find(role => {
        return role.Parent === userRole;
    });
    let subs = usersArray.filter(users => {
        try {
            return users.Role >= subRole.Id;
        } catch (err) {
            console.log('error: this user has no suboordinates');
        }
    });

    return subs
}