var body = document.body;

var container = document.createAttribute('class');
container.value = 'container';

var editmode = document.createAttribute('class');
editmode.value = 'editMode';

var edit = document.createAttribute('class');
edit.value = 'edit';
var editedit = edit.cloneNode(true);
var editcomplete = edit.cloneNode(true);

var del = document.createAttribute('class');
del.value = 'delete';
var deledit = del.cloneNode(true);
var delcomplete = del.cloneNode(true);

var mainDiv = document.createElement('div');
mainDiv.setAttributeNode(container);
body.appendChild(mainDiv);

var p = document.createElement('p');
mainDiv.appendChild(p);
var label = document.createElement('label');
label.setAttribute('for', 'new-task');
var labeltext = document.createTextNode('Add Item');
label.appendChild(labeltext);
p.appendChild(label);
var addItemInput = document.createElement('input');
addItemInput.setAttribute('id', 'new-task');
addItemInput.setAttribute('type', 'text');
p.appendChild(addItemInput);
var addButton = document.createElement('button');
var addButtonText = document.createTextNode('Add');
addButton.appendChild(addButtonText);
p.appendChild(addButton);

var h3Todo = document.createElement('h3');
var h3TodoText = document.createTextNode('Todo');
h3Todo.appendChild(h3TodoText);
mainDiv.appendChild(h3Todo);

var ulTodo = document.createElement('ul');
ulTodo.setAttribute('id', 'incomplete-tasks');
mainDiv.appendChild(ulTodo);

var liTodo = document.createElement('li');
ulTodo.appendChild(liTodo);

var inputTodoCheckbox = document.createElement('input');
inputTodoCheckbox.setAttribute('type', 'checkbox');
liTodo.appendChild(inputTodoCheckbox);

var labelTodo = document.createElement('label');
var labelTodoText = document.createTextNode('Pay Bills');
labelTodo.appendChild(labelTodoText);
liTodo.appendChild(labelTodo);

var inputTodoText = document.createElement('input');
inputTodoText.setAttribute('type', 'text');
liTodo.appendChild(inputTodoText);

var buttonEditTodo = document.createElement('button');
var buttonEditTodoText = document.createTextNode('Edit');
buttonEditTodo.setAttributeNode(edit);
buttonEditTodo.appendChild(buttonEditTodoText);
liTodo.appendChild(buttonEditTodo);

var buttonDeleteTodo = document.createElement('button');
var buttonDeleteTodoText = document.createTextNode('Delete');
buttonDeleteTodo.setAttributeNode(del);
buttonDeleteTodo.appendChild(buttonDeleteTodoText);
liTodo.appendChild(buttonDeleteTodo);

var liTodoEdit = document.createElement('li');
liTodoEdit.setAttributeNode(editmode);
ulTodo.appendChild(liTodoEdit);

var inputTodoEditCheckbox = document.createElement('input');
inputTodoEditCheckbox.setAttribute('type', 'checkbox');
liTodoEdit.appendChild(inputTodoEditCheckbox);

var labelTodoEdit = document.createElement('label');
var labelTodoEditText = document.createTextNode('Go Shopping');
labelTodoEdit.appendChild(labelTodoEditText);
liTodoEdit.appendChild(labelTodoEdit);

var inputTodoEditText = document.createElement('input');
inputTodoEditText.setAttribute('type', 'text');
inputTodoEditText.setAttribute('value', 'Go Shopping');
liTodoEdit.appendChild(inputTodoEditText);

var buttonEditTodoEdit = document.createElement('button');
var buttonEditTodoEditText = document.createTextNode('Edit');
buttonEditTodoEdit.setAttributeNode(editedit);
buttonEditTodoEdit.appendChild(buttonEditTodoEditText);
liTodoEdit.appendChild(buttonEditTodoEdit);

var buttonDeleteTodoEdit = document.createElement('button');
var buttonDeleteTodoEditText = document.createTextNode('Delete');
buttonDeleteTodoEdit.setAttributeNode(deledit);
buttonDeleteTodoEdit.appendChild(buttonDeleteTodoEditText);
liTodoEdit.appendChild(buttonDeleteTodoEdit);

var h3Complete = document.createElement('h3');
var h3CompleteText = document.createTextNode('complete');
h3Complete.appendChild(h3CompleteText);
mainDiv.appendChild(h3Complete);

var ulComplete = document.createElement('ul');
ulComplete.setAttribute('id', 'completed-tasks');
mainDiv.appendChild(ulComplete);

var liComplete = document.createElement('li');
ulComplete.appendChild(liComplete);

var inputCompleteCheckbox = document.createElement('input');
inputCompleteCheckbox.setAttribute('type', 'checkbox');
liComplete.appendChild(inputCompleteCheckbox);

var labelComplete = document.createElement('label');
var labelCompleteText = document.createTextNode('See the Doctor');
labelComplete.appendChild(labelCompleteText);
liComplete.appendChild(labelComplete);

var inputCompleteText = document.createElement('input');
inputCompleteText.setAttribute('type', 'text');
liComplete.appendChild(inputCompleteText);

var buttonEditComplete = document.createElement('button');
var buttonEditCompleteText = document.createTextNode('edit');
buttonEditComplete.setAttributeNode(editcomplete);
buttonEditComplete.appendChild(buttonEditCompleteText);
liComplete.appendChild(buttonEditComplete);

var buttonDeleteComplete = document.createElement('button');
var buttonDeleteCompleteText = document.createTextNode('Delete');
buttonDeleteComplete.setAttributeNode(delcomplete);
buttonDeleteComplete.appendChild(buttonDeleteCompleteText);
liComplete.appendChild(buttonDeleteComplete);
