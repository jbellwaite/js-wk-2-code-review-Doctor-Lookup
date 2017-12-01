let apiKey = require('./../.env').apiKey;

export class Copy {
  constructor(search) {
    this.search = search;
  }

  apiConstructor(displayData) {
    let query = this.search;
    let getDoctor = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=or-portland&sort=best-match-asc&skip=0&limit=10&user_key=${apiKey}`)
    .then(function(results) {
      displayData(results);
    })
    .fail(function() {
      alert('Sorry, something went wrong.');
    });
  }

  apiConstructor2(displayData) {
    let query = this.search;
    let getDoctor = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${query}&location=or-portland&sort=best-match-asc&skip=0&limit=10&user_key=${apiKey}`)
    .then(function(results) {
      displayData(results);
    })
    .fail(function() {
      alert('Sorry, something went wrong.');
    });
  }

}
