

var id1 = "outsideAnonymousFunction";

var anonymousFunction = function(){
    var id2 = "anonymousFunction\n";
    console.log("\nOUTSIDE ANONYMOUSE: "+id1); 
    console.log("\nBEFORE: "+before);
    console.log("\nINSIDE: "+id2);
    console.log("\nOTHER SCRIPT: "+posebanScript); 
    console.log("\nAFTER: "+after);
      
}
anonymousFunction();
