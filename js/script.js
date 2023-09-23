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
