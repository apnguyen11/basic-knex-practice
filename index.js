const express = require('express')
const app = express();

const dbConfics = require('./knexfile.js')
const db = require('knex')(dbConfics.development)

const port = 3000;


//Express.js Endpoints
app.get('/', function (req, res){
    getAllCohorts()
        .then(function(allCohorts){
            res.send('<ul>' + allCohorts.map(renderCohort).join('') + '</ul>')
        })
})

app.listen(port, function(){
    console.log('Listening on port ' + port)
})



//Rendering
function renderCohort(cohort){
    return `<li><a href="/cohorts/${cohort.slug}">${cohort.title}</a></li>`
}


//Database Queries
const getAllCohortsQuery = `
    SELECT *
    FROM Cohorts
`

function getAllCohorts(){
    return db.raw(getAllCohortsQuery)
};

function getOneCohort(slug){
    return db.raw('SELECT * FROM Cohorts WHERE slug = ?', [slug])
}

//Misc

function prettyPrintJSON(x){
    return JSON.stringify(x, null, 2)
}