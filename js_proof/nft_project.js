// create a variable to hold your NFT's
const chaitanyaNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _uid, _section) {
    let NFT = {
        "name" : _name,
        "uid" : _uid,
        "section" : _section
    }
    chaitanyaNFTs.push(NFT);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<chaitanyaNFTs.length; i++){
        console.log("\nMetadata of NFT " + (i+1) + ": ");
        console.log("Name: " + chaitanyaNFTs[i].name);
        console.log("UID: " + chaitanyaNFTs[i].uid);
        console.log("Section: " + chaitanyaNFTs[i].section);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nThe total number of NFTs minted are: " + chaitanyaNFTs.length);
}

// call your functions below this line
mintNFT("Chaitanya", "21CSE1234", "708-B");
mintNFT("Avinash", "21CSE3456", "603-A");
mintNFT("Sindhant", "21CSE2345", "405-B");
listNFTs();
getTotalSupply();