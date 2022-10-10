import './App.css';

function App() {
    class Node {
      constructor(value) {
          this.data = value;
          this.next = null;
      }
  }
  class CyclicLinkedList {
      add(value) {
          let node = new Node(value);
          let current = this.root;
          if (current == null) {
              this.root = node;
          } else {
              while (current.next != null && current.next.data != this.root.data) {
                  current = current.next;
              }
              node.next = this.root;
              current.next = node;
          }
      }
  }
  function isCyclic(list) {
      let current = list.root
      while (current != null && current.next != null) {
          if (current.next.data === list.root.data) {
              return true;
          }
          current = current.next;
      }
      return false;
  }
  const cylicList = new CyclicLinkedList();
  cylicList.add(1);
  cylicList.add(2);
  cylicList.add(0);
  cylicList.add(-4);
  console.log("isCyclic", isCyclic(cylicList)); //true
}

export default App;
