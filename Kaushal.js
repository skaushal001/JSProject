
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

let numberofNFTs=0;

/* this function will take in some values as parameters, create an
   NFT object using the parameters passed to it for its metadata, 
    and store it in the variable above.*/

function mintNFT (name,age,gender){

const nft= {
      name: name,
      age: age,
      gender:gender

};

numberofNFTs++;
return nft;

}

const nftArray =[];
//Create an NFT and store it in an array 
const firstNFT = mintNFT("Kaushal","19","Male");
nftArray.push(firstNFT);

//Create another NFT and store it in an array 

const secondNFT = mintNFT("Hazelwood","25","Male");
nftArray.push(secondNFT);

//Create another NFT and store it in an array 

const thirdNFT = mintNFT("Suzain","18","Female");
nftArray.push(thirdNFT);

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs(){

for (let i=0; i<nftArray.length;i++ ){
const nft = nftArray[i];
console.log("Name: " + nft.name);


console.log("Age: " + nft.age);


console.log("Gender: " + nft.gender);


console.log("..........................");

}

}

// print the total number of NFTs we have minted to the console

function getTotalSupply(){

console.log("Total no. of NFTs" + numberofNFTs);

}

// call your functions below this line

//Print the list of NFTs

listNFTs();

//Print the Total Supply

getTotalSupply();

