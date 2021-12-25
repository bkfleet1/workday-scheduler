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
    if (i == 8 || i == "8") { return "8AM" }
    else if (i == 9 || i == "9") { return "9AM" }
    else if (i == 10 || i == "10") { return "10AM" }
    else if (i == 11 || i == "11") { return "11AM" }
    else if (i == 12 || i == "12") { return "12PM" }
    else if (i == 13 || i == "13") { return "1PM" }
    else if (i == 14 || i == "14") { return "2PM" }
    else if (i == 15 || i == "15") { return "3PM" }
    else if (i == 16 || i == "16") { return "4PM" }
    else if (i == 17 || i == "17") { return "5PM" }
    else return i
}


function textAreaItem(i, currentHour) {
    const timeSlotText = document.createElement("div");
    timeSlotText.classList.add(textAreaItemBG(i, currentHour), "col-md-10", "task-item");
    timeSlotText.id = "timeSlotText-" + i;
 //   timeSlotText.innerHTML = '<p></p>';
    return timeSlotText;}

   function taskItem(i) {
        const timeSlotTask = document.createElement("p");
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

    $(".task-item").on("click", function() {
        var status = $(this)
        .attr("id")
         console.log(status);

        // get current text of p element
        var text = $(this)
          .text()
          .trim();
      
        // replace p element with a new textarea
        var textInput = $("<textarea>").addClass("form-control","task").val(text);
        $(this).replaceWith(textInput);
      
        // auto focus new element
        textInput.trigger("focus");
     });

    $(".task-item").on("blur", "textarea", function() {
        // get current value of textarea
        var text = $(this).val();
      
        // get status type and position in the list
        var status = $(this)
          .closest(".task")
          .attr("id")
          .replace(".task",".task");
    
       // update task in array and re-save to localstorage
        tasks[status][index].text = text;
      
        // recreate p element
        var taskP = $("<p>")
          .addClass("m-1")
          .text(text);
      
        // replace textarea with new content
        $(this).replaceWith(taskP);
      });