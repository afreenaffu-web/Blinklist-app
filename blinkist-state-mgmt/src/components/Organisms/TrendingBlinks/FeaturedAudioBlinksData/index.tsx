const featured = `{"featured":[{"id":1,"src":"1.png","name":"Bring Your Human to Work", "author":"Erica Keswin", "duration":"13-minute read","noOfReads":"1.9k reads"},
{"id":2,"src":"11.png","name":"Employee to Entrepreneur", "author":"SteveGlaveski", "duration":"15-minute read","noOfReads":"2k reads"},
{"id":3,"src":"3.png","name":"Doesn’t Hurt to Ask", "author":"TreyGowdy", "duration":"13-minute read","noOfReads":"1.2k reads"}
]}`;

const featuredblinks = JSON.parse(featured);
const FeaturedAudioBlinksData = featuredblinks.featured;
export default FeaturedAudioBlinksData;
