//Hour
// If hour is between 6am and 12pm - good morning
// if between 12pm and 6pm - good afternoon
// Otherwise good evening

let hour = 1;

if (hour >= 6 && hour < 12 ) 
    console.log('Good morning');
else if (hour >= 12 && hour < 18 ) 
    console.log('Good afternoon');
 else if (hour >= 0 && hour < 6 ) 
     console.log('It\'s too late to be up!');
else 
    console.log('Good evening'); 