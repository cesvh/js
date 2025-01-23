function hello(name, myCallback) {
    setTimeout(() => {
      console.log("Hello " + name);
      myCallback(name);
    }, 1000);
  }
  
  function msg(name, times, callbackTalk) {
    setTimeout(() => {
      console.log(`${name}: `, times);
      callbackTalk();
    }, 1000);
  }
  
  function bye(name = "msg", anotherCallback) {
    setTimeout(() => {
      console.log("Goodbye " + name);
      anotherCallback();
    }, 2000);
  }
  
  function talk(name, times, callbackTalk){
    if(times < 4){
      msg(name, times, () => {
        talk(name, ++times, callbackTalk);
      } );
    } else {
      bye(name, callbackTalk);
    }
  }
  
  console.log("Starting process...");
  hello("ces", (name) => talk(name, 0, () => console.log(`End...${name}`)));
  