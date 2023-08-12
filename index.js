var listItems;
var deleteBtn;
var addBtn = document.getElementById('toDoAdd');
var alertBox = document.querySelector('.alert-box')
var crossIcon = document.querySelector('.cross-icon')

const done = () => {
    listItems = Array.from(document.querySelectorAll('.task'));
    deleteBtn = Array.from(document.querySelectorAll('.task span'));
    for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', () => {
        listItems[i].classList.toggle('done');
    })
}

for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', () => {
        listItems[i].style.animation = "disappear .3s ease-in-out forwards";
        listItems[i].style.border = "none";
        setTimeout(() => {
            listItems[i].style.display = "none";
        }, 300);
    })
}
}

done();


addBtn.addEventListener('click', () => {
    var inputValue = document.getElementById('toDoInput').value;
    var ul = document.querySelector('.task-list');
    var li = document.createElement('LI');
    var text = document.createTextNode(inputValue);
    var span = document.createElement('SPAN');
    var iTag = document.createElement('I');
    if (inputValue == '') {
        alertBox.style.animation = "appear .5s ease-in-out forwards"
        crossIcon.addEventListener('click', () => {
            alertBox.style.animation = "disappear .5s ease-in-out forwards"
        })
    }
    else {
        iTag.classList.add('bi')
        iTag.classList.add('bi-trash3')
        span.appendChild(iTag);
        li.appendChild(text);
        li.appendChild(span);
        ul.appendChild(li);
        li.classList.add('task');
        li.classList.add('animate')
        // li.classList.add('undone')
        listItems = Array.from(document.querySelectorAll('.task'));
        deleteBtn = Array.from(document.querySelectorAll('.task span'));
        li.addEventListener('click', () => {
            li.classList.toggle('done');
        })
        for (let i = 0; i < deleteBtn.length; i++) {
            deleteBtn[i].addEventListener('click', () => {
                listItems[i].style.animation = "disappear .3s ease-in-out forwards";
                listItems[i].style.border = "none";
                setTimeout(() => {
                    listItems[i].style.display = "none";
                }, 300);
            })
        }

    }
}
)





