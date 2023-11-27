const list = ['Pane', 'Latte', 'Frutta', 'Verdura', 'Carne'];
const list_container = document.getElementById('list');

let i = 0;

while (i < list.length) {
    const li = document.createElement('li');
    li.innerText = list[i];

    list_container.appendChild(li);

    i++;
}