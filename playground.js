/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let iplPlayersCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (playerName, team, role, battingAverage, bowlingAverage) {
     const newPlayer = {
        playerName,
        team,
        role,
        battingAverage,
        bowlingAverage
    };
    
    iplPlayersCollection.push(newPlayer);
    console.log(`Minted: ${playerName} from ${team}`);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("\nListing all IPL player NFTs in the collection:\n");
    iplPlayersCollection.forEach(player => {
        console.log(`Player Name: ${player.playerName}`);
        console.log(`Team: ${player.team}`);
        console.log(`Role: ${player.role}`);
        console.log(`Batting Average: ${player.battingAverage}`);
        console.log(`Bowling Average: ${player.bowlingAverage}`);
        console.log("\n");
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return iplPlayersCollection.length;
}

// call your functions below this line

mintNFT("Virat Kohli", "Royal Challengers Bangalore", "Batsman", 38.16, null);
mintNFT("MS Dhoni", "Chennai Super Kings", "Wicketkeeper-Batsman", 40.25, null);
mintNFT("Rohit Sharma", "Mumbai Indians", "Batsman", 32.45, null);
mintNFT("Jasprit Bumrah", "Mumbai Indians", "Bowler", 12.34, 24.62);
mintNFT("Andre Russell", "Kolkata Knight Riders", "All-Rounder", 29.14, 27.33);
mintNFT("David Warner", "Sunrisers Hyderabad", "Batsman", 42.22, null);


listNFTs();

const totalNFTs = getTotalSupply();
console.log(`Total Supply: ${totalNFTs}`);