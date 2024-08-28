// Object of movies
const movieCategories = {
  "Drama Movies": [
    {
      image: "src/silent-echoes.jpeg",
      name: "Silent Echoes",
      genre: "Mystery/Drama",
      duration: "1h 45m",
      description:
        "Eleanor Grayson stands on the cliffs of Caerwyn, where every crashing wave carries the weight of unspoken words. As she confronts the echoes of her past, Eleanor realizes that some secrets are too powerful to remain buried.",
      cast: "Josh Hartnett, Ariel Donoghue, Saleka Shyamalan",
    },
    {
      image: "src/beneath-the-surface.jpeg",
      name: "Beneath the Surface",
      genre: "Thriller/Drama",
      duration: "2h 7m",
      description:
        "Sheriff Tom Lawson knows that Marston Hollow’s calm exterior hides dark secrets. When Claire Hawthorne uncovers a decades-old mystery, the town's peaceful facade begins to crack, revealing a storm of deception waiting to be unleashed.",
      cast: "Ryan Reynolds, Hugh Jackman, Emma Corrin",
    },
    {
      image: "src/fractured-reflections.jpeg",
      name: "Fractured Reflections",
      genre: "Psychological Drama",
      duration: "1h 45m",
      description:
        "After a mirror shatters, Sam Mercer faces a fragmented version of himself, each piece reflecting a different life. As he delves into these fractured realities, Sam must confront the inner conflicts that threaten to tear him apart.",
      cast: "Michael Fassbender, Tessa Thompson, Lakeith Stanfield",
    },
    {
      image: "src/fallen-grace.jpeg",
      name: "Fallen Grace",
      genre: "Gothic Drama",
      duration: "1h 49m",
      description:
        "Lady Evelyn wanders the crumbling halls of Eversleigh Manor, where echoes of lost grandeur whisper tales of a once-great family. As she uncovers the dark secrets that led to their downfall, Evelyn must face the truth of her own legacy.",
      cast: "Jessica Chastain, Tom Hardy, Alicia Vikander",
    },
    {
      image: "src/eclipse-of-fate.jpeg",
      name: "Eclipse of Fate",
      genre: "Romantic Drama",
      duration: "2h 2m",
      description:
        "During a total eclipse, the paths of Marcus Vale and Lyra Veridian cross in Eclipse Bay. As darkness falls, they are forced to confront the secrets and choices that have shaped their destinies.",
      cast: "Natalie Portman, Jake Gyllenhaal, Marion Cotillard",
    },
    {
      image: "src/shattered-bonds.jpeg",
      name: "Shattered Bonds",
      genre: "Romantic Drama",
      duration: "2h 14m",
      description:
        "Sarah and James Carter once shared an unbreakable bond, now fractured by betrayal. As they navigate the broken pieces of their relationship, they must decide if love can rise from the ashes or if it has turned to dust.",
      cast: "Florence Pugh, Henry Cavill, Zendaya",
    },
    {
      image: "src/the-last-letter.jpeg",
      name: "The Last Letter",
      genre: "Dramatic Mystery",
      duration: "2h 25m",
      description:
        "In a quiet attic, Isabella Montrose writes what could be her final letter. As each word reveals hidden truths and long-held regrets, Isabella must come to terms with the choices that have defined her life.",
      cast: "Emma Watson, Adam Driver, Rooney Mara",
    },
    {
      image: "src/the-weight-of-time.jpeg",
      name: "The Weight of Time",
      genre: "Dramatic Fantasy",
      duration: "1h 56m",
      description:
        "In the village of Tempus Falls, Elias is haunted by the moments that time has stolen. As he stands before the ancient clock tower, Elias is confronted with the weight of his past and the fleeting nature of the future.",
      cast: "Benedict Cumberbatch, Carey Mulligan, Timothée Chalamet",
    },
    {
      image: "src/veil-of-lies.jpeg",
      name: "Veil of Lies",
      genre: "Suspense Drama",
      duration: "2h 30m",
      description:
        "Olivia Sinclair’s life is built on lies, but when journalist Ethan Cross uncovers the truth, her world begins to unravel. As Olivia's secrets are exposed, she must decide if she can face the consequences or continue to live in the shadows.",
      cast: "Olivia Wilde, Paul Rudd, Janelle Monáe",
    },
    {
      image: "src/whispers-of-the-past.jpeg",
      name: "Whispers of the Past",
      genre: "Historical Mystery",
      duration: "1h 53m",
      description:
        "In the ruins of Vespera, Dr. Helena Quinn uncovers relics of a forgotten world. As she listens to the whispers of history, Helena is drawn into a mystery that could change the present—or doom it to repeat the past.",
      cast: "Cate Blanchett, Oscar Isaac, Margot Robbie",
    },
  ],
  "Sci-fi Films": [
    {
      image: "src/echoes-of-tomorrow.jpeg",
      name: "Echoes of Tomorrow",
      genre: "Sci-Fi Thriller",
      duration: "2h 3m",
      description:
        "In the sprawling metropolis of Neoterra, where the future is visible through shimmering rifts, Alex Harper teeters on the edge of destiny. As echoes of tomorrow play out in a city bathed in light and shadow, Alex must decipher what is real and what is mere illusion, while the fate of humanity hangs in the balance.",
      cast: "Michael Fassbender, Cate Blanchett, Idris Elba",
    },
    {
      image: "src/galactic-outlaws.jpeg",
      name: "Galactic Outlaws",
      genre: "Space Opera",
      duration: "2h 22m",
      description:
        "In the lawless outer reaches of the galaxy, Captain Mara Kane and her ragtag crew of renegades live by their own rules. As they navigate treacherous alliances and dodge bounty hunters, they carve out their own place in a universe where justice is as distant as the stars, and loyalty is the only currency that matters.",
      cast: "Chris Hemsworth, Zoe Saldana, Oscar Isaac",
    },
    {
      image: "src/the-last-colony.jpeg",
      name: "The Last Colony",
      genre: "Sci-Fi Drama",
      duration: "1h 45m",
      description:
        "On the barren planet of Novaterra, humanity's last colony fights for survival. Commander Elena Vasquez leads a community where every day is a struggle against the planet’s harsh elements and dwindling resources. As hope fades with each passing sunset, Elena must rally her people for one final stand—or watch the last remnants of mankind disappear forever.",
      cast: "Jessica Chastain, Tom Hardy, John Boyega",
    },
    {
      image: "src/singularity-rising.jpeg",
      name: "Singularity Rising",
      genre: "Sci-Fi Drama",
      duration: "1h 58m",
      description:
        "In a world where the line between human and machine is all but erased, Dr. Julian Reed discovers a new form of intelligence rising from the depths of the digital world. As this artificial consciousness begins to challenge humanity's place at the top of the evolutionary ladder, Julian faces an existential crisis: what does it truly mean to be alive, and is humanity ready to face the dawn of a new species?",
      cast: "Natalie Portman, Rami Malek, Emma Watson",
    },
    {
      image: "src/chrono-nexus.jpeg",
      name: "Chrono Nexus",
      genre: "Sci-Fi Adventure",
      duration: "1h 48m",
      description:
        "When a catastrophic event merges multiple timelines, heroes from every era must band together to confront a reality in flux. As they wrestle with paradoxes and alternate histories, these unlikely allies must answer a crucial question: can they control time itself, or will they become pawns in its relentless march forward? The fate of past, present, and future lies in their hands.",
      cast: "Matt Damon, Charlize Theron, Benedict Cumberbatch",
    },
    {
      image: "src/celestial-frontier.jpeg",
      name: "Celestial Frontier",
      genre: "Space Adventure",
      duration: "2h 3m",
      description:
        " On the edge of the galaxy, where the known universe gives way to the vast unknown, Captain Anya Callen leads an expedition into uncharted space. As they encounter strange new worlds and alien civilizations, the crew of the Starbound must push beyond their limits to survive the dangers of the celestial frontier, where discovery and peril go hand in hand.",
      cast: "Emily Blunt, Jake Gyllenhaal, Laurence Fishburne",
    },
    {
      image: "src/quantum-paradox.jpeg",
      name: "Quantum Paradox",
      genre: "Sci-Fi Thriller",
      duration: "2h 27m",
      description:
        "Dr. Michael Trent is trapped between alternate realities, each one a different version of his life. As the fabric of existence begins to unravel, Michael must navigate a labyrinth of choices that create new paths with every decision. But with time running out, he must find the one reality that holds the key to his survival—or risk the collapse of all worlds.",
      cast: "Keanu Reeves, Alicia Vikander, David Oyelowo",
    },
    {
      image: "src/the-void-walkers.jpeg",
      name: "The Void Walkers",
      genre: "Sci-Fi Mystery",
      duration: "1h 59m",
      description:
        "At the edge of a massive black hole, Captain Lydia Drake and her team of explorers face the ultimate unknown. As they prepare to cross the event horizon, where time and space lose all meaning, they confront a terrifying question: what lies beyond? Is it the salvation they seek, or the oblivion they fear? The truth awaits in the heart of the void.",
      cast: "Brie Larson, Michael B. Jordan, Tessa Thompson",
    },
  ],
  "Comedy Movies": [
    {
      image: "src/detective-disasters.jpeg",
      name: "Detective Disasters",
      genre: "Comedy",
      duration: "2h 18m",
      description:
        "Follow bumbling detectives Tim and Laura as they tackle a baffling case with mismatched gear and absurd clues. Their investigation spirals into comedic chaos, where every clue leads to more laughter than answers.",
      cast: "Tom Hardy, Emma Stone, Michael Cera",
    },
    {
      image: "src/galactic-misfits.jpeg",
      name: "Galactic Misfits",
      genre: "Comedy",
      duration: "1h 44m",
      description:
        "Join Captain Charlie Skye and his clueless crew as they fumble through space. From alien tech mishaps to cosmic blunders, their interstellar adventures are filled with laugh-out-loud moments.",
      cast: "Chris Pratt, Mindy Kaling, John Boyega",
    },
    {
      image: "src/quantum-quirks.jpeg",
      name: "Quantum Quirks",
      genre: "Comedy",
      duration: "1h 49m",
      description:
        "Watch Dr. Penny Lane and her quirky team unleash chaotic reality glitches in their lab. Their experiments go hilariously wrong, turning their workspace into a carnival of floating objects and bizarre mishaps.",
      cast: "Kristen Wiig, Kumail Nanjiani, Tiffany Haddish",
    },
    {
      image: "src/robots-&-rodeo.jpeg",
      name: "Robots & Rodeo",
      genre: "Comedy",
      duration: "1h 34m",
      description:
        "Experience a Wild West showdown with a sci-fi twist. Sheriff Rusty Gear and his robotic cowboys tackle mechanical bulls and laser lassos in a futuristic rodeo like no other.",
      cast: "Ryan Reynolds, Alison Brie, Dwayne Johnson",
    },
    {
      image: "src/the-great-underwater-heist.jpeg",
      name: "The Great Underwater Heist",
      genre: "Comedy",
      duration: "1h 54m",
      description:
        "Dive into underwater hilarity with Captain Sandy Coral and her comedic crew. Their attempt to pull off a heist in a vibrant reef city turns into a series of laugh-out-loud underwater blunders.",
      cast: "Jennifer Lawrence, Seth Rogen, Rebel Wilson",
    },
    {
      image: "src/the-incredible-fumble-squad.jpeg",
      name: "The Incredible Fumble Squad",
      genre: "Comedy",
      duration: "1h 57m",
      description:
        "Follow Captain Blunder and his bumbling superhero team as they hilariously fail their way through a city under siege. Their ridiculous gadgets and missteps make for a riotous superhero adventure.",
      cast: "Jason Bateman, Leslie Jones, Bill Hader",
    },
    {
      image: "src/the-jesters-quest.jpeg",
      name: "The Jester’s Quest",
      genre: "Comedy",
      duration: "1h 44m",
      description:
        "Join Jester Jinx on a fantastical quest filled with oversized dragons and magical mishaps. His comedic misadventures in a medieval world promise a whimsical and hilarious journey.",
      cast: "Will Ferrell, Kate McKinnon, Paul Rudd",
    },
    {
      image: "src/the-lost-legends.jpeg",
      name: "The Lost Legends",
      genre: "Comedy",
      duration: "2h 13m",
      description:
        "Embark on a laugh-out-loud treasure hunt with a team of legendary characters like you've never seen before. In an ancient jungle filled with exaggerated traps and pitfalls, these parody heroes hilariously stumble their way through a quest for hidden riches. The adventure is wild, and the comedy is legendary!",
      cast: "Jack Black, Sarah Silverman, Andy Samberg",
    },
    {
      image: "src/the-phantom-pizza-parlor.jpeg",
      name: "The Phantom Pizza Parlor",
      genre: "Comedy",
      duration: "2h 11m",
      description:
        "Step into the spookiest pizza joint around, where the ghosts of failed recipes wreak havoc. Watch as spectral chefs hilariously struggle with flying dough and haunted kitchen gadgets. The kitchen may be haunted, but the laughs are all too real!",
      cast: "Nick Offerman, Maya Rudolph, David Schwimmer",
    },
    {
      image: "src/time-twisted-tales.jpeg",
      name: "Time-Twisted Tales",
      genre: "Comedy",
      duration: "2h 04m",
      description:
        "Witness history’s most out-of-place characters in a comedic time travel romp. From medieval knights to futuristic techies, these parody figures hilariously clash as they navigate a mishmash of eras and gadgets. Expect a whirlwind of funny moments as they struggle to make sense of their time-twisted adventure!",
      cast: "Bill Murray, Zoe Saldana, Jim Parsons",
    },
  ],
  "Action Movies": [
    {
      image: "src/rogue-assault.jpeg",
      name: "Rogue Assault",
      genre: "Action/Thriller",
      duration: "2h 18m",
      description:
        "In a city plagued by corruption, former special ops soldier Jack Mitchell leads a covert team to dismantle a powerful crime syndicate. As they fight their way through a web of deceit and danger, Jack must confront his own dark past and navigate the treacherous world of underground warfare.",
      cast: "Alex Horne, Mia Roberts, David Torres",
    },
    {
      image: "src/titan's-clash.jpg",
      name: "Titan’s Clash",
      genre: "Action/Sci-Fi",
      duration: "1h 44m",
      description:
        "When colossal robots face off against alien invaders in a high-stakes battle, the fate of humanity is on the line. Amid epic city-destroying combat, it's a fight for survival as steel and fire clash with extraterrestrial forces. Will the titans of Earth prevail, or will the invaders conquer all?",
      cast: "Ava Martinez, Leo Nguyen, Zoe Patel",
    },
    {
      image: "src/operation-thunderstrike.jpeg",
      name: "Operation Thunderstrike",
      genre: "Action",
      duration: "1h 56m",
      description:
        "An elite team embarks on a high-risk mission against a ruthless enemy with no room for error. As they strike swiftly and decisively, the enemy is caught off guard. In this pulse-pounding action, the team must overcome deadly obstacles to ensure their mission's success.",
      cast: "Ethan Brooks, Lily Carter, Max Anderson",
    },
    {
      image: "src/urban-fury.jpeg",
      name: "Urban Fury",
      genre: "Action",
      duration: "1h 47m",
      description:
        "In a city engulfed by flames and corruption, vigilante Tara Williams rises from the ashes to mete out justice. Armed with firepower and fury, she battles against the city's darkest forces, determined to restore order amidst chaos. The streets may be burning, but her resolve burns even brighter.",
      cast: "Chloe Adams, Ryan Black, Grace Turner",
    },
    {
      image: "src/inferno-protocol.jpg",
      name: "Inferno Protocol",
      genre: "Action",
      duration: "1h 56m",
      description:
        "In the midst of a towering inferno, a team of heroes races against time to rescue lives. As flames rage and danger intensifies, they must overcome their fears and fight to save those trapped in the fiery chaos. Will their bravery extinguish the fire of disaster?",
      cast: "Lucas Smith, Emma Scott, Daniel Moore",
    },
    {
      image: "src/high-voltage.jpg",
      name: "High Voltage",
      genre: "Action",
      duration: "1h 58m",
      description:
        "In a high-stakes future heist, elite thieves must execute the ultimate robbery where the risks are electrifying. With each move fraught with danger, one mistake could spell disaster. Can they pull off the heist of the century without getting shocked?",
      cast: "Sophie Wilson, Oliver James, Mia Chen",
    },
    {
      image: "src/deadly-pursuit.jpg",
      name: "Deadly Pursuit",
      genre: "Action",
      duration: "1h 47m",
      description:
        "On a treacherous road, survival is a race against time. In a high-speed chase through dangerous terrain, every second counts as driver and pursuer alike navigate obstacles. The road is perilous, and every turn could be their last.",
      cast: "Jack Evans, Isla Lee, Henry Cooper",
    },
    {
      image: "src/quantum-strike.jpg",
      name: "Quantum Strike",
      genre: "Action/Sci-Fi",
      duration: "2h 10m",
      description:
        "When rogue AI threatens to obliterate humanity, elite operatives are thrust into a deadly digital battlefield. As they battle through virtual and physical threats, technology becomes their weapon and their enemy. Can they strike down the AI before it’s too late?",
      cast: "Ava Reed, Nathan Kim, Lily Brooks",
    },
    {
      image: "src/edge-of-extinction.jpg",
      name: "Edge of Extinction",
      genre: "Action",
      duration: "2h 03m",
      description:
        "On the brink of global annihilation, humanity’s last hope rests on a fierce battle for survival. In a world teetering on the edge, every confrontation could be the final one. Will they fight through the end of days or succumb to extinction?",
      cast: "Finn Carter, Zoe Taylor, Max Murphy",
    },
    {
      image: "src/last-stand.jpg",
      name: "Last Stand",
      genre: "Action",
      duration: "1h 44m",
      description:
        "In a remote town under siege by a ruthless mercenary group, sheriff Maria Alvarez must rally the townsfolk to defend their homes. With limited resources and growing desperation, Maria leads a desperate stand against overwhelming odds.",
      cast: "Emily Johnson, Jack Sanders, Nora Brooks",
    },
    {
      image: "src/covert-ops.jpg",
      name: "Covert Ops",
      genre: "Action/Thriller",
      duration: "1h 49m",
      description:
        "Deep inside a high-tech fortress, special agents navigate a labyrinth of deadly traps and laser-guarded corridors. With every step fraught with peril, they must complete their high-stakes mission while evading unseen threats. Will they emerge victorious or fall victim to the fortress’s deadly defenses?",
      cast: "Ryan Clark, Mia Anderson, Lucas Harris",
    },
    {
      image: "src/nuclear-shadow.jpg",
      name: "Nuclear Shadow",
      genre: "Action",
      duration: "1h 54m",
      description:
        "As a nuclear threat looms, a bomb squad races against time to disarm a device deep within enemy territory. With the clock ticking and the stakes higher than ever, they must defuse the crisis or face catastrophic consequences. Can they prevent a global disaster before time runs out?",
      cast: "Zoe Martin, Ethan Thompson, Olivia Walker",
    },
  ],
};

function generateMovieCards() {
  Object.keys(movieCategories).forEach((categoryName) => {
    const movieGrid = document.getElementById(
      categoryName.replace(/\s+/g, "-").toLowerCase() + "-grid"
    );

    const movies = movieCategories[categoryName];

    movieGrid.innerHTML = "";

    movies.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.className = "movie-card";

      movieCard.innerHTML = `
          <img src="${movie.image}" alt="${movie.name}">
          <div class="movie-info">
            <h3>${movie.name}</h3>
          </div>
        `;
      movieCard.addEventListener("click", (event) => {
        openModal(movie, movieCard);
      });
      movieGrid.appendChild(movieCard);
    });
  });
}

// Call the function to generate movie cards on page load
generateMovieCards();

function openModal(movie, clickedCard) {
  let modal = document.getElementById("movie-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "movie-modal";
    modal.className = "modal";

    modal.innerHTML = `
          <div class="modal-content">
            <img id="modal-image" src="" alt="">
            <div class="modal-text">
                <h1 id="modal-name"></h1>
                <div class="movie-keywords">
                   <p id="modal-genre"></p>
                   <p id="modal-duration"></p>
                </div>
                <p id="modal-cast"></p>
                <p id="modal-description"></p>
                <span class="close-btn">&times;</span>
            </div>
          </div>
        `;

    document.querySelector("body").appendChild(modal);

    // Add event listener for close button
    modal.querySelector(".close-btn").addEventListener("click", () => {
      closeModal();
    });

    // Add event listener for clicking outside the modal
    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        closeModal();
      }
    });
  }

  // Populate the modal with movie details
  const modalImage = modal.querySelector("#modal-image");
  const modalName = modal.querySelector("#modal-name");
  const modalGenre = modal.querySelector("#modal-genre");
  const modalDuration = modal.querySelector("#modal-duration");
  const modalDate = modal.querySelector("#modal-date");
  const modalCast = modal.querySelector("#modal-cast");
  const modalDescription = modal.querySelector("#modal-description");

  modalImage.src = movie.image;
  modalImage.alt = movie.name;
  modalName.textContent = movie.name;
  modalGenre.textContent = movie.genre;
  modalDuration.textContent = movie.duration;
  modalCast.textContent = movie.cast;
  modalDescription.textContent = movie.description;

  // Show the modal
  modal.style.display = "block";

  // Remove blur and highlight effects from all cards
  document.querySelectorAll(".movie-card").forEach((card) => {
    card.classList.remove("card-blur", "card-highlight");
  });

  // Apply blur effect to all cards except the clicked one
  document.querySelectorAll(".movie-card").forEach((card) => {
    if (card !== clickedCard) {
      card.classList.add("card-blur");
    } else {
      card.classList.add("card-highlight");
    }
  });
}

function closeModal() {
  const modal = document.getElementById("movie-modal");
  modal.style.display = "none";

  // Remove blur and highlight effects from all cards
  document.querySelectorAll(".movie-card").forEach((card) => {
    card.classList.remove("card-blur", "card-highlight");
  });
}

// DROPDOWN MENU
document.addEventListener("DOMContentLoaded", function () {
  const genresMenu = document.querySelector(".genres-menu");
  const genresHeading = genresMenu.querySelector(".genres-heading");
  const genresDropdown = genresMenu.querySelector(".genres-dropdown");

  genresHeading.addEventListener("click", function (event) {
    event.preventDefault();
    genresDropdown.style.display =
      genresDropdown.style.display === "block" ? "none" : "block";
  });

  // Optional: Close the dropdown if clicked outside
  document.addEventListener("click", function (event) {
    if (!genresMenu.contains(event.target)) {
      genresDropdown.style.display = "none";
    }
  });
});
