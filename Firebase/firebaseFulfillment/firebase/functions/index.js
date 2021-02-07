'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const requestLib = require('request');

// initialise DB connection
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: '*******.firebaseio.com/',
});
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  
   var numberParam = agent.parameters.number;
   var seatcount = numberParam;
  
  function savemovieloc(agent) 
  {
    const confirmlocParam = agent.parameters.confirmloc;
    const conf = confirmlocParam;
    
    agent.add(`Select the language.`
    +
    `
    English.
    Hindi.
    Tamil.`
    );
	
    return admin.database().ref('/movieticket').push({bangalore: conf}).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    console.log('database write sucessful: ' + snapshot.ref.toString());
  });
  }
  
    function savemovienoloc(agent) 
  {
    const movieParam = agent.parameters.movie;
    const conf = movieParam;
    
    agent.add(`Select the city from the below list.`
    +
    `
    Bangalore.
    Chennai.
    Hyderabad.
    Cochin`
    );
	
    //return admin.database().ref('/movieticket').push({bangalore: conf}).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    //console.log('database write sucessful: ' + snapshot.ref.toString());
  //});
  }
  
  function savemovielocsel(agent) 
  {
    const othercitiesParam = agent.parameters.othercities;
    const conf = othercitiesParam;
    
    agent.add(`Select the language.`
    +
    `
    English.
    Hindi.
    tamil.`
    );
	
    return admin.database().ref('/movieticket').push({city: conf}).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    console.log('database write sucessful: ' + snapshot.ref.toString());
  });
  }
  
function savemovielangsel(agent) 
{
    const languageParam = agent.parameters.language;
    const conf = languageParam;
    if(conf=='english')
    {
        agent.add(`Here are the new ` + conf +` movie releases. `
        + `
        Avengers.
        Aquaman.
        Mortal Engines.`);
    }
    if(conf=='hindi')
    {
        agent.add(`Here are the new ` + conf +` movie releases. `
        +`
        stree.
        Padmavat.
        Sholay.`);
    }
    if(conf=='tamil')
    {
       agent.add(`Here are the new ` + conf +` movie releases. `
    +`
    2.O.
    Sarkar.
    Vishwaroopam.`);
    }
	
    return admin.database().ref('/movieticket').push({language: conf}).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    console.log('database write sucessful: ' + snapshot.ref.toString());
  });
}

 function savemoviename(agent) 
  {
    const moviesParam = agent.parameters.movies;
    const conf = moviesParam;
    
    agent.add(`Good Choice!, let me assist you in booking tickets. `
    +
    `Choose from theaters near you. `
    +
    `
    Lido.
    Forum Multiplex.
    Orion Mall.`
    );
	
    return admin.database().ref('/movieticket').push({movie_name: conf});
  }
  
  function savemovietheater(agent) 
  {
    const theatersParam = agent.parameters.theaters;
    const conf = theatersParam;
    
    agent.add(`Choose from seating class. `
    +
    `
    Economy.
    Premium.`
    );
	
    return admin.database().ref('/movieticket').push({theater_name:conf}).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    console.log('database write sucessful: ' + snapshot.ref.toString());
  });
  }
  
    function savemovieseat(agent) 
  {
    const seatclassParam = agent.parameters.seatclass;
    const conf = seatclassParam;
    
    agent.add(`when do you want to watch the movie?`
    );
	
    return admin.database().ref('/movieticket').push({Seat_class: conf});
  }
  
      function savemoviedate(agent) 
  {
    const dateParam = agent.parameters.date;
    const conf = dateParam;
    
    agent.add(`Please select the show timings from the below list. `
    +
    `
    9am.
    12pm.
    3pm.
    6pm.
    9pm.`
    );
	
    return admin.database().ref('/movieticket').push({date: conf});
  }
  
    function savemovietime(agent) 
  {
    const showsParam = agent.parameters.shows;
    const seatcounts = showsParam;
    
    agent.add(`How many tickets do you want to book?`
    );
	
    return admin.database().ref('/movieticket').push({Time: seatcounts});
  }
  
  
  function savemovieticketno(agent) 
  {
    const numberParam = agent.parameters.number;
    const conf = numberParam;
    
    agent.add(`Please repeat the number of seats for confirmation`);
	
    return admin.database().ref('/movieticket').push({Number_of_tickets: conf});
  }
  
   function savemovieyes(agent) 
  {
    const confirmsysParam = agent.parameters.confirmsys;
    const conf = confirmsysParam;
    
    agent.add(`Please repeat the number of seats for confirmation`);
	
  //  return admin.database().ref('/movieticket').push({Number_of_tickets: conf});
  }
  
   function final(agent) 
  {
    const confirmParam = agent.parameters.confirm;
    const conf = confirmParam;
    
    
    agent.add(`Kudos! You have booked your tickets to #movie_name.movies .`+`
    
    Payment has been made from your default payment method (Credit card).`+`
    

    Show the below QR code at the theater entrance.`+`
    
    Enjoy the show. Good bye.`); 
    const url = require('url');
    const myURL =
    url.parse('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example');
//     https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example 
	
  //  return admin.database().ref('/movieticket').push({Number_of_tickets: conf});
  }
  
  
   function savemovieticketconfirmfinal(agent) 
  {
    let context = agent.getcontext('money');
    numberParam = context.parameters.number;
    //const seatcount = showsParam;
    seatcount = numberParam*100;
    agent.add(`Amount to be paid = ` + seatcount + `!`);
	
   // return admin.database().ref('/movieticket').push({Number_of_tickets: conf});
  }
  
  
  
  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('bangloc', savemovieloc);
  intentMap.set('otherloc', savemovienoloc);
  intentMap.set('otherlocsel', savemovielocsel);
  intentMap.set('sellanguage', savemovielangsel);
    intentMap.set('movies', savemoviename);
    intentMap.set('theaters', savemovietheater);
    intentMap.set('seat', savemovieseat);
    intentMap.set('date', savemoviedate);
    intentMap.set('time', savemovietime);
    intentMap.set('ticket', savemovieticketno);
    intentMap.set('finalyes', savemovieyes);
    intentMap.set('ticket - repeat - yes', final);
  agent.handleRequest(intentMap);
});