console.log("try")

// This is the list of record and structure.
const recordOfJournal =[{title:"President annoucement", artistname:"Vangue", numbertruck:3, url:"//https://fero.com"},
{title:"Traffic", artistname:"Terrry", numbertruck:4, url:"//https://even.com"},
{title:"Pollution", artistname:"Mathio", numbertruck:5, url:"//https://sawy.com"},
{title:"Abuse", artistname:"Peter", numbertruck:7, url:"//https://pide.com"},
{title:"Relation", artistname:"Deborah", numbertruck:2, url:"//https://sweet.com"},] 

// This will show all of the possible action.
alert("These will be the possible structure of the record:\nTitle of the record\nName of the artist\nNumber of truck\nURL of the record")

// Here user can choose which action action do they want.

const actionPossible = `Possible choic :
1 : Show all the record
2 : Add a new record
3 : Update a specific recored
4 : Remove an existing record
0 : quite the program`

let actionChoice = prompt(actionPossible);


switch (actionChoice) {
    case 1:
    pageForAllowChoic();
    break;
    case 2:

    break;
    case 3:

    break;
    case 4:

    break;
    case 0:

    break;

}

actionChoice = prompt(actionPossible);
// Function for execute the strructure 

const pageForAllowChoic = () => {
  for(let i = 0; i < recordOfJournal.length; i++){
  let recordToBeSeen = `Title : ${recordOfJournal[i].title}
  Artistname : ${recordOfJournal[i].artistname}
  Numbertrack : ${recordOfJournal[i].numbertruck}
  URL : ${recordOfJournal[i].url}`;

  alert(recordToBeSeen);
  }
  
}

//Her the user will be able to add a new record

