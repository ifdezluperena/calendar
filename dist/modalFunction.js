import { Task } from "./types.js";
export function createTask() {
    let events;
    const storage = localStorage.getItem("events");
    if (storage !== null) {
        events = JSON.parse(storage);
    }
    let taskId;
    if (events) {
        taskId = events.length;
    }
    else
        taskId = 0;
    const taskTitleElement = document.querySelector("#taskTitle");
    const initialDateElement = document.querySelector("#taskDateIniInput");
    const checkFinalDateElement = document.querySelector("#checkDateEnd");
    const finalDateElement = document.querySelector("#taskDateEndInput");
    const reminderCheckElement = document.querySelector("#reminderCheck");
    const reminderTimeSelectElement = document.querySelector("#reminderSelect");
    const taskDescriptionElement = document.querySelector("#taskDescriptionArea");
    const taskTypeSelectElement = document.querySelector("#taskTypeSelect");
    if ((taskTitleElement === null || taskTitleElement === void 0 ? void 0 : taskTitleElement.value) === null || (taskTitleElement === null || taskTitleElement === void 0 ? void 0 : taskTitleElement.value) === undefined)
        return;
    const taskTitle = taskTitleElement === null || taskTitleElement === void 0 ? void 0 : taskTitleElement.value;
    if ((initialDateElement === null || initialDateElement === void 0 ? void 0 : initialDateElement.value) === null || (initialDateElement === null || initialDateElement === void 0 ? void 0 : initialDateElement.value) === undefined)
        return;
    const initialDate = initialDateElement === null || initialDateElement === void 0 ? void 0 : initialDateElement.value;
    if ((checkFinalDateElement === null || checkFinalDateElement === void 0 ? void 0 : checkFinalDateElement.value) === null || (checkFinalDateElement === null || checkFinalDateElement === void 0 ? void 0 : checkFinalDateElement.value) === undefined)
        return;
    const checkFinalDate = checkFinalDateElement === null || checkFinalDateElement === void 0 ? void 0 : checkFinalDateElement.value;
    if ((finalDateElement === null || finalDateElement === void 0 ? void 0 : finalDateElement.value) === null || (finalDateElement === null || finalDateElement === void 0 ? void 0 : finalDateElement.value) === undefined)
        return;
    const finalDate = finalDateElement === null || finalDateElement === void 0 ? void 0 : finalDateElement.value;
    if ((reminderTimeSelectElement === null || reminderTimeSelectElement === void 0 ? void 0 : reminderTimeSelectElement.value) === null || (reminderTimeSelectElement === null || reminderTimeSelectElement === void 0 ? void 0 : reminderTimeSelectElement.value) === undefined)
        return;
    const reminderTimeSelect = reminderTimeSelectElement === null || reminderTimeSelectElement === void 0 ? void 0 : reminderTimeSelectElement.value;
    if ((taskDescriptionElement === null || taskDescriptionElement === void 0 ? void 0 : taskDescriptionElement.value) === null || (taskDescriptionElement === null || taskDescriptionElement === void 0 ? void 0 : taskDescriptionElement.value) === undefined)
        return;
    const taskDescription = taskDescriptionElement === null || taskDescriptionElement === void 0 ? void 0 : taskDescriptionElement.value;
    if ((taskTypeSelectElement === null || taskTypeSelectElement === void 0 ? void 0 : taskTypeSelectElement.value) === null || (taskTypeSelectElement === null || taskTypeSelectElement === void 0 ? void 0 : taskTypeSelectElement.value) === undefined)
        return;
    const taskType = taskTypeSelectElement === null || taskTypeSelectElement === void 0 ? void 0 : taskTypeSelectElement.value;
    const objeto = new Task(taskId, taskTitle, initialDate, finalDate, parseInt(reminderTimeSelect), taskDescription, taskType);
    events === null || events === void 0 ? void 0 : events.push(objeto);
    localStorage.setItem("events", JSON.stringify(events));
}
//# sourceMappingURL=modalFunction.js.map