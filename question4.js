function findSubs(id) {
    let user = usersArray.find(obj => {
        return obj.Id === id;
    });
    let userRole = user.Role;
    let subRole = rolesArray.find(role => {
        return role.Parent === userRole;
    });
    let subs = usersArray.filter(users => {
        return users.Role === subRole.Id;
    });

    return subs
}