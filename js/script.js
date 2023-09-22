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

    DeleteBtn.addEventListener("click", function DeleteElement() {
        Delete(ToDoNumber);
        this.removeEventListener("click", DeleteElement);
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
            console.log(element.childNodes);
            element.childNodes[1].innerText = FromInput.value;
            element.childNodes[5].innerText = ToInput.value;
            element.childNodes[3].innerText = LessonInput.value;
        }
    });

}



const DeleteBtn = document.querySelector(".delete")


function Delete(ToDoNumber) {
    ListOfTodoElements.forEach(element => {
        if(element.dataset.todocount == ToDoNumber){
            element.remove();
        }
});
}
