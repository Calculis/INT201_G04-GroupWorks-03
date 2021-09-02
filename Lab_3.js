class person{ // คลาส Person เก็บ point , name, setOfQA เป็น Array ของObject ที่ประกอบด้วย-> questionNo(คำถามข้อที่เท่าไร),answer(คำตอบที่เลือก)
    constructor(name,setOfQA){
        this.point=0
        this.name=name
        // this.setOfA=setOfA
        // this.setOfQ=setOfQ
        this.setOfQA=setOfQA
    }
}

let question = [ // ประกาศ Array ของ Object ใช้เก็บคำถาม หมายเลขคำถาม choice และ คำตอบ
    {title:"10+20",choice:[10,20,30],answer:30,qNumber:1},
    {title:"A->B->?",choice:['D','G','C'],answer:'C',qNumber:2},
    {title:"My Favorite band",choice:['Three man down','Tilly Bird','Indigo'],answer:'Three Man Down',qNumber:3}
]


let a =new person("Phunon",[{questionNo:3,answer:'Three Man Down'},{questionNo:1,answer:30}])

function check(player,question){ // function ที่เช็คคำตอบว่าถูกกี่ข้อ โดยรับค่า parameter 2 ค่า คือ เซตของคำถามทั้งหมด และ คนที่ต้องการจะตรวจคำตอบ
    for(let l=0;l<player.setOfQA.length;l++){ // เริ่มจากวนลูปเข้าไปในเซตของคำตอบของผู้เล่น
        let matchQuestion=findQ(player.setOfQA[l].questionNo) // หาว่าข้อที่ผู้เล่นตอบมาตรงกับคำถามข้อไหน ป้องกันการใส่คำตอบมาแบบไม่เรียงข้อ
        if(player.setOfQA[l].answer==matchQuestion.answer){ // พอได้เบอร์คำถามแล้ว ก็นำไปตรวจสอบกับคำตอบของคำถามเบอร์นั้นๆ ถ้าถูกก็ได้ 1คะแนน
            player.point++
            console.log(`Question Number ${player.setOfQA[l].questionNo} is corrected!`)
        }
        else{ // ถ้าผิดหรือเบอร์คำถามที่ส่งเข้ามาไม่มีอยู่ ก็จะไม่เกิดอะไร
            console.log(`Question Number ${player.setOfQA[l].questionNo} is incorrected!`)
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
check(a,question)
console.log(a.point)
