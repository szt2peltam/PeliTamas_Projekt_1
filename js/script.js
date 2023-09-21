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
    console.log(a.childNodes[1].childNodes[7].innerText);
    console.log(a.childNodes[3].innerText);
}

function AddNewToDo(dayIndex){
    console.log(dayIndex);
    DayContainers[dayIndex].insertAdjacentHTML("beforeend",`<div class="todo" data-ToDoCount="${ToDoCount}">
                                                            <div>
                                                                <div>Mettől:</div>
                                                                <div id="from">00:00</div>
                                                                <div>Meddig:</div>
                                                                <div id="to">24:00</div>
                                                            </div>
                                                            <div id="lesson">Óraneve</div>
                                                            </div>`) ;


    AddNewToDoElementToList(ToDoCount);
    ToDoCount++;
}

function CloseModal(){
    Modal.classList.remove("visible");
    Modal.classList.add("not-visible");
}

function OpenModal(){
    Modal.classList.add("visible");
    Modal.classList.remove("not-visible");

}
const SaveButton = document.querySelector(".save");
function ToDoClicked(ToDoNumber){

    OpenModal();
    SaveButton.addEventListener("click", function EventListener(){
        SaveData(ToDoNumber)
        this.removeEventListener("click", EventListener);
        CloseModal();
    })
}

const FromInput = document.querySelector(".from");
const ToInput = document.querySelector(".to");
const LessonInput = document.querySelector(".lesson");

let element3
function SaveData(ToDoNumber){
    if(FromInput.value == "") return;
    if(ToInput.value == "") return;
    if(LessonInput.value == "") return;


    ListOfTodoElements.forEach(element => {
        if(element.dataset.todocount == ToDoNumber){
            element.childNodes[1].childNodes[3].innerText = FromInput.value;
            element.childNodes[1].childNodes[7].innerText = ToInput.value;
            element.childNodes[3].innerText = LessonInput.value;
        }
    });

}


