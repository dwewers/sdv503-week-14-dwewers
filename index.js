class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length ++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.tailength === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length --;
        return poppedNode;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0
            current = this.head;
            while(count !== index){
                current = current.next;
                count ++;
            }
        }else{
            count = this.length -1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count --;
            }
        }
        return current
    }
    set(index,val){
        var foundNode = this.get(index)
        if (foundNode != null){
            found.val=val;
            return true;
        }
        return false
    }
}
list1 = new DoublyLinkedList();
list1.push("Daniel")
list1.push("Ewers")
list1.pop()
console.log(list1)



