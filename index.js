const yelpKey = "Oi573GrBv4w13yNAYNhpBCjWDx3IZIYGsxLn7vvj0oIXNkN-NagE5aB8oRgnC0-xSyac9xx9J39HCKSRf8bK6t6gEc7Y7zVbE1hGA47T-5dFyrMeJM0V2EZEm-cbXXYx";
const eventKey = "FngcKv6W8V6qn67j";
const yelpURL = 'https://api.yelp.com/v3/businesses/search?sortby=rating';
const eventURL = 'http://api.eventful.com/rest/events/search';



function dataReturn(location, date){
  console.log('dataReturn working');
}

function formListen() {
  console.log('formListen working')
  $('body').on('click', '#submit-button', function(event){
    event.preventDefault();
    const location = $('#location').val();
    const date = $('#date').val();
    dataReturn(location, date);
  })
}

function handlePage(){
  formListen();
}

$(handlePage);
