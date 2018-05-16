function validateRoster(obj1, obj2) {
    let start1 = obj1.StartTime,
        end1 = obj1.EndTime,
        start2 = obj.StartTime,
        end2 = obj2.EndTime,
        rosterIsValid = false;

    if (start1 < end1 && start2 < end2) {
        if (start2 > end1 || end2 < start1) {
            rosterIsValid = true;
        }
    }

    return rosterIsValid
}