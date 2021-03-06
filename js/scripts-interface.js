import { Copy } from './../js/scripts.js';

let displayData = function(results) {
  if (results.data.length === 0) {
    $('.output').append("<p class='no-return'>The search did not return any results. Please alter your search term and try again.</p>");
  } else {

    for(let i=0; i<results.data.length; i++) {

      console.log(results);

      let website = results.data[i].practices[0].website;
      let newPatients = results.data[i].practices[0].accepts_new_patients;

      if (website === undefined) {
        website = "This provider has not listed a website.";
      }

      if (newPatients === false) {
        newPatients = "This provider is not taking new patients at this time.";
      } else {
        newPatients = "This provider is taking new patients.";
      }

      $('.output').append(
        "<div class='output" + [i]
          + "'><img src="
          + results.data[i].profile.image_url
          + "> <h3>"
          + results.data[i].profile.first_name
          + " "
          + results.data[i].profile.last_name
          + "</h3><p>"
          + results.data[i].profile.bio
          + "</p><p>"
          + newPatients
          + "</p><p>"
          + results.data[i].practices[0].visit_address.street
          + "<br>"
          + results.data[i].practices[0].visit_address.city
          + ", "
          + results.data[i].practices[0].visit_address.state
          + " "
          + results.data[i].practices[0].visit_address.zip
          +"</p><p> Office Phone: "
          + results.data[i].practices[0].phones[0].number
          + "</p><p>"
          + website
        + "</p></div>"
      );
    }
  }
};

$(document).ready(function() {

  $("form#generator").submit(function(event) {
    let search = $("#search").val();
    event.preventDefault();

    let newSearch = new Copy(search);
    let apiResults = newSearch.apiConstructor(displayData);
  });

  $(".btn-error").click(function(event) {
    $('.output').empty();
    $('.output').empty();
  });

  $("form#generator2").submit(function(event) {
    let search = $("#search2").val();
    event.preventDefault();

    let newSearch = new Copy(search);
    let apiResults = newSearch.apiConstructor2(displayData);
  });

  $(".btn-error").click(function(event) {
    $('.output').empty();
    $('.output2').empty();
  });

});
