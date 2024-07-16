class PersonTwo {
    constructor(name, age, prof) {
      this.name = name
      this.age = age
      this.prof = prof
  
      this.printName = this.printName.bind(this)
    
    }
    printName = () => {
      console.log(`Printm my name ${this.name}`)
     }
   }
  
   class WomanTwo extends PersonTwo {
    constructor(name, age, prof, children) {
      super(name, age, prof)
      this.children = children
  
      this.printChildren = this.printChildren.bind(this)
    }
    printChildren() {
      console.log("this my children", this.children)
    }
   }
  
  const newPerson = new PersonTwo("Gergi", 30, "Security")
  
  newPerson.printName()
  
  
  const newWomen = new WomanTwo("Lida", 44, "QA", 6)
  
  newWomen.printName()
  newWomen.printChildren()
  
  
  class Men {
    #_name;
    constructor(name) {
      //run seeter
      this.#_name = name
    
    }
    get name(){
      return this.#_name
    } 
  
    set name(value){
      if (value.length < 3) {
        console.log("Имя очень короткое")
      }
      this.#_name = `men: ${value}`
    } 
   }
  
   const men = new Men("Al")
  
  
   men._name = 30
   console.log(men.name)