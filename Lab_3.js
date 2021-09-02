class person{
    constructor(name,setOfQA){
        this.point=0
        this.name=name
        // this.setOfA=setOfA
        // this.setOfQ=setOfQ
        this.setOfQA=setOfQA
    }
}

let question = [
    {title:"10+20",choice:[10,20,30],answer:30,qNumber:1},
    {title:"A->B->?",choice:['D','G','C'],answer:'C',qNumber:2},
    {title:"My Favorite band",choice:['Three man down','Tilly Bird','Indigo'],answer:'Three Man Down',qNumber:3}
]

// let a=new person("ALICE",[1,3],[20,'Three Man Down'])
let a =new person("Phunon",[{questionNo:3,answer:'Three Man Down'},{questionNo:1,answer:30}])

function check(player,question){
    for(let l=0;l<player.setOfQA.length;l++){
        let matchQuestion=findQ(player.setOfQA[l].questionNo)
        if(player.setOfQA[l].answer==matchQuestion.answer){
            player.point++
            console.log(`Question Number ${player.setOfQA[l].questionNo} is corrected!`)
        }
        else{
            console.log(`Question Number ${player.setOfQA[l].questionNo} is incorrected!`)
        }
    }
}
function findQ(qNumber){
    for(let i=0;i<question.length;i++){
        if(question[i].qNumber==qNumber){
            return question[i]
        }
    }
    return null
}
check(a,question)
console.log(a.point)
