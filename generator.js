// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();


// Constructor function that creates an object with the sentences property
function GenerateNewText() {
    // add property to the object
    this.sentences = 
        [
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