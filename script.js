console.log("try")

// This is the list of record and structure.
const recordOfJournal =[{title:"President annoucement", artistname:"Vangue", numbertruck:3, url:"//https://"},
{title:"Traffic", artistname:"Terrry", numbertruck:4, url:"//https://"},
{title:"Pollution", artistname:"Mathio", numbertruck:5, url:"//https://"},
{title:"Abuse", artistname:"Peter", numbertruck:7, url:"//https://"},
{title:"Relation", artistname:"Deborah", numbertruck:2, url:"//https://"},] 

// This will show all of the possible action.
alert("These will be the possible structure of the record:\nTitle\nArtistname\nNumbertruck\nURL")

// Here user can choose which action action do they want.

const actionPossible = `Possible choic :
a : Show all the record
b : Add a new record
c : Update a specific recored
d : Remove an existing record
e : quite the program`

let actionChoice = prompt(actionPossible);

// Function for execute the strructure 

const pageForAllowChoic = () => {
  for(let i = 0; i < recordOfJournal.length; i++){
  let recordToBeSeen = `Title : ${recordOfJournal[i].title}
  Artistname : ${recordOfJournal[i].artistname}
  Numbertrack : ${recordOfJournal[i].numbertruck}
  URL : ${recordOfJournal[i].recordOfJournal}`;

  alert(recordToBeSeen);
  }
}
switch (actionChoice) {
    case a:

    break;
    case b:

    break;
    case c:

    break;
    case d:

    break;
    case e:

    break;
    
}
