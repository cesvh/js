function hello(name, myCallback) {
  setTimeout(() => {
    console.log("Hello " + name);
    myCallback(name);
  }, 1000);
}

function msg(msg, callbackTalk) {
  setTimeout(() => {
    console.log("msg: ", msg);
    callbackTalk();
  }, 1000);
}

function bye(name = "msg", anotherCallback) {
  setTimeout(() => {
    console.log("Goodbye " + name);
    anotherCallback();
  }, 2000);
}

hello("ces", (name) => {
  msg("1", () => {
    msg("2", () => {
      msg("3", () => {
        msg("4", () => {
          bye(name, () => console.log("The process ended"));
        });
      });
    });
  });
});

console.log("Starting process...");
