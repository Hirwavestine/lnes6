let o = {
  cardId: 123,
  getId: function() {
    return this.cardId;
  }
};
console.log(o.getId()); //123
