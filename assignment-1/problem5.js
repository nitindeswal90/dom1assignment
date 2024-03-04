function objectFactory(fname, age) {
    let obj = {};
    
    obj[fname] = age;
  
    return obj;
  }
  

  const result1 = objectFactory('Raj', 26);
  console.log(result1); 
  
  const result2 = objectFactory('Vijay', 24);
  console.log(result2); 
  