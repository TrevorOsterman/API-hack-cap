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
