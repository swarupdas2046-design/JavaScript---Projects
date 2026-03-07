// let code_snippet = [

// `function greet(name){
//   return "Hello " + name;
// }`,

// `function square(num){
//   return num * num;
// }`,

// `let sum = 0;
// for(let i=1;i<=5;i++){
//   sum += i;
// }
// console.log(sum);`,

// `const numbers = [1,2,3,4];
// numbers.forEach(n=>{
//   console.log(n);
// });`,

// `function add(a,b){
//   return a + b;
// }`,

// `let fruits = ["apple","banana","mango"];
// fruits.push("orange");
// console.log(fruits);`,

// `const user = {
//   name:"Swarup",
//   age:22
// };
// console.log(user.name);`,

// `let arr = [5,10,15];
// let doubled = arr.map(n=>n*2);
// console.log(doubled);`,

// `function isEven(num){
//   return num % 2 === 0;
// }`,

// `const greet = (name)=>{
//   console.log("Hi " + name);
// };`,

// `let total = 0;
// for(let i=0;i<10;i++){
//   total += i;
// }`,

// `const text = "JavaScript";
// console.log(text.length);`,

// `let nums = [1,2,3];
// let result = nums.reduce((a,b)=>a+b);
// console.log(result);`,

// `function multiply(a,b){
//   return a*b;
// }`,

// `const person = {
//   name:"John",
//   city:"Delhi"
// };`,

// `let x = 10;
// let y = 20;
// console.log(x + y);`,

// `let name = "Dev";
// console.log(name.toUpperCase());`,

// `const colors = ["red","blue","green"];
// console.log(colors[1]);`,

// `let random = Math.floor(Math.random()*10);
// console.log(random);`,

// `let str = "hello";
// let reversed = str.split("").reverse().join("");
// console.log(reversed);`,

// `const numbers = [10,20,30];
// numbers.pop();
// console.log(numbers);`,

// `let age = 18;
// if(age >= 18){
//   console.log("Adult");
// }`,

// `let i = 0;
// while(i<5){
//   console.log(i);
//   i++;
// }`,

// `const obj = {a:1,b:2};
// console.log(Object.keys(obj));`,

// `let price = 100;
// let tax = price * 0.18;
// console.log(tax);`,

// `const greet = name => "Hello " + name;
// console.log(greet("Dev"));`,

// `let items = ["pen","book"];
// items.unshift("pencil");
// console.log(items);`,

// `function max(a,b){
//   return a>b?a:b;
// }`,

// `let data = [3,6,9];
// let filtered = data.filter(n=>n>5);
// console.log(filtered);`,

// `const pi = 3.14;
// console.log(pi);`,

// `let score = 75;
// score += 5;
// console.log(score);`,

// `const arr = [2,4,6];
// let half = arr.map(n=>n/2);
// console.log(half);`,

// `function cube(n){
//   return n*n*n;
// }`,

// `let word = "typing";
// console.log(word.slice(0,3));`,

// `let nums = [1,2,3];
// nums.push(4);
// console.log(nums);`,

// `const user = {
//   id:1,
//   role:"admin"
// };`,

// `let temp = 30;
// console.log(temp > 25);`,

// `const greet = ()=>{
//   console.log("Welcome");
// };`,

// `let num = 9;
// console.log(Math.sqrt(num));`,

// `let arr = [10,20];
// arr.shift();
// console.log(arr);`,

// `const date = new Date();
// console.log(date.getFullYear());`,

// `function subtract(a,b){
//   return a-b;
// }`,

// `let str = "code";
// console.log(str.repeat(2));`,

// `let list = [1,2,3];
// console.log(list.includes(2));`,

// `const obj = {x:10,y:20};
// console.log(obj.x);`,

// `let val = 5;
// val *= 2;
// console.log(val);`,

// `const numbers = [1,3,5];
// let check = numbers.every(n=>n>0);
// console.log(check);`,

// `let city = "Kolkata";
// console.log(city.length);`,

// `const greet = name => \`Hello \${name}\`;
// console.log(greet("Dev"));`,

// `let arr = [7,8,9];
// console.log(arr.join("-"));`

// ];

// status selactor 

let code_snippet = [

`Consistency is the key to mastering any skill. Small daily improvements eventually lead to big results.
Keep practicing regularly and your confidence will grow naturally.`,

`Programming is not just about writing code. It is about solving problems logically and creatively.
Every challenge you solve makes you a better developer.`,

`Technology has changed the way people communicate and learn.
Information now travels across the world in seconds.`,

`Typing quickly is useful, but typing accurately is even more important.
Accuracy improves your productivity and confidence.`,

`Learning new skills keeps the mind active and curious.
Curiosity is often the starting point of innovation.`,

`Great developers are not those who know everything.
They are the ones who never stop learning.`,

`Success usually comes from patience and persistence.
Small efforts repeated daily lead to great achievements.`,

`The internet connects billions of people around the world.
It allows knowledge and ideas to spread quickly.`,

`Reading good books expands your thinking and creativity.
Knowledge gained today helps you tomorrow.`,

`Practice makes progress, not perfection.
Every attempt teaches something valuable.`,

`Technology should make life easier and more meaningful.
Good software solves real problems for real people.`,

`A calm mind helps you solve problems effectively.
Clear thinking leads to better decisions.`,

`Creativity and logic together create innovation.
Both skills are essential in programming.`,

`Focus on improvement rather than perfection.
Progress happens step by step.`,

`Learning programming trains your brain to think logically.
Problem solving becomes easier with practice.`,

`Hard work often beats talent when talent does not work hard.
Discipline helps maintain consistent progress.`,

`Simple ideas implemented well can be very powerful.
Complexity is not always necessary.`,

`Curiosity encourages exploration and discovery.
It helps you learn faster and deeper.`,

`Developers build tools that improve everyday life.
Technology shapes the future of society.`,

`Confidence grows when you practice regularly.
Every small improvement builds momentum.`,

`Teamwork helps create better solutions.
Different perspectives lead to stronger ideas.`,

`Clear communication is important in every field.
It helps people understand ideas easily.`,

`Innovation often begins with a simple question.
Curiosity drives people to explore new possibilities.`,

`Learning something new every day keeps life exciting.
Knowledge expands your opportunities.`,

`Programming requires patience and attention to detail.
Small mistakes can teach important lessons.`,

`A focused mind can accomplish great things.
Avoid distractions when working on important tasks.`,

`Strong fundamentals make advanced concepts easier.
Understanding the basics is always valuable.`,

`Progress happens slowly but steadily.
Consistency matters more than speed.`,

`Problem solving is the heart of software development.
Every application exists to solve a problem.`,

`Technology continues to evolve rapidly.
Staying curious helps you adapt.`,

`Reading and practicing code improves your skills.
Experience builds confidence.`,

`Discipline helps you achieve long term goals.
Motivation may change but discipline remains.`,

`Innovation happens when creativity meets persistence.
Great ideas often begin small.`,

`Learning from mistakes is part of growth.
Every failure contains a lesson.`,

`Knowledge becomes powerful when shared.
Communities grow stronger together.`,

`A positive mindset helps overcome challenges.
Optimism improves problem solving.`,

`Creativity grows when you explore new ideas.
Experimentation leads to discovery.`,

`The best developers are lifelong learners.
Technology never stops evolving.`,

`Practice improves both speed and accuracy.
Regular effort builds muscle memory.`,

`Building projects helps turn knowledge into skills.
Practical experience is essential.`,

`Curiosity leads to deeper understanding.
Questions help reveal new insights.`,

`Focus on solutions rather than problems.
Positive thinking improves productivity.`,

`Time spent learning always pays off.
Skills developed today shape your future.`,

`Great ideas come from persistent thinking.
Innovation requires patience.`,

`Consistency builds confidence and expertise.
Small habits create big changes.`,

`Technology connects people across cultures.
Ideas travel freely through digital networks.`,

`Clear goals help maintain motivation.
Direction makes learning easier.`,

`Every challenge is an opportunity to improve.
Growth happens through effort.`,

`Learning never truly ends.
There is always something new to discover.`

];
let time = document.querySelector('.time span')
let wpm = document.querySelector('.wpm span')
let accuracy = document.querySelector('.acc span')
let progress_bar = document.querySelector('.progress')

let line_num = document.querySelector('.line-numbers')
let pre_tag = document.querySelector('.code')

let user_input = document.querySelector('textarea')

// button selactors 
let restart_btn = document.querySelector('.restart')
let next_btn = document.querySelector('.next')

let current_Display_code;

let submit_btn = document.querySelector('.submit')
let first_screen = document.querySelector('.first')
let input = document.querySelector('input')
let User_name = document.querySelector('h2 span')
    let data  
    
    // enter name Logic
input.addEventListener('input',()=>{
        data = input.value
    })
    let form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    User_name.innerHTML = data
    first_screen.style.display = 'none'
    
})
// Next Challenge button logic  
next_btn.addEventListener('click',()=>{
    progress_bar.style.width = '0%'
    user_input.value =''
    let code_index = Math.floor(Math.random()*code_snippet.length)
           current_Display_code =  code_snippet[code_index]
           
            
    pre_tag.innerHTML = current_Display_code 

        let code_line = code_snippet[code_index].split('\n');

        // console.log(code_line.length);
          line_num.innerHTML = ""
        
        for (let i = 1; i <=code_line.length; i++) {
            // console.log(i);
            
            let span = document.createElement('span')
                span.innerHTML = i
                line_num.appendChild(span)
            }
        
        
    
})
 


let timer = 90
let timerStarted = false
let interval
time.innerHTML = '1:30'

// when user give input that logic  
user_input.addEventListener('input',()=>{

    next_btn.style.opacity = '0.5'
    next_btn.disabled = true

   // timer logic 
   if(!timerStarted){

        timerStarted = true

        interval = setInterval(()=>{

            let minutes = Math.floor(timer / 60)
            let seconds = timer % 60

            if(seconds < 10){
                seconds = "0" + seconds
            }

            time.innerHTML = minutes + ":" + seconds

            timer--

            if(timer < 0){
                clearInterval(interval)
                user_input.disabled = true
            }

        },1000)

    }



    let User_code = user_input.value
    let target_text = current_Display_code 

    let typed = User_code.length
    let total = target_text.length

    let progress = (typed / total) *100

    if(progress <= 100){
        progress_bar.style.width = progress +'%'
    }else{
    progress = 100
        progress_bar.style.width = progress +'%'

}
    // accuracy logic 
    let correct = 0;
    let wrong = 0;
     for(let i = 0; i <User_code.length; i++){

        if(User_code[i] === target_text[i]){
            correct++
        }else{
            wrong++
        }

    }
    let Total_accuracy = correct / typed *100
    accuracy.innerHTML = Math.floor(Total_accuracy) + '%'
    


let timeTaken = 90 - timer

if(timeTaken > 0){

    let words = typed / 5
    let minutes = timeTaken / 60

    let WPM = words / minutes

    wpm.innerHTML = Math.floor(WPM)

}





    // if user completed within time then this logic 
    if (User_code == target_text) {
        console.log('accurate');
        user_input.disabled = true
         clearInterval(interval)
          next_btn.style.opacity = '1'
    next_btn.disabled = false
        console.log(progress);
        
        
    }
})

// restart_button LOGIC 

restart_btn.addEventListener('click',()=>{
      next_btn.style.opacity = '1'
    next_btn.disabled = false


    clearInterval(interval)

    timer = 90
    timerStarted = false

    time.innerHTML = "1:30"

    user_input.value = ""
    user_input.disabled = false

    progress_bar.style.width = "0%"

    accuracy.innerHTML = "0%"
    wpm.innerHTML = "0"

})


