namespace poker{
    export class Card{

        static CARD_STRING_VALUES=["2","3","4","5","6","7","8","9","T","J","Q","K","A"];
        static CARD_STRING_COLORS=["♥","♦","♣","♠"];
    
        constructor(public value:number=0,public color:number=0){
    
        }
    
        getStringRepresentation():string{
            return this.getCardStringValue()+this.getCardColorValue();
        }
    
        getNumberRepresentation():number{
            return this.color*Card.CARD_STRING_VALUES.length+this.value;
        }

        fromNumberRepresentation(representation:number){
            this.value=representation%13;
            this.color=Math.floor(representation/13);
        }

        getCardStringValue():string{
            return Card.CARD_STRING_VALUES[this.value];
        }

        getCardColorValue():string{
            return Card.CARD_STRING_COLORS[this.color];
        }
    }
}
