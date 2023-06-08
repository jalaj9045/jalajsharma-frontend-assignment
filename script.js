
// function for allow to drop the item 
function allowDrop(event) {
  event.preventDefault();
}
// function for allow to drag into container item 
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}


// after drop event 
function drop(event) {
  event.preventDefault();
  var fetchData = event.dataTransfer.getData("text");
  var droppedItem = document.getElementById(fetchData);
  event.target.appendChild(droppedItem);

  alert("Item dropped successfully!");
}

// reset button functionality 
function resetContainers() {
  var container1 = document.getElementById("blockcontainer");
  var container2 = document.getElementById("getData");

  container1.innerHTML = `
      <div id="draggable-1" class="example-draggable" draggable="true" ondragstart="drag(event)">
      item 1
      </div>
      <div id="draggable-2" class="example-draggable" draggable="true" ondragstart="drag(event)">
      item 2
      </div>
      <div id="draggable-3" class="example-draggable" draggable="true" ondragstart="drag(event)">
      item 3
      </div>
      <div id="draggable-4" class="example-draggable" draggable="true" ondragstart="drag(event)">
      item 4
  </div>
  `;
  container2.innerHTML = "";
}