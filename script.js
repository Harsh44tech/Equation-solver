let inp;
let spin = document.getElementById('spin')
spin.style.display ='none'
let btn = document.getElementById('btn')
let result_box = document.getElementById('container')
let main = document.getElementById('main')
let aler = document.getElementById('aler')
aler.style.display = 'none'
btn.addEventListener("click", ()=>{
  inp = document.getElementById('input').value
  if(inp !== ''){
    aler.style.display = 'none'
  console.log(inp)
  spin.style.display = 'block'
  main.style.display = 'none'
    setTimeout(function() {
      spin.style.display = 'none'
calculation()
main.style.display = 'block'
    }, 4000);

  
}
else{
  aler.style.display = "block"
}  
})
  
function calculation(){
  inp = inp.replace("²","2")
  let nums = inp.match(/(-?\d+)x2|(-?\d+)x|(-?\d+)/g)
  if(nums){
    let coe = nums.map(num =>{
      let match = num.match(/(-?\d+)/)
      return parseInt(match[0])
    })
    
let a = parseFloat(coe[0])
let b = parseFloat(coe[1])
let c = parseFloat(coe[2])
let D = ((b)**2)-(4*a*c)
if(D>=0){
let Root1 = (-(b)+Math.sqrt(D))/(2*a)
let Root2 = (-(b)-Math.sqrt(D))/(2*a)
result_box.innerText = `a=${a}, b=${b}, c=${c}
Discriminant,D = ${D}
Root1= ${Root1}, Root2= ${Root2}`
}else{
  result_box.innerText = "No real zero"
}
}else{
  aler.innerText = 'Invalid input'
  aler.style.display = 'block'
  main.style.display = 'none'
}
}