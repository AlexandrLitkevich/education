 function Person (name, age, prof) {
    this.name = name
    this.age = age
    this.prof = prof
   }
  
  
   Person.prototype.printName = function() {
    console.log(`Print ${this.name}`)
    return
   }
    
   const person = new Person("Denis", 33, "developer")
  
   console.log(person)
   console.log(person.printName())
  
  
  //  function Women (name, age, prof, children) {
  //   Person.call(this, name, age, prof)
  //   this.children = children
  //  }
  
  //  Object.setPrototypeOf(Women.prototype, Person.prototype)
  
  
  //  const wm = new Women("Lara", 22, "QA", 2)
  
  //  console.log(wm)
  //  console.log(wm.children)