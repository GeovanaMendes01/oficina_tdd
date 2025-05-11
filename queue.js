class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size(){
    return this.elements.length
  }

  enqueue(element){
    this.elements.push(element)
  }

  peek(){
    return this.elements[0]
  }

  dequeue(){
    return this.elements.shift()
  }
}

module.exports = Queue