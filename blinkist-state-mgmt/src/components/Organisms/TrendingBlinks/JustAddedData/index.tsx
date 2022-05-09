const just = `{"just":[
    {"id":7,"src":"7.png","name":"The Lonely Century", "author":"NoreenaHertz", "duration":"15-minute read","noOfReads":"1.9k reads"},
{"id":8,"src":"8.png","name":"Eat Better, Feel Better", "author":"GiadaDeLaurentiis", "duration":"7-minute read", "noOfReads":"3k reads"},
{"id":9,"src":"9.png","name":"Dropshipping", "author":"JamesMoore", "duration":"8-minute read","noOfReads":"5k reads"}

]}`;

const justadded = JSON.parse(just);
const JustAddedData = justadded.just;
export default JustAddedData;
