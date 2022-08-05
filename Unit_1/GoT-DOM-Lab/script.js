var characters = [
  {
    name: "Daenerys Targaryen",
    bio:
      'The youngest child of King Aerys II — also known as the Mad King — Daenerys is known by many titles, including the Mother of Dragons, or Khaleesi (which simply means "queen" in Dothraki).',
  },
  {
    name: "Khal Drogo",
    bio:
      'Khal Drogo is the leader of a Dothraki "khalasar" (tribe). He and Daenerys eventually come to care for one another, but the marriage begins under traumatic circumstances.',
  },
  {
    name: "Tyrion Lannister",
    bio:
      "Joanna Lannister died in childbirth when Tyrion when born. He's known for his cleverness and sharp tongue, though many derisively call him the Imp or Halfman.",
  },
  {
    name: "Sansa Stark",
    bio:
      "Sansa Stark was raised as a highborn lady who would one day marry into another great house.",
  },
  {
    name: "Arya Stark",
    bio:
      "Arya has no desire to grow up in the confines of ladyship — she prefers swords to sewing.",
  },
  {
    name: "Jon Snow",
    bio:
      "Said to be the bastard son of Ned Stark and a mystery woman, Jon is slightly ostracized from the rest of the Stark kids.",
  }
];

const moreInfoButtons = document.getElementsByClassName('more-info');
for (let button of moreInfoButtons) {
  button.addEventListener('click', (event) => {
    console.log('a button was clicked')
    
    // Step 1: Get the name of the character
    // Console.log each of these (check it one at a time).
    //  - The target of the event (the button)
    //  - The parent element of the button
    //  - All h3 elements inside the parent
    //  - Just the first h3 element (there is only one)
    //  - The text content of that h3 element
    
    // Step 2: Use that name to find the bio in the above data. 
    
    // Step 3: Add the bio

  })
}