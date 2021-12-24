const currentTime = moment();
const currentHour = moment().hour();
displayCurrentDate(currentTime);
    displayCurrentTime(currentTime);
    displayBusinessHours(currentHour);
//window.onload = function () {


  //  displayCurrentDate(currentTime);
   // displayCurrentTime(currentTime);
  //  displayBusinessHours(currentHour);

//}

function displayCurrentDate(currentTime) {
    document.getElementById("currentDay").textContent = currentTime.format("dddd, MMMM DD, YYYY");
};

function displayCurrentTime(currentTime) {
    document.getElementById("currentTime").textContent = currentTime.format("h:m:s A");
};




function displayBusinessHours(currentHour) {
    for (let i = 8; i < 17; i++) {
    const timeSlotBlock = timeSlotBlocks(i);
    const timeSlotRow = timeSlotRows(i);
    const timeSlotHour = hourItem(i);
    const timeSlotText = textAreaItem(i, currentHour);
    const saveBtn = saveBtnItem(i);
    //const timeSlots = [timeSlotHour,timeSlotText,saveBtn];
    
    document.querySelector(".container").appendChild(timeSlotBlock);
    document.querySelector("#timeSlotBlock-"+ i).appendChild(timeSlotRow);
    document.querySelector("#timeSlotRow-"+ i).appendChild(timeSlotHour);
    document.querySelector("#timeSlotRow-"+ i).appendChild(timeSlotText);
    document.querySelector("#timeSlotRow-"+ i).appendChild(saveBtn);
    }
}

function timeSlotBlocks(i) {
    const timeSlotBlocks = document.createElement("div");
    timeSlotBlocks.classList.add("row");
    timeSlotBlocks.id = "timeSlotBlock-"+ i;
    console.log(timeSlotBlocks);
    return timeSlotBlocks;
}

function timeSlotRows(i) {
    const timeSlotRows = document.createElement("div");
    timeSlotRows.classList.add("col-12","d-flex");
    timeSlotRows.id = "timeSlotRow-"+ i;
    return timeSlotRows;
}


function hourItem(i) {
    const timeSlotHour = document.createElement("div");
    timeSlotHour.classList.add("hour","col-md-1","justify-content-end","pt-3");
    timeSlotHour.textContent = i;
    timeSlotHour.id = "timeSlotHour-" + i;
    return timeSlotHour;
}

/*

function displayHour(i) {
    const stringHour = toString(i);
    return displayHour(stringHour).format("hA")
} */




function textAreaItem(i, currentHour) {
    const timeSlotText = document.createElement("div");
  //  timeSlotText.classList.add("col-md-10");
    timeSlotText.classList.add(textAreaItemBG(i, currentHour), "col-md-10");
    timeSlotText.id = "timeSlotText-" + i;
    return timeSlotText;
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