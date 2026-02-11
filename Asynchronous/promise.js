// Create a resolved javascript Promise that will return 'Hello World!'.
// function promiseHelloWorld() {
//   // replace this nonsense with your Promise

//   return / / ? '' : (() => 'Hello World!')();
// }
function promiseHelloWorld() {
  return new Promise((resolve) => {
    resolve("Hello World!");
  });
}
promiseHelloWorld().then((response) => console.log(response));
