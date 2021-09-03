class person{ // คลาส Person เก็บ point , name, setOfQA เป็น Array ของObject ที่ประกอบด้วย-> questionNo(คำถามข้อที่เท่าไร),answer(คำตอบที่เลือก)
    constructor(name,setOfQA){
        this.point=0
        this.name=name
        this.setOfQA=setOfQA
    }
}

let question = [ // ประกาศ Array ของ Object ใช้เก็บคำถาม หมายเลขคำถาม choice และ คำตอบ
    {title:"10+20",choice:[10,20,30],answer:30,qNumber:1},
    {title:"A->B->?",choice:['D','G','C'],answer:'C',qNumber:2},
    {title:"What is My Favorite band",choice:['Three Man Down','Tilly Bird','Indigo'],answer:'Three Man Down',qNumber:3},
    {title:"Asia is bigger than Europe",choice:['Yes','No'],answer:'Yes',qNumber:4},
    {title:"How many legs does a cat have?",choice:['Two','Four','six'],answer:'Four',qNumber:5}
]


function check(player){ // function ที่เช็คคำตอบว่าถูกกี่ข้อ โดยรับค่า parameter 2 ค่า คือ เซตของคำถามทั้งหมด และ คนที่ต้องการจะตรวจคำตอบ
    for(let l=0;l<player.setOfQA.length;l++){ // เริ่มจากวนลูปเข้าไปในเซตของคำตอบของผู้เล่น
        let matchQuestion=findQ(player.setOfQA[l].questionNo) // หาว่าข้อที่ผู้เล่นตอบมาตรงกับคำถามข้อไหน ป้องกันการใส่คำตอบมาแบบไม่เรียงข้อ
        if(matchQuestion.choice[(player.setOfQA[l].answer)-1]==matchQuestion.answer){ // พอได้เบอร์คำถามแล้ว ก็นำไปตรวจสอบโดยถ้าเบอร์ช้อยที่ผู้เล่นเลือกตรงกับคำตอบของผู้เล่น ผู้เล่นจะได้ 1คะแนน
            player.point++
            console.log(`Question ${matchQuestion.qNumber}: ${matchQuestion.title}`)
            console.log(`Choice: \n1.${matchQuestion.choice[0]}  \n2.${matchQuestion.choice[1]}  \n3.${matchQuestion.choice[2]}`)
            console.log(`Your Answer ${player.setOfQA[l].answer} --> ${matchQuestion.choice[(player.setOfQA[l].answer)-1]} is corrected!\n`)
        }
        else{ // ถ้าผิดหรือเบอร์คำถามที่ส่งเข้ามาไม่มีอยู่ ก็จะไม่เกิดอะไร

            console.log(`Question ${matchQuestion.qNumber}: ${matchQuestion.title}`)
            console.log(`Choice: \n1.${matchQuestion.choice[0]}  \n2.${matchQuestion.choice[1]}  \n3.${matchQuestion.choice[2]}`)
            console.log(`Your Answer ${player.setOfQA[l].answer} --> ${matchQuestion.choice[(player.setOfQA[l].answer)-1]} is incorrected!\n`)
        }
    }
}
function findQ(qNumber){ // เป็น Function ที่รับหมายเลขคำถามและจะ return object ของคำถามที่มีเลขนั้นออกไป

    for(let i=0;i<question.length;i++){ // วนลูปเข้าไปใน Array ของ Object ของคำถามทั้งหมด
        if(question[i].qNumber==qNumber){ // ตรวจสอบโดยถ้าหมายเลขคำตอบตรงกับ หมายเลขที่ส่งเข้ามาก็จะ return object ของคำถามก้อนนั้นออกไป
            return question[i]
        }
    }
    return null
}

let person2 =new person("Phunon",
[{questionNo:3,answer:1},
    {questionNo:1,answer:2},
    {questionNo:2,answer:3},
    {questionNo:4,answer:2}])
let person1 =new person("Warisara",
    [{questionNo:2,answer:1},
    {questionNo:3,answer:1},
    {questionNo:1,answer:2}])
let person3 =new person("Prin",
[{questionNo:2,answer:1},
    {questionNo:5,answer:2},
    {questionNo:4,answer:1},
    {questionNo:3,answer:3},
    {questionNo:1,answer:3}])
 let person4 =new person("Teeradet",

    [{questionNo:5,answer:2},
    
    {questionNo:1,answer:1},
    
    {questionNo:4,answer:1},
    
    {questionNo:3,answer:2},
    
    {questionNo:2,answer:3},
    
    {questionNo:2,answer:1}]  )
    let person5=new person("Montira",
    [{questionNo:1,answer:2},
        {questionNo:2,answer:3},
        {questionNo:3,answer:1},
        {questionNo:4,answer:2},
        {questionNo:5,answer:1}])

check(person1)
console.log("--------------------\n " +person1.name+"'s Point :"+person1.point)
check(person2)
console.log("--------------------\n " +person2.name+"'s Point :"+person2.point)
check(person3)
console.log("--------------------\n " +person3.name+"'s Point :"+person3.point)
check(person4)
console.log("--------------------\n " +person4.name+"'s Point :"+person4.point)
check(person5)
console.log("--------------------\n " +person5.name+"'s Point :"+person4.point)

