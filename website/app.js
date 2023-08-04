/* Global Variables */

// Create a new date instance dynamically with JS
//let d = new Date();
//let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


const apiurl='https://api.openweathermap.org/data/2.5/weather?zip='
const keyapi='&appid=cccc48897d18b65bf77dff8ea95de5cd&units=metric'

const paction= async()=>{
//zip,feel,date
const zipcode= document.getElementById('zip').value
const feeel= document.getElementById('feelings').value
const sdate=new Date();
const date=`${sdate.getMonth()+1}/${sdate.getDate()}/${sdate.getFullYear()}`;

//temp
const res= await fetch(apiurl + zipcode + keyapi)
const data= await res.json()
const temp=data.main.temp
//console.log(data.main.temp) just to check in console >_<
//show results in page
 await fetch('/saveInfo',{
    method: 'POST',
    headers: {'content-Type' : 'application/json'},
    body: JSON.stringify({temp, feeel, date})
})
  const res2=await fetch('/getInfo')
  const data2= await res2.json()
 // console.log(data2)


  //ui
  document.getElementById('temp').innerHTML=data2.temp
  document.getElementById('date').innerHTML=data2.date
  document.getElementById('content').innerHTML=data2.feeel

}
document.getElementById('generate').addEventListener('click', paction)

