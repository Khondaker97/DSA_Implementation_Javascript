//Singly LinkedList
function LinkedList() {
  function Node(content) {
    this.content = content;
    this.next = null;
  }
  this.head = null;
  this.tail = null;
  //O(1)
  this.add = function (content) {
    if (!this.head) {
      this.head = new Node(content);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(content);
      this.tail = this.tail.next;
    }
  };
  //O(n)
  this.move_to_front = function (node) {
    if (node === this.head) return;
    let temp = this.head;
    while (temp.next !== node) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
    node.next = this.head;
    this.head = node;
  };
}
