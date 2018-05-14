function renderTableRow(imgUrl, name, role, location) {
    // if this is happening because of a refresh call,
    // either the existing table data would need to be cleared
    // with something like $.html('') or some other sort of
    // additional mapping/filtering would need to take place to
    // handle render. Not specified, so i'll leave it alone
    let html = `<tr>
                <td>
                  <div>
                    <img alt="{{ name }}" src="{{ imgUrl }}">
                  </div>
                  <div>
                    <div class="m-team-name">{{ name }}</div>
                    <p class="gray text--small margin-none">{{ role }}</p>
                  </div>
                </td>
                <td class="text--small tdCompany" style="display: table-cell;">
                  {{ location }}
                </td>
                <td width="155">
                  <div class="btn-group u-pullRight">
                    <a href="#team/15" class="btn btn-default btn-sm view-btn">View</a>
                  </div>
                </td>
              </tr>`;

    $('#pnlTeamtable > tbody').append(html);
}

function parseEmployeeData(jsnUserObj) {
    let imgUrl = jsnUserObj.PhotoUrl;
    let name = jsnUserObj.DisplayName;
    let roleObj = jsnRoleArray.find((obj) => {
        return obj.Id === jsnUserObj.Role;
    });
    let locationObj = jsnLocationArray.find((obj) => {
        return obj.Id === jsnUserObj.Location
    });
    let role = roleObj.Name;
    let location = locationObj.Name;

    renderTableRow(imgUrl, name, role, location);

}

// once the data has been received do something like
jsnUserArray.forEach(data => {
    parseEmployeeData(data)
});