namespace poker{
    export class PokerHand{

        cards:Array<poker.Card>;

        constructor(card0:poker.Card=new poker.Card(),card1=new poker.Card()){
            this.cards=[card0,card1];
        }

        getStringRepresentation():string{
            var sr:string=this.cards[0].getCardStringValue()+this.cards[1].getCardStringValue();
            if(sr[0]===sr[1])return sr;
            if(this.cards[0].color===this.cards[1].color)return sr+"s";
            return sr+"o";
        }

        getNumberRepresentation():number{
            return this.cards[0].getNumberRepresentation()*100 + this.cards[1].getNumberRepresentation();
        }

        fromNumberRepresentation(representation:number):void{
            this.cards[0].fromNumberRepresentation(Math.floor(representation/100));
            this.cards[1].fromNumberRepresentation(representation%100);
        }
    }
}
