class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}


let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

let reversedHead = reverseLinkedList(head);
while (reversedHead) {
    console.log(reversedHead.val);  // Output: 4, 3, 2, 1
    reversedHead = reversedHead.next;
}
