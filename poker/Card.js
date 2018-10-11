function Card(value,color){
    this.value=value;
    this.color=color;
}

Card.prototype.CARD_STRING_VALUES=["2","3","4","5","6","7","8","9","T","J","Q","K","A"];

Card.prototype.getStringRepresentation(){
    return 0;
}