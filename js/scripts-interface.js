import { Copy } from './../js/scripts.js';

let displayData = function(results) {
  console.log(results);

  for(let i=0; i<results.data.length; i++) {
    // $('.output').append(
    //   "<div class='output" + [i]
    //     + "'><img src="
    //     + results.data[i].profile.image_url
    //     + "> <h3>"
    //     + results.data[i].profile.first_name
    //     + " "
    //     + results.data[i].profile.last_name
    //     + "</h3><p>"
    //     + results.data[i].profile.bio
    //     + "</p><p>This practicioner is accepting new patients at this time: "
    //     + results.data[i].practices[0].accepts_new_patients
    //     + ".</p><p>"
    //     + results.data[i].practices[0].visit_address.street
    //     + "<br>"
    //     + results.data[i].practices[0].visit_address.city
    //     + ", "
    //     + results.data[i].practices[0].visit_address.state
    //     + " "
    //     + results.data[i].practices[0].visit_address.zip
    //     +"</p><p> Office Phone: "
    //     + results.data[i].practices[0].phones[0].number
    //     + "</p>"
    //   + "</div>"
    // );
    let website = results.data[i].practices[0].website;
    console.log(website);

    if (typeof website != 'undefined') {
      $('.output2').append(
        "<div class='output-website"+ [i] + ">This provider has no website on file</div>"
      );
    } else {
      console.log("yay!");
      // $('.output2').append(
      //   "<div class='output-website"
      //   + [i]
      //   + ">"
      //   + results.data[i].practices[0].website
      //   + "</div>"
      // );
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
  });

});
