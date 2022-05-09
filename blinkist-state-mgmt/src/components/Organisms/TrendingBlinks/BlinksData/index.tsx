const trending = `{"trending":[{"id":1,"src":"1.png","name":"Bring Your Human to Work", "author":"Erica Keswin", "duration":"13-minute read","noOfReads":"1.9k reads"},
{"id":2,"src":"2.png","name":"Beyond Entrepreneurship 2.0", "author":"JimCollins", "duration":"15-minute read","noOfReads":"2k reads"},
{"id":4,"src":"4.png","name":"The Fate of Food", "author":"AmandaLittle", "duration":"18-minute read","noOfReads":"16k reads"},
{"id":5,"src":"5.png","name":"Lives of the Stoics", "author":"RyanHoliday", "duration":"23-minute read","noOfReads":"1k reads"},
{"id":6,"src":"6.png","name":"Loving Your Business", "author":"DebbieKing", "duration":"5-minute read","noOfReads":"8k reads"},
{"id":9,"src":"9.png","name":"Dropshipping", "author":"JamesMoore", "duration":"8-minute read","noOfReads":"5k reads"}
]}`;

const trendingblinks = JSON.parse(trending);
const BlinksData = trendingblinks.trending;
export default BlinksData;
