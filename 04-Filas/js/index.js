// Introdução às Filas
function Queue() {
  const items = []

  this.enqueue = function (element) {
    // add um novo item
    items.push(element)
  }

  this.dequeue = function () {
    // remove um item da frente do elemento
    return items.shift()
  }

  this.front = function () {
    // retorna um primeiro elemento da fila
    return items[0]
  }

  this.isEmpty = function () {
    // verifica se a fila esta vazia ou nao
    return items.length === 0
  }

  this.size = function () {
    // retorna um tamanho da fila
    return items.length
  }

  this.print = function () {
    //imprime a fila no console
    console.log(items.toString())
  }
}

function PriorityQueue() {
  const items = []

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }

  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority)

    let added = false

    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement)
        added = true
        break
      }
    }
    if (!added) {
      items.push(queueElement)
    }
  }

  this.dequeue = function () {
    return items.shift()
  }

  this.print = function () {
    for (let i = 0; i < items.length; i++) {
      console.log(items[i].element + '  ' + items[i].priority)
    }
  }
}

let pqueue = new PriorityQueue()
pqueue.enqueue('Marcelo', 3)
pqueue.enqueue('Gabriel', 2)
pqueue.enqueue('Alice', 1)
pqueue.print()
