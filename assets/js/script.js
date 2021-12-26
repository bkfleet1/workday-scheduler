const currentTime = moment();
const currentHour = moment().hour();

displayCurrentDate(currentTime);
displayCurrentTime(currentTime);
displayBusinessHours(currentHour);




function displayCurrentDate(currentTime) {
    document.getElementById("currentDay").textContent = currentTime.format("dddd, MMMM DD, YYYY");
};

function displayCurrentTime(currentTime) {
    document.getElementById("currentTime").textContent = currentTime.format("h:m:s A");
};




function displayBusinessHours(currentHour) {
    for (let i = 8; i < 18; i++) {
        const timeSlotBlock = timeSlotBlocks(i);
        const timeSlotRow = timeSlotRows(i);
        const timeSlotHour = hourItem(i);
        const timeSlotText = textAreaItem(i, currentHour);
        const saveBtn = saveBtnItem(i);
        const timeSlotTask = taskItem(i);
 

        document.querySelector(".container").appendChild(timeSlotBlock);
        document.querySelector("#timeSlotBlock-" + i).appendChild(timeSlotRow);
        document.querySelector("#timeSlotRow-" + i).appendChild(timeSlotHour);
        document.querySelector("#timeSlotRow-" + i).appendChild(timeSlotText);
        document.querySelector("#timeSlotText-" + i).appendChild(timeSlotTask);
        document.querySelector("#timeSlotRow-" + i).appendChild(saveBtn);

    }
}

function timeSlotBlocks(i) {
    const timeSlotBlocks = document.createElement("div");
    timeSlotBlocks.classList.add("row");
    timeSlotBlocks.id = "timeSlotBlock-" + i;
    console.log(timeSlotBlocks);
    return timeSlotBlocks;
}

function timeSlotRows(i) {
    const timeSlotRows = document.createElement("div");
    timeSlotRows.classList.add("col-12", "d-flex");
    timeSlotRows.id = "timeSlotRow-" + i;
    return timeSlotRows;
}


function hourItem(i) {
    const timeSlotHour = document.createElement("div");
    timeSlotHour.classList.add("hour", "col-md-1", "justify-content-end", "pt-3", "font-weight-bold");
    timeSlotHour.textContent = formatHour(i);
    timeSlotHour.id = "timeSlotHour-" + i;
    return timeSlotHour;
}

function formatHour(i) {
    if (i == 8 || i == "8") { return i + ":00 AM" }
    else if (i == 9 || i == "9") { return i + ":00 AM" }
    else if (i == 10 || i == "10") { return i + ":00 AM" }
    else if (i == 11 || i == "11") { return i + ":00 AM" }
    else if (i == 12 || i == "12") { return i + ":00 PM" }
    else if (i == 13 || i == "13") { return i + ":00 PM" }
    else if (i == 14 || i == "14") { return i + ":00 PM" }
    else if (i == 15 || i == "15") { return i + ":00 PM" }
    else if (i == 16 || i == "16") { return i + ":00 PM" }
    else if (i == 17 || i == "17") { return i + ":00 PM" }
    else return i
}


function textAreaItem(i, currentHour) {
    const timeSlotText = document.createElement("div");
    timeSlotText.classList.add(textAreaItemBG(i, currentHour), "col-md-10", "task-item");
    timeSlotText.id = "timeSlotText-" + i;
 //   timeSlotText.innerHTML = '<textarea></textarea>';
    return timeSlotText;}

   function taskItem(i) {
        const timeSlotTask = document.createElement("textarea");
        timeSlotTask.classList.add("task");
        timeSlotTask.id = "timeSlotTask-" + i;
        timeSlotTask.text = "";
        return timeSlotTask;
}

function textAreaItemBG(i, currentHour) {
    if (i == currentHour) {
        return "present"
    } else if (i > currentHour) {
        return "future"
    }
    else
        return "past"

}


function saveBtnItem(i) {
    const saveBtn = document.createElement("div");
    saveBtn.classList.add("saveBtn", "col-md-1");
    saveBtn.id = "saveBtnItem-" + i;
    saveBtn.innerHTML = '<i class="far fa-save fa-2x"></i>';
    return saveBtn;
};

$(document).ready(function () {
    $('.saveBtn').on('click',function () {
        var savedTimeSlot = $(this).parent().attr('id');
        var savedTask = $(this).siblings('task-item').val();
        console.log(savedTimeSlot);
        console.log(savedTask);
        localStorage.setItem(savedTimeSlot, savedTask);
    });


    $('textarea').each(function () {
        var storedTask = $(this).parent().attr('id');
        var getStored = localStorage.getItem(storedTask);
        if (getStored !== null) {
            $(this).val(getStored);
        }
    });
});