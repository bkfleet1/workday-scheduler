# workday scheduler

# Application Scope
Create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
The starter code uses the Moment.js (Links to an external site.) library to work with date and time, but feel free to use a different JavaScript solution to handle this functionality since Moment.js is considered a "legacy" project. Starter code is available at: https://github.com/coding-boot-camp/super-disco


# User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively


# Acceptance Criteria
1. When I open the planner, then the current day is displayed at the top of the calendar;
2. When I scroll down, then I am presented with time blocks for standard business hours;
3. When I view the time blocks for that day, then each time block is color-coded to indicate whether it is in the past, present, or future;
4. When I click into a time block, then I can enter an event;
5. When I click the save button for that time block, then the text for that event is saved in local storage; and
6. When I refresh the page, then the saved events persist.


# Repository
The developer performed the following steps to initiate the project.

1. Logged into developers GitHub portal
2. Created a new repository named "workday-scheduler" and a readme.md file
3. Enabled the repository’s web page features, which are found under the repository’s settings > pages
4. Opened Git Bash terminal entered the following commands:
>> - cd to desktop/projects
>> - git clone git@github.com:bkelley1/workday-scheduler.git (clone developer's repository)
5. Opened GitHub portal for coding-boot-camp, which is located at: https://github.com/coding-boot-camp/super-disco
6. Copied the coding-boot-camp/super-disco repository SSH clone link and returned to the Git Bash terminal entering the following command:
>> - git clone git@github.com:coding-boot-camp/super-disco.git (clone starter code repository)
7. - The cloned files from the coding-boot-camp/super-disco repository were then copied to the developer's local repository of "workday-scheduler". The files copied included:
>> - README.md
>> - .gitignore
>> - index.html
>> - style.css
8. The .gitignore was edited to includes the following files and file types:
>> - .DS_Store
>> - .log
>> - .lock
>> - .tmp
>> - .o
>> - .class
>> - .vsdx
>> - .psd
>> - .ai
>> - .doc
>> - .docx
>> - Thumbs.db
6. Opened Git Bash terminal entered the following commands:
>> - cd to desktop/projects/workday-scheduler
>> - git add - A
>> - git commit -m "initial commit"
>> - git push origin main



# Application & Code Repository
A working version of the application and application files (repository) are available at the following locations.

> - Deployed application: https://bkfleet1.github.io/workday-scheduler/
>>> [deployed application](./assets/images/application.png)

> - GitHub repository: https://github.com/bkfleet1/workday-scheduler
>>> [GitHub repository image](./assets/images/repository.png)


# Application Structure
The application's structure consists of file components: HTML, Javascript, and CSS files. The CSS file contained in this project is the original file and is unchanged.  

## HTML Structure
The application's HTML page (index.html) consists of the following structure.

> - head
> - body
>> - header class="jumbotron"
>>> - h1 class="display-3"
>>> - p class="lead"
>>> - id="currentDay" (displays current date using script.js function = displayCurrentDate)
>> - div class="container" 
>>> - div class = "row" (created by script.js function = timeSlotBlocks)
>>>> - div class = "col-12 d-flex" (created by script.js function = timeSlotRows)
>>>>> - div class = "hour col-md-1 ..." (created by script.js function = hourItem)
>>>>> - textarea class = "col-md-10 task-item description ..." (created by script.js function = textAreaItem)
>>>>> - div class = "saveBtn col-md-1" (created by script.js function = saveBtnItem)
>> - script (javascript sources)

The following graphic further illustrates the site structure. Note that there are several elements that are dynamically created by the script.js file.
[workday schedule application architecture](./assets/images/workday-design.png) 


### HTML file Modifications
The HTML file remains largely unchanged from its original code set, except for the following modifications.
1. - The location of the "style.css" file in the head element.
[Modification of the CSS file location](./assets/images/html-1.png) 

2. - The addition of javascript source. (i.e., src="./assets/js/script.js")
[Additon of the script.js file](./assets/images/html-2.png) 


## Javascript
The script.js file is not a component of the original code set and was assembled by the developer. The following narrative describes key variables and functions found in the file and their purpose.

### Variables
1. const currentTime - Utilizes the moment function to provide the users current date and time upon application launch. The source of this function is an external AJAX CDN defined as a source in the "script" section of the index.html.
2. const currentHour = Utilizes the same moment function as "const currentTime", but reformat the datetime returned to provide only the current hour (0-23).


### Functions
1. displayCurrentDate - using the currentTime variable the function formats and displays the current Date (e.g., Sunday, December 26, 2021)

2. displayBusinessHours - utilizes a for loop create the time slots dynamically for each business hour (8AM - 5PM) and assembles them under the div class "container". The for loop is executed once for each time slot starting at 8 (i.e., 8AM) and ends at 17 (5PM). For each time slot it executes the following variables & functions:
>> const timeSlotBlock = timeSlotBlocks
>> const timeSlotRow = timeSlotRows
>> const timeSlotHour = hourItem
>> const timeSlotText = textAreaItem
>> const saveBtn = saveBtnItem 

3. timeSlotBlocks - creates a div for each hour (i.e, 8AM-5PM) and includes the class "row". Bootstrap, an external CSS API source used for formatting various application elements requires a div element with a class = "row" to be declared and nested within the an element with a class = "container" to work properly. As previously noted, the index.html included  a div with class="container". The document.querySelector(".container").appendChild(timeSlotBlock) contained in the displayBusinessHours function appends this div to the "container" div. The endpoint for Bootstrap is defined in the "head" element of the html.

4. timeSlotRows - creates a div for each hour (i.e, 8AM-5PM) and includes the bootstrap classes ""col-12 d-flex"". The document.querySelector("#timeSlotBlock-" + i).appendChild(timeSlotRow) contained in the displayBusinessHours function appends this div to the "row" div created by the timeSlotBlocks function. The purpose of creating this div is to serve as a wrapper for the elements created by the timeSlotHour, timeSlotText, saveBtn fuctions. 

5. hourItem - creates a div for each hour (i.e, 8AM-5PM) and includes several classes used by the application to perform format styling defined within the style.css file and bootstrap. The "col-md-1" class is included to limit the horizontal width of this div to 1:12 of the screen's realestate. Moreover, the text defined within this div (i.e., a business hour) is formatted by the formatHour function. The document.querySelector("#timeSlotRow-" + i).appendChild(timeSlotHour) contained in the displayBusinessHours function appends this div to the div created by the timeSlotRows function.

6. textAreaItem - creates a textarea for each hour (i.e, 8AM-5PM) and includes several classes used by the application to perform format styling defined withpn the style.css file and bootstrap. The "col-md-10" class is included to limit the horizontal width of this div to 10:12 or 1:5 of the screen's realestate. The textAreaItemBG function is also called within this function to determine if the currentHour is in the "past","future", or "present" and adds the response as a class to the element. This designation of either "past","future", or "present" within the element is used to style the background color of the field as defined in the application's style.css file. The "description class is also used for styling and defined in the application's style.css file. 

This element is created as a "textarea" to allow the enduser to click in the area and add text. The "task-item" class is also used by other application functions to save and retrieve text entered and saved by the user.

The document.querySelector("#timeSlotRow-" + i).appendChild(timeSlotText) contained in the displayBusinessHours function appends this textarea to the div created by the timeSlotRows function.

7. saveBtnItem -   creates a div for each hour (i.e, 8AM-5PM) and includes several classes used by the application to perform format styling defined within the style.css file and bootstrap. The "col-md-1" class is included to limit the horizontal width of this div to 1:12 of the screen's realestate. The function also innerHTML syntax that adds a symbol form font awesome; the font awesome endpoint is defined in the "head" of the index.html.  

The document.querySelector("#timeSlotRow-" + i).appendChild(saveBtn) contained in the displayBusinessHours function appends this div to the div created by the timeSlotRows function.

8. document.ready - there are two jquery-enabled functions initiated upon document.ready: (1) save text, and (2) retrieve text. The following describes each of these event triggered functions.

>>> 8.a. saveBtn.on'click' - utilizes jquery's on.click event function initiate saving text entered by a user to the localStorage. The "click" event is associated with the "saveBtn" class on the div created by the saveBtnItem function. By using the "this" operator and the parent().attr('id') the parent element's id is captured. The "this" operator is also used with siblings('textarea').val() to capture the text entered by the user in the textarea created by the textAreaItem, as sibling to the saveBtn div and wrapped within the same parent div (i.e., div created by timeSlotRows function). Both the parent id and textarea content are saved to the end-user's localStorage using the setItem operator when the user "click"s on the save div. If the user doesn't "click" on the saveBtn adjacent to the "textarea" modified by the user, then the text is not saved and will be lost on page refresh or browser closing.

>>> 8.b. textarea.each - retrieves each "textarea" saved in localStorage on document.ready. Using the saved parent id, the function retrieves the associated textarea from localStorage using the getItem operator. Since the parent id is unique for each hour (i.e., timeSlotRow) and there is only one textarea nested within the parent, the fuction uses these two variables to populate the correct html element.

# Developer Notes on Acceptance Criteria
The following information addresses deployed application's fulfillment of the acceptance criteria.

> - Requirement 1. When I open the planner, then the current day is displayed at the top of the calendar
>>> The following image illustrates the display of the current date at the top of the calendar upon launch.
>>> [current date displayed](./assets/images/application-1.png)

> - Requirement 2. When I scroll down, then I am presented with time blocks for standard business hours.
>>> The image below demonstrates presentation of a time block for each standard business houer (8AM - 5PM).
>>> [individual time blocks displayed](./assets/images/application-2.png)

> - Requirement 3. When I view the time blocks for that day, then each time block is color-coded to indicate whether it is in the past, present, or future.
>>> The image below demonstrates the color-coding of each block to indicate whether it is in the past, present, or future.
>>> [color coded blocks displayed](./assets/images/application-3.png)

> - Requirement 4. When I click into a time block, then I can enter an event.
>>> The image below demonstrates the ability to enter text into a time block textarea.
>>> [enter data into textarea](./assets/images/application-vid.png)

> - Requirement 5. When I click the save button for that time block, then the text for that event is saved in local storage.
>>> The image below illustrates the data saved to the local storage upon save. Also shown is text that is not saved. The save data is shown in the chrome console on the right side.
>>> [save data to localstorage](./assets/images/application-vid.png)

> - Requirement 6. When I refresh the page, then the saved events persist.
>>> The image below demonstrates retrieval of data that is saved, but also data is not saved is not persistent.
>>> [retrieve data from localstorage](./assets/images/application-vid.png)