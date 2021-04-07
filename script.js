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
        <p>The function returns a consecutive list of nodes:</p>
        <code>${listLinkedNodes(a)}</code>
        <br><br>
    </div>
`;
const linkedListFragment = document.createRange().createContextualFragment(linkedListHTML);
const linkedList = linkedListFragment.querySelector('div');
const iterating = document.querySelector('#iterating');
iterating.insertAdjacentElement('beforeend', linkedList);

function reverseListHead(headOfList) {
    const originalHead = headOfList;
    let nextElement = originalHead.next;
    let previousElement = nextElement;
    while (nextElement) {
        previousElement = nextElement;
        nextElement = nextElement.next;
    }
    console.log(previousElement);
    return(previousElement.value);
}

const reverseListHTML = `
    <div>
        <h3>Result of the reversal:</h3>
        <code>${reverseListHead(a)}</code>
        <br><br>
    </div>
`;
const reverseListFragment = document.createRange().createContextualFragment(reverseListHTML);
const reverseList = reverseListFragment.querySelector('div');
const reversing = document.querySelector('#reversing');
reversing.insertAdjacentElement('beforeend', reverseList);

// Adding click event listener 

const button = document.querySelector('.showSolution');
const solution = document.querySelectorAll('.solution');



const clickHandler = () => {
    console.log('Jíííháá');
    solution.forEach(element => {
        element.classList.remove('hidden');
    });
}

button.addEventListener('click', clickHandler)