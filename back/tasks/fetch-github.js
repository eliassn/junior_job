

const fetch = require('node-fetch');
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);


const baseUrl = 'https://jobs.github.com/positions.json';
//fetch all pages
async function fetchGithub(){
    let resultCount = 1, onPage = 0;
    const allJobs = [];
    while(resultCount > 0){
const res = await fetch(`${baseUrl}?page=${onPage}`);
const jobs = await res.json();
allJobs.push(...jobs);
resultCount = jobs.length;
console.log('got', resultCount,  'jobs');
onPage++;

}
console.log('got',  allJobs.length, 'jobs');
// filter algorithm
const jrJobs = allJobs.filter(job =>{
    const jobTitle = job.title.toLowerCase();
    
    //algorithm logic
    if(jobTitle.includes('senior') || jobTitle.includes('manager') || jobTitle.includes('sr.') || jobTitle.includes('architect') || jobTitle.includes('lead')){
        return false;
    }
    return true;
})
console.log('filtred down to', jrJobs.length);
//set in redis

const success = await setAsync('github', JSON.stringify (jrJobs));
console.log({success});

}
fetchGithub();


module.exports = fetchGithub;