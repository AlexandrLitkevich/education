
const sum = (a, b) => {
  return a + b
}

console.log(sum(1, 1))
console.log(sum(1,"1"))


function oncePrint() {
  console.log(`Print ${this.name}`)
}
const  oncePrint2 = () => {
  console.log(`Print ${this.name}`)
}


 const createUser = (name, prof) => ({name, prof, print() {
  console.log(`Print ${name}`)
 }})

 const pr1 = createUser("Vasaya", "QA")
 pr1.print()



 const pr2 = createUser("Pert", "PM")
 pr2.print()



 console.log(pr1.print === pr2.print)




















