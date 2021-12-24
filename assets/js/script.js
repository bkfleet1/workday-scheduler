const currentTime = moment();
const currentHour = moment().hour();

window.onload = function () {


    displayCurrentDate(currentTime);
    displayCurrentTime(currentTime);
    displayBusinessHours(hour);
}

function displayCurrentDate(currentTime) {
    document.getElementById("currentDay").textContent = currentTime.format("dddd, MMMM DD, YYYY");
};

function displayCurrentTime(currentTime) {
    document.getElementById("currentTime").textContent = currentTime.format("h:m:s A");
};


function displayBusinessHours(hour) {
    for (let i = 8; i < 17; i++) {
    const timeSlotBlock = timeSlotBlocks(hour);
    const timeSlotRow = timeSlotRows(hour);
    const timeSlotHour = hourItem(hour);
    const timeSlotText = textAreaItem(hour, currentHour);
    const saveBtn = saveBtnItem(hour);
    document.querySelector('.container').appendChild(timeSlotBlock);
    document.querySelector.timeSlotBlock.appendChild(timeSlotRow);
    document.querySelector.timeSlotRow.appendChild(timeSlotHour,timeSlotText,saveBtn);  

    }

function timeSlotBlocks(hour) {
    const timeSlotBlocks = document.createElement("div");
    timeSlotBlocks.classList.add("row","time-slot-block");
    timeSlotBlocks.id = "timeSlotBlock-${hour}";
    return timeSlotBlocks;
}

function timeSlotRows(hour,timeSlotHour,timeSlotText,saveBtn) {
    const timeSlotRows = document.createElement("div");
    timeSlotRows.classList.add("col-12")
    timeSlotRows.id = "timeSlotRow-${hour}"
    
    return timeSlotRows;
}


function hourItem(hour) {
    const timeSlotHour = document.createElement("div");
    timeSlotHour.classList.add("hour","col-md-1","d-flex","justify-content-end","pt-3");
    timeSlotHour.textContent = hour
    return timeSlotHour;
}

/* function displayHour(hour) {
    const stringHour = toString(hour);
    return displayHour(stringHour).format("hA")
} */




function textAreaItem(hour, currentHour) {
    const timeSlotText = document.createElement("div");
    timeSlotText.classList.add(textAreaItemBG(hour, currentHour), "col-md-10");
    return timeSlotText;
}

function textAreaItemBG(hour, currentHour) {
    if (hour = currentHour) {
        return "current"
    } else if (hour > currentHour) {
        return "future"
    }
    else
        return "past"
}


function saveBtnItem(hour) {
    const saveBtn = document.createElement("div");
    saveBtn.classList.add("saveBtn", "col-md-1");
    saveBtn.setAttribute("data-hour", hour);
    saveBtn.innerHTML = '<i class = "fas fas-save"></i>';
    return saveBtn;
}



};