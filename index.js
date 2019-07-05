const yelpKey = "Oi573GrBv4w13yNAYNhpBCjWDx3IZIYGsxLn7vvj0oIXNkN-NagE5aB8oRgnC0-xSyac9xx9J39HCKSRf8bK6t6gEc7Y7zVbE1hGA47T-5dFyrMeJM0V2EZEm-cbXXYx";
const eventKey = "FngcKv6W8V6qn67j";
const yelpURL = 'https://api.yelp.com/v3/businesses/search?sortby=rating';
const eventURL = 'http://api.eventful.com/rest/events/search';

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
  return queryItems.join('&');
}

function dataReturn(loc, time){
  console.log('dataReturn working');

  const eventParams = {
    app_key: eventKey,
    location: loc,
    date: time,
  };
  const yelpParams = {
    location: loc,
  };

  const yelpString = formatQueryParams(yelpParams);
  const eventString = formatQueryParams(eventParams)

  const urlYelp = yelpURL + '?' + yelpString;
  const urlEvent = eventURL + '?' + eventString;

  console.log(urlYelp);
  console.log(urlEvent);

  const options = {
    headers: new Headers({
      'Authorization': `Bearer ${yelpKey}`,
    })
  };

  fetch(urlYelp, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => console.log(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });

//   var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.yelp.com/v3/businesses/search?sortby=rating&location=phoenix,%20az",
//   "method": "GET",
//   "headers": {
//     "Authorization": "Bearer Oi573GrBv4w13yNAYNhpBCjWDx3IZIYGsxLn7vvj0oIXNkN-NagE5aB8oRgnC0-xSyac9xx9J39HCKSRf8bK6t6gEc7Y7zVbE1hGA47T-5dFyrMeJM0V2EZEm-cbXXYx",
//     "User-Agent": "PostmanRuntime/7.15.0",
//     "Accept": "*/*",
//     "Cache-Control": "no-cache",
//     "Postman-Token": "d4b8fdb8-221d-4dd2-bad0-5c9642f96521,096bd8c9-9b3d-4a26-a396-6484738a3497",
//     "Host": "api.yelp.com",
//     "accept-encoding": "gzip, deflate",
//     "Connection": "keep-alive",
//     "cache-control": "no-cache"
//   }
// }
//
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
}

function formListen() {
  console.log('formListen working')
  $('body').on('click', '#submit-button', function(event){
    event.preventDefault();
    const loc = $('#location').val();
    const time = $('#date').val();
    dataReturn(loc, time);
  })
}

function handlePage(){
  formListen();
}

$(handlePage);
