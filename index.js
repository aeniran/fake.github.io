var user=["Ayomid23","Grace","Femi","Adam"]
var us=["Website design","Website development","Ui & Ux design"]
var count=17
var po = $(".po")
var it=$(".it")
var bt=$(".bt")
bt.click(function () {
    var round=Math.floor(Math.random()*4)
    var use=$(".name").html("<span>"+user[round]+"</span>")

    var round1=Math.floor(Math.random()*3)
    var cup=$(".cou").html("<span>"+us[round1]+"</span>")

      count=Math.floor(Math.random()*70)
      var re=$(".age").html("<span>"+count+"</span>")

      cou = Math.ceil(Math.random() * 2)  
      po.attr("src", "profile/ma"+cou+".jpg")

      cot = Math.ceil(Math.random() * 2)  
      it.attr("src", "profile/mat"+cot+".png")
    
})
    
