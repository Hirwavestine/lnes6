'use strict';

var cat=Object.create(Object.prototype,
{
  name:{
    value:'fff',
    writable:true,
    enumerable:true,
    configurable:true
  },
    color:{
      value:'black',
      writable:true,
      enumerable:true,
      configurable:true
    }
  
})
display(cat)
