
import { Task } from "./types.js";



setWeekCalendar();




function setWeekCalendar(date: Date = new Date()) {

    //BUTTONS
    const btnPrevWeek = document.querySelector("#prev-week") as HTMLButtonElement | null;
    if (btnPrevWeek === null) return;
    btnPrevWeek.textContent = "<";
    btnPrevWeek.addEventListener("click", changeWeek)
    const btnNextWeek = document.querySelector("#next-week") as HTMLButtonElement | null;
    if (btnNextWeek === null) return;
    btnNextWeek.textContent = ">";
    btnNextWeek.addEventListener("click", changeWeek)


    //FUNCTION
    const weekHeader = document.querySelector("#main-header") as HTMLDivElement | null;
    if (weekHeader) weekHeader.innerHTML = ""


    let weekDays: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const today = date;
    const todayWeekDay = today.getDay();
    const todayRef = today.getDate();
    btnPrevWeek.setAttribute("change-week-date", `${today.getTime() - (7 * 24 * 60 * 60000)}`);
    btnNextWeek.setAttribute("change-week-date", `${today.getTime() + 7 * 24 * 60 * 60000}`);

    let firstWeekDay: Date

    if (todayWeekDay === 0) {
        let timeToFirstDay = 6 * 24 * 60 * 60000;
        firstWeekDay = new Date(today.getTime() - timeToFirstDay);
    } else {
        let timeToFirstDay = (todayWeekDay - 1) * 24 * 60 * 60000;
        firstWeekDay = new Date(today.getTime() - timeToFirstDay);
    }


    for (let i = 0; i < 7; i++) {
        let currentWeekDay;
        if (i == 0) {
            currentWeekDay = firstWeekDay
        } else {
            let addMlSeconds = (i) * 24 * 60 * 60000;
            currentWeekDay = new Date(firstWeekDay.getTime() + addMlSeconds);

        }

        const dayContainer = document.createElement("div");
        dayContainer.classList.add(`day-section-${i + 1}`);
        dayContainer.id = `day-section-${i + 1}`
        dayContainer.textContent = weekDays[i];

        const dayNumber = document.createElement("span")
        dayNumber.classList.add("weekday")
        dayNumber.textContent = `${currentWeekDay.getDate()}`;


        weekHeader?.appendChild(dayContainer);
        dayContainer.appendChild(dayNumber);
    }

    setEvents(firstWeekDay);
}


function changeWeek(this: HTMLButtonElement) {
    let totalTime = this.getAttribute("change-week-date");
    if (totalTime === null) return;

    let newDate = new Date(parseInt(totalTime));
    setWeekCalendar(newDate);
}


function setEvents(firstWeekDay: Date) {
    const weekDaysList = document.querySelectorAll(".day-task-section");
    let tasks;
    const storage = localStorage.getItem("events");
    console.log(storage)
    if (storage !== null) {
        tasks = JSON.parse(storage);
    }

    let currentDayFullDate = firstWeekDay.getTime();



    let i = 0;
    while (i < 7) {
        const currentDayDate = new Date(currentDayFullDate).getDate();
        const currentDayMonth = new Date(currentDayFullDate).getMonth();
        const currentDayYear = new Date(currentDayFullDate).getFullYear();
        console.log(currentDayDate);

        tasks.forEach((task: Task) => {
            const taskFullDate = new Date(task.initialDate);
            const taskDate = taskFullDate.getDate();
            const taskMonth = taskFullDate.getMonth();
            const taskYear = taskFullDate.getFullYear();

            if (currentDayDate === taskDate &&
                currentDayMonth === taskMonth &&
                currentDayYear === taskYear) {
                printTasks(task);
            }
        })
        currentDayFullDate = (currentDayFullDate + 24 * 60 * 60000);
        i++;
    }

}

function printTasks(task: Task) {

    const fullDate = new Date(task.initialDate);
    const weekDay = fullDate.getDay();
    const taskSection = document.querySelector(`#day-task-section-${weekDay}`);
    const newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("task-container");
    newTaskContainer.innerText = task.title;
    taskSection?.appendChild(newTaskContainer);
    console.log(weekDay)
}