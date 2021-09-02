class person{
    constructor(name,setOfQ,setOfA,){
        this.point=0
        this.name=name
        this.setOfA=setOfA
        this.setOfQ=setOfQ
    }
}

let question = [
    {title:"10+20",choice:[10,20,30],answer:30,qNumber:1},
    {title:"A->B->?",choice:['D','G','C'],answer:'C',qNumber:2}
]

let a=new person("ALICE",[1,2],[20,'C'])

function check(player,question){
    for(let l=0;l<player.setOfQ.length;l++){
        let matchQuestion=findQ(player.setOfQ[l])
        if(player.setOfA[l]==matchQuestion.answer){
            player.point++
            console.log("Done1")
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