class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new LinkedListNode(5);
const b = new LinkedListNode(10);
const c = new LinkedListNode(12);
const d = new LinkedListNode(33);
const e = new LinkedListNode(400);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function listLinkedNodes(headOfList) {
    const head = headOfList;
    let list = [head.value];
    let element = head;
    while (element.next) {
        element = element.next;
        list.push(element.value);
    }
    console.log(element.next);
    return list;
}

const linkedListHTML = `
    <div>
        <h3>Here's our list:</h3>
        <p>${listLinkedNodes(a)}</p>
    </div>
`;
const linkedListFragment = document.createRange().createContextualFragment(linkedListHTML);
const linkedList = linkedListFragment.querySelector('div');

const reversing = document.querySelector('#reversing');
reversing.insertAdjacentElement('beforeend', linkedList);