function validateRoster(obj1, obj2) {
    let start1 = obj1.StartTime,
        end1 = obj1.EndTime,
        start2 = obj.StartTime,
        end2 = obj2.EndTime
    valid = true;

    if (end2 < start1 || start2 < end1) {
        valid = false;
    }

    return valid
}