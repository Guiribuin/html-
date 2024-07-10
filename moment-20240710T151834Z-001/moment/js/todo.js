const toDoForm= document.getElementById("todo-form");
const toDoInput =toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

function deleteTodo(event){
    const li =event.target.parentElement;
    li.remove();

}

function paintTodo(newTodo){
   const li =document.createElement("li");//HTML 문서에서 지정한 li의 요소 생성
   const span =document.createElement("span");//HTML 문서에서 지정한 span의 요소 생성
   span.innerText=newTodo;
    const button=document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", deleteTodo);
   li.appendChild(span);
   li.appendChild(button);//새로운 요소를 자식 요소로 추가하는 것
   toDoList.appendChild(li);
}



function handleTodoSumit(event){
event.preventDefault();
const newTodo =toDoInput.value;
toDoInput.value="";
paintTodo(newTodo);


}

toDoForm.addEventListener("submit",handleTodoSumit);