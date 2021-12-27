//declares current time and current hour using moment() API
const currentTime = moment();
const currentHour = moment().hour();

// initiate functions 
displayCurrentDate(currentTime);
displayBusinessHours(currentHour);

// function formats and displays the current Date (e.g., Sunday, December 26, 2021) 
function displayCurrentDate(currentTime) {
    document.getElementById("currentDay").textContent = currentTime.format("dddd, MMMM DD, YYYY");
};

// function utilizes a for loop create the time slots dynamically for each business hour (8AM - 5PM) and assembles them under the div class "container".
function displayBusinessHours(currentHour) {
    for (let i = 8; i < 18; i++) {
        const timeSlotBlock = timeSlotBlocks(i);
        const timeSlotRow = timeSlotRows(i);
        const timeSlotHour = hourItem(i);
        const timeSlotText = textAreaItem(i, currentHour);
        const saveBtn = saveBtnItem(i);
 
        // appends the timeSlotBlock to the div with class "container", then appends the timeSlotRow to the timeSlotBlock.
        document.querySelector(".container").appendChild(timeSlotBlock);
        document.querySelector("#timeSlotBlock-" + i).appendChild(timeSlotRow);

        //appends the timeSlotHour / timeSlotText / saveBtn in the timeSlotRow
        document.querySelector("#timeSlotRow-" + i).appendChild(timeSlotHour);
        document.querySelector("#timeSlotRow-" + i).appendChild(timeSlotText);
        document.querySelector("#timeSlotRow-" + i).appendChild(saveBtn);

    }
}
// creates div for each hour and uses class "row" for bootstrap
function timeSlotBlocks(i) {
    const timeSlotBlocks = document.createElement("div");
    timeSlotBlocks.classList.add("row");
    timeSlotBlocks.id = "timeSlotBlock-" + i;
    return timeSlotBlocks;
}

// creates div for each hour, which will contain the timeSlotHour / timeSlotText / saveBtn. Uses bootstrap classes tp define width and flex aligns these elements side-by-side when appended
function timeSlotRows(i) {
    const timeSlotRows = document.createElement("div");
    timeSlotRows.classList.add("col-12", "d-flex");
    timeSlotRows.id = "timeSlotRow-" + i;
    return timeSlotRows;
}

// creates hour div and adds classes used by css & bootstrap
function hourItem(i) {
    const timeSlotHour = document.createElement("div");
    timeSlotHour.classList.add("hour", "col-md-1", "justify-content-end", "pt-3", "font-weight-bold");
    timeSlotHour.textContent = formatHour(i);
    timeSlotHour.id = "timeSlotHour-" + i;
    return timeSlotHour;
}

// simple reformatting of hour (i) from military time to hour AM/PM. 
function formatHour(i) {
    if (i == 8 || i == "8") { return "8:00 AM" }
    else if (i == 9 || i == "9") { return "9:00 AM" }
    else if (i == 10 || i == "10") { return "10:00 AM" }
    else if (i == 11 || i == "11") { return "11:00 AM" }
    else if (i == 12 || i == "12") { return "12:00 PM" }
    else if (i == 13 || i == "13") { return "1:00 PM" }
    else if (i == 14 || i == "14") { return "2:00 PM" }
    else if (i == 15 || i == "15") { return "3:00 PM" }
    else if (i == 16 || i == "16") { return "4:00 PM" }
    else if (i == 17 || i == "17") { return "5:00 PM" }
    else return i
}

// creates the text area and calls textAreaItemBG function to insert class of either past, current, and present for CSS background change. Class description is used by CSS and class "task-item" is used by localStorage save & recall fuction
function textAreaItem(i, currentHour) {
    const timeSlotText = document.createElement("textarea");
    timeSlotText.classList.add(textAreaItemBG(i, currentHour), "col-md-10", "task-item","description");
    timeSlotText.id = "timeSlotText-" + i;
 //   timeSlotText.text = "";
     return timeSlotText;
}

// changew textAreaItem background to reflect past, current, and present using currentHour for each timeSlotRow & hour
function textAreaItemBG(i, currentHour) {
    if (i == currentHour) {
        return "present"
    } else if (i > currentHour) {
        return "future"
    }
    else
        return "past"

}

// creates div and adds class to allow bootstrap to control widh and css to control annimation. innerHTML adds save symbol from font awesome. 
function saveBtnItem(i) {
    const saveBtn = document.createElement("div");
    saveBtn.classList.add("saveBtn", "col-md-1");
    saveBtn.id = "saveBtnItem-" + i;
    saveBtn.innerHTML = '<i class="far fa-save fa-2x"></i>';
    return saveBtn;
};

// on saveBtn click saving the parent object's ID ("timeSlotRow-" + i) and content of sibling "textarea" to localStorage.
$(document).ready(function () {
    $('.saveBtn').on('click',function () {
        var savedTimeSlotRow = $(this).parent().attr('id');
        var savedtextAreaItem = $(this).siblings('textarea').val();
        localStorage.setItem(savedTimeSlotRow, savedtextAreaItem);
    });

// recalls any saved tasks by the parent object's ID ("timeSlotRow-" + i) and content of sibling "textarea" from localStorage on document load (ready).
    $('textarea').each(function () {
        var storedTask = $(this).parent().attr('id');
        var getStored = localStorage.getItem(storedTask);
        if (getStored !== null) {
            $(this).val(getStored);
        }
    });
});