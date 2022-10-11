// Write your solution in this file!
const employee = {
    name: "Samantha", streetAddress: "New York"
};
function updateEmployeeWithKeyAndValue(obj = employee, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj = employee, key, value) {
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(obj = employee, key) {
    const newEmployee = { ...obj };
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(obj = employee, key) {
    delete obj[key]
    return obj
}