// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();


// Constructor function that creates an object with the sentences property
function GenerateNewText() {
    // add property to the object
    this.sentences = 
        [
            "These are not conspiracies but real world programs are developing a breakaway civilizations thats the key to everything standardized total surveillance control grit the power supplies power control human-animal ",
            "Hybrids that match farming of humanoid tissue trans-shipments. ", 
            "Games that cover the multi-layered binary weapon Delivery Systems. ",
            "That's what we have in that what's that well the thing is 5G behavioral modifications we hit that Trojan Horse delivery system. ",
            "Cell phone vaccines have been designed to hurt you. ",
            "Demonic high-tech tyranny is destroying the underwater Artic oceanic currents. ",
            "They're jacking it like a cell phone tell me what you've always used I heard of it everyone heard about 1947 to 1983. ",
            "I have family that was in advanced DARPA research projects. ",
            "Demonic high-tech tyranny is destroying the underwater artic oceanic currents.",
            "My dad told me about cyborgs at the kitchen table. ",
            "Digital corporate auctions. ",
            "1950's diagram of the VR goggles for famous people and you don't believe in any aliens? ",
            "The elves are biological Androids that grace other systems going on and no one knows. ",
            "Warfare psychological stuff no one knows the truth cuz it's it's virtual reality once you get to that level so no one knows. ",
            "Interdimensional child molesting monkey robots control our thoughts. ",
            "They literally have an alien base and they are making intergalactic deals. ",
            "BECAUSE THE HUMAN-ANIMAL HYBRID CREATURES KNOW ABOUT IT! ",
            "The government has weather weapons. I have seen them. ",
            "Chemicals in the water are turning THE FROGS GAY!",
            "Demonic high-tech tyranny is destroying the underwater artic oceanic currents.",
            "Pedophilia monkey creatures using DMT for interstellar purposes are harvesting mouse organs. ",
            "Top teir occultists are undermining the basic patterns for traditional embryonic soups. ",
            "BOHEMIAN GROVE IS THE UNDECLARED VISION OF THE CROWLEY CLINTON UNION OF DRACONIAN PARA-PHYSICAL SEX TRANSITIONING! ",
            "Selective breeding is the sanctioned selection of friendly diversity orchestrated by Hanson. ",
            "GEORGE SOROS INVITED SONOS SPEAKERS TO CONTROL ANCIENT FOR PSEDUO-INTERDIMENSIONAL DRUM CIRCLES ACROSS THE COSOMOS! ",
            "Fred Rogers was a mouth piece for the left to inflate electro-chemical psychedelic drugs that infest tyrannical puppet creatures living inside of Serbia. ",
            "Globalists! Pseudoscience! ",
            "Pseudoscience globalists using electro-chemical psychedelic drugs. ",
            "The media is not gonna cover this... ",
            "AGAIN! THE MEDIA IS NEVER GONNA! COVER! THIS! "
    ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
    let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
      return randomSentence;
  }

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
    let paragraph = "";
    
    // Set the minimum number of words
    let minimumCharacterLength = 500;
    let firstSentence = true;
    
    while (paragraph.length < minimumCharacterLength) {
        if (firstSentence) {
            paragraph = paragraph.concat(this.getRandomSentence());
            firstSentence = false;
        } else {
            paragraph = paragraph.concat(" " + this.getRandomSentence());
        }
    }
    return paragraph;
}

// Method to the GenerateNewText constructor function that generate multipl paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
    let allParagraphs = [];

    // Generate the number of paragraphs as specified by the user
    while(allParagraphs.length < numberOfParagraphs) {
        allParagraphs.push(this.getParagraph());
    }

    // Convert array into HTML string
    let paragraphHTML = "";
    allParagraphs.forEach(function(paragraph){
        paragraphHTML += "<p>" + paragraph + "</p>";
    });

    return paragraphHTML;

}

module.exports = loremIpsum;