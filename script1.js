let o = {
  cardId: 123,
  getId: function() {
    console.log(this); //{cardId:123,getId: [function:getId]}
    return this.cardId;
  }
};
console.log(o.getId()); //123
