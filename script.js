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
        <h3>Result:</h3>
        <p>The function returns a list of consecutive linked list elements:</p>
        <code>${listLinkedNodes(a)}</code>
    </div>
`;
const linkedListFragment = document.createRange().createContextualFragment(linkedListHTML);
const linkedList = linkedListFragment.querySelector('div');
const reversing = document.querySelector('#reversing');
reversing.insertAdjacentElement('beforeend', linkedList);

function reverseListHead(headOfList) {
    const originalHead = headOfList;
    let nextElement = originalHead.next;
    nextElement = nextElement.next;
    console.log(nextElement);
    return(nextElement.value);
}

const reverseListHTML = `
    <div>
    <br>
        <h3>Result of the reversal:</h3>
        <code>${reverseListHead(a)}</code>
    </div>
`;
const reverseListFragment = document.createRange().createContextualFragment(reverseListHTML);
const reverseList = reverseListFragment.querySelector('div');
linkedList.insertAdjacentElement('afterend', reverseList);