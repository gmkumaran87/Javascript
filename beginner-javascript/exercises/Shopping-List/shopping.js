console.log('Im here');

const $items = $('.list');
let list = [];

function displayItems() {
    const newList = list
        .map(
            (el) => `<li class="items"> 
            <div class="checkbx-item">
                <input value="${el.id}" type="checkbox" 
                    ${el.complete} ? checked : ''> 
                <span class="itemName">${el.name}</span></div>
    <button value="${el.id}"id="remove" aria-label="Remove ${el.name}">&times;</button>
    </li>`
        )
        .join('');

    $items.html(newList);
}

function formActions(e) {
    e.preventDefault();
    const $inputEl = $('input[type="text"]');
    const $input = $inputEl.val();

    if (!$input) return;

    const newItem = {
        name: $input,
        id: Date.now(),
        complete: false,
    };

    list.push(newItem);
    $('#myForm').trigger('reset');
    $items.trigger('itemsUpdated');
}

function storeToLocal() {
    console.log('In Local Storage');
    localStorage.setItem('items', JSON.stringify(list));
}

function receiveFromStorage() {
    const restoredItems = JSON.parse(localStorage.getItem('items'));
    if (restoredItems) {
        list.push(...restoredItems);
        $items.trigger('itemsUpdated');
    }
}

function confirmItem(id) {
    console.log('Items confirmed');
    console.log(list[0].id);
    const confirmed = list.find((el) => el.id === id);
    console.log(confirmed);
    confirmed.complete = !confirmed.complete;
    $items.trigger('itemsUpdated');
}

function deleteItem(id) {
    console.log('Delete item');
    const deletedList = list.filter((el) => el.id !== id);
    list = deletedList;
    $items.trigger('itemsUpdated');
}

$('#submit').on('click', formActions);
$items.on('itemsUpdated', displayItems);
$items.on('itemsUpdated', storeToLocal);

receiveFromStorage();

$items.on('click', function(e) {
    const id = e.target.value;

    if (e.target.matches(`input[value="${id}"]`)) {
        confirmItem(parseInt(id));
    } else if (e.target.matches(`button`)) {
        deleteItem(parseInt(id));
    }
});