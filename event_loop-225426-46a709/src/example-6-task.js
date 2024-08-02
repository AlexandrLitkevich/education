import EventEmitter from 'node:events'


class ColdEmitter extends EventEmitter {
  constructor() {
    super()
    this.events = []
    this.isListenerAttached = false

  }

  emit(name, ...args) {
    if(!this.isListenerAttached) {
      this.events.push({name, args})
    } else {
      super.emit(name, ...args)
    }
  }

  on(name, callback) {
    super.on(name, callback)
    if(!this.isListenerAttached) {
      this.isListenerAttached = true
      this.events.forEach(({name, args}) => {
        super.emit(name, ...args)
      })
      this.events = []
    }
  }
}

// ColdEmitter - ?
const a = new ColdEmitter()
// 1. сохранить событие 'wait' в внутренней очереди, переопределить emit
// -- структура внутренней очереди может содержать все коллбэки, которые уже были выполнены
// -- { name: 'wait', callbacks: [] } коллбэки вначале пустые
a.emit('wait')
// 2. когда новое событие инициируется, вызывается каждый зарегистрированный коллбэк один раз
// -- сравниваются функции коллбэка события с выполненными
// 3. когда новый коллбэк зарегистрирован для 'wait', коллбэк должен быть вызван
// 4. 'newListener' может помочь проверить, какие коллбэки все еще нужно выполнить
a.on('wait', () => {
  console.log('still executed')
})


