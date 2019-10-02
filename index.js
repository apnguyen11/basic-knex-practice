const express = require('express')
const app = express();

const dbConfics = require('./knexfile.js')
const db = require('knex')(dbConfics.development)

app.listen(3000)

//Express.js Endpoints
app.get('/', function (req, res){
    getAllCohorts()
        .then(function(allCohorts){
            res.send('<ul>' + allCohorts.map(renderCohort).join('') + '</ul>')
        })
})

//Rendering
function renderCohort(cohort){
    return `<li><a href="/cohorts/${cohort.slug}">${cohort.title}</a></li>`
}


//Database Queries
const getAllCohortQuery = `
    SELECT *
    FROM Cohorts
`

function getAllCohorts(){
    return db.raw(getAllCohortsQuery)
};

function getOneCohort(slug){
    return db.raw('SELECT * FROM Cohorts WHERE slug = ?', [slug])
}
