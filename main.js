var cardStringValues=["2","3","4","5","6","7","8","9","T","J","Q","K","A"];
var cardColorValues=["♥","♦","♣","♠"];

function getHandString(val1,col1,val2,col2){
    return cardStringValues[val1-2]+cardStringValues[val2-2]+((val1!==val2)?(col1===col2)?"s":"o":"");
}

function getOrcAction(pos,handString){
    var currOrc=orc[pos];

    for(var propName in currOrc){
        if(propName.includes(handString))return orcActions[currOrc[propName]];
    }

    return "fold";
}

function getDefAction(pos,handString){
    var currDef=def["*"];
    var defs="";
    for(var defVs in currDef){
        for(var hands in currDef[defVs]){
            if(hands.includes(handString))defs+="against " + defVs + ": " +defActions[currDef[defVs][hands]]+"<br>";
        }
    }
    currDef=def[pos];
    for(var defVs in currDef){
        for(var hands in currDef[defVs]){
            if(hands.includes(handString))defs+="against " + defVs + ": " +defActions[currDef[defVs][hands]]+"<br>";
        }
    }
    return defs!=""?defs:"fold";
}


var game=[];
var position="BB";
var betSize=0,potSize=0,outs=0;

function calculateOdds(){
    var potOdds=betSize/potSize;
    var 
}

$(function(){
    for(var i=0;i<cardColorValues.length;i++){
        $("#pokerCoach").append(cardColorValues[i]);
        for(var j=0;j<cardStringValues.length;j++){
            $("#pokerCoach").append("<button class='cardButton' data-color='"+i+"' data-value='"+(j+2)+"'>"+cardStringValues[j]+"</button>");
        }
        $("#pokerCoach").append("<br>");
    }

    $("#pokerCoach").append("<p id='txtAction'></p>");

    $("#position").on("change",function(evt){
        position=$(this).val();
    })

    $("#inpBetSize").change(function(evt){
        betSize=parseInt($(this).val());
    });

    $("#inpOuts").change(function(evt){
        outs=parseInt($(this).val());
    });

    $("#inpOuts").change(function(evt){
        betSize=parseInt($(this).val());
    });

    $(".cardButton").on("click",function(evt){
        var val=$(evt.target)[0].dataset["value"];
        var col=$(evt.target)[0].dataset["color"];
        game.push({val:val,col:col});
        if(game.length===2){
            var handString=getHandString(game[0].val,game[0].col,game[1].val,game[1].col);
            console.log(handString);
            $("#txtAction").html("Raise :<br>"+getOrcAction(position,handString)+"<br>"+"Def:<br>"+getDefAction(position,handString));
        }
            
        $(evt.target).prop("disabled",true);
    })
});