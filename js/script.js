class Todo{

    constructor(){
        this.from = "00:00";
        this.to = "24:00";
        this.lesson = "Óra"
    }
}


let ListOfTodoElements = []



let ToDoCount = 0;

const DayContainers = document.querySelectorAll(".day-todos-container");
const AddButtons = document.querySelectorAll(".button");
const Modal = document.querySelector(".modal");



AddButtons.forEach(element => { element.addEventListener("click", (element) => {
    AddNewToDo(element.currentTarget.dataset.dayindex)
})
    
});


function AddNewToDoElementToList(toDoNumber){

    let a = document.querySelector(`[data-todocount="${toDoNumber}"]`)
    ListOfTodoElements.push(a)
    a.addEventListener("click", (element) => {
        ToDoClicked(toDoNumber);
    })
}

function AddNewToDo(dayIndex){
    console.log(dayIndex);
    DayContainers[dayIndex].insertAdjacentHTML("beforeend",`        <div class="todo" data-ToDoCount="${ToDoCount}">
                                                                        <div id="from">00:00</div>
                                                                        <div id="lesson">Óraneve</div>
                                                                        <div id="to">24:00</div>
                                                                    </div>
`) ;


    AddNewToDoElementToList(ToDoCount);
    ToDoCount++;
}

function CloseModal(element, listener){
    Modal.classList.remove("visible");
    Modal.classList.add("not-visible");
    element.removeEventListener("click",listener)
}


function OpenModal(){
    Modal.classList.add("visible");
    Modal.classList.remove("not-visible");
    colorInput = 0;
    Colors.forEach(element => {
        element.classList.remove("isSelected")
    });
}
let SaveButton = document.querySelector(".save");
function ToDoClicked(ToDoNumber){

    OpenModal();
    SaveButton.addEventListener("click", function EventListener(){
        SaveData(ToDoNumber)
        this.removeEventListener("click", EventListener);
        CloseModal(this, EventListener);
        DeleteBtn.replaceWith(DeleteBtn.cloneNode(true))
        DeleteBtn = document.querySelector(".delete")
    })

    DeleteBtn.addEventListener("click", function EventListener() {
        Delete(ToDoNumber);
        this.removeEventListener("click", EventListener);
        CloseModal(this,EventListener);
        SaveButton.replaceWith(SaveButton.cloneNode(true))
        SaveButton = document.querySelector(".save")

    })
}
let colorInput = 0;
const Colors = document.querySelectorAll(".color")

Colors.forEach(element => {
    element.addEventListener("click", (e) =>{
        colorInput = e.currentTarget.dataset.color;
        Colors.forEach(element => {
            if(element.dataset.color == e.currentTarget.dataset.color){
                element.classList.add("isSelected");
            }else{
                element.classList.remove("isSelected");
            }
            
        });
    })
});
const FromInput = document.querySelector(".from");
const ToInput = document.querySelector(".to");
const LessonInput = document.querySelector(".lesson");

let element3
function SaveData(ToDoNumber){
    if(FromInput.value == "") return;
    if(ToInput.value == "") return;
    if(LessonInput.value == "") return;
    if(colorInput == 0) return;

    ListOfTodoElements.forEach(element => {
        if(element.dataset.todocount == ToDoNumber){
            element.className = "";
            element.classList.add("todo")
            element.classList.add(`box-shadow-${colorInput}`)
            element.childNodes[1].innerText = FromInput.value;
            element.childNodes[5].innerText = ToInput.value;
            element.childNodes[3].innerText = LessonInput.value;
        }
    });

}



let DeleteBtn = document.querySelector(".delete")


function Delete(ToDoNumber) {
    ListOfTodoElements.forEach(element => {
        if(element.dataset.todocount == ToDoNumber){
            element.remove();
        }
});
}

let theme = 1;

let ThemeButton = document.querySelector(".theme-button");
ThemeButton.addEventListener("click", ChangeTheme);
var rootElement = document.querySelector(':root');

/* --body-bg-color:#222121;

    /* --card-bg-color:#201d1d; 

    /* --button-bg-color:#201d1d; 
    
    /* --button-bg-color-hover:#2b2727; 

        /* --text-color:#d3d4dae0; 


        /* --modal-bg-color:#4a4e694a; 

*/


function ChangeTheme() {
    theme % 2 == 0 ? theme-- : theme++
    
    if(theme == 2){
        rootElement.style.setProperty("--body-bg-color","#ffffff");
        rootElement.style.setProperty("--card-bg-color","#f8e9e9");
        rootElement.style.setProperty("--button-bg-color","#f8e9e9");
        rootElement.style.setProperty("--button-bg-color-hover","#a79f9f");
        rootElement.style.setProperty("--text-color","#000000e0");
        rootElement.style.setProperty("--modal-bg-color","#20212de6");

        ListOfTodoElements.forEach(element => {
            if(element.classList.contains("box-shadow-1")){
                element.classList.add("white-todo")
                element.classList.add("box-shadow-1-white")
                element.classList.add("box-shadow-1-white-hover")
            }
            if(element.classList.contains("box-shadow-2")){
                element.classList.add("white-todo")
                element.classList.add("box-shadow-2-white")
                element.classList.add("box-shadow-2-white-hover")


            }
            if(element.classList.contains("box-shadow-3")){
                element.classList.add("white-todo")
                element.classList.add("box-shadow-3-white")
                element.classList.add("box-shadow-3-white-hover")


            }
            if(element.classList.contains("box-shadow-4")){
                element.classList.add("white-todo")
                element.classList.add("box-shadow-4-white")
                element.classList.add("box-shadow-4-white-hover")


            }
        });


    }else{
        rootElement.style.setProperty("--body-bg-color","#222121");
        rootElement.style.setProperty("--card-bg-color","#201d1d");
        rootElement.style.setProperty("--button-bg-color","#201d1d");
        rootElement.style.setProperty("--button-bg-color-hover","#2b2727");
        rootElement.style.setProperty("--text-color","#d3d4dae0");
        rootElement.style.setProperty("--modal-bg-color","#4a4e694a");


        ListOfTodoElements.forEach(element => {
            if(element.classList.contains("box-shadow-1")){
                element.classList.remove("white-todo")
                element.classList.remove("box-shadow-1-white")
                element.classList.remove("box-shadow-1-white-hover")
            }
            if(element.classList.contains("box-shadow-2")){
                element.classList.remove("white-todo")
                element.classList.remove("box-shadow-2-white")
                element.classList.remove("box-shadow-2-white-hover")


            }
            if(element.classList.contains("box-shadow-3")){
                element.classList.remove("white-todo")
                element.classList.remove("box-shadow-3-white")
                element.classList.remove("box-shadow-3-white-hover")


            }
            if(element.classList.contains("box-shadow-4")){
                element.classList.remove("white-todo")
                element.classList.remove("box-shadow-4-white")
                element.classList.remove("box-shadow-4-white-hover")


            }
        });



    }
}