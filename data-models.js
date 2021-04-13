// 3 choices of quests to go on
// 1) Knock on the window
// 2) Bake some doughnuts
// 3) Make some coffee

// for each quest, 3 action choices
// Window - Pusheen stirs but doesn't wake up. What now?
    // 1) Knock harder
    // 2) Throw a rock
    // 3) Sing Pusheen's favorite song
// Doughnuts - Pusheen's little nose twitches but she's still snoring. Hmmm, what else can you do?
    // 1) Bake pizza with anchovies - what cat can resist?
    // 2) Taunt Pusheen by singing "smelly cat"
    // 3) Try to shake Pusheen awake
// Coffee - Pusheen's eyes flutter. Wonder how else we could nudge her awake?
    // 1) Start talking about your exciting plans for the day
    // 2) Play the piano
    // 3) Give up. I don't think this bad cat will ever wake up!

const knock = {
    id: 'knock',
    title: 'Knock on the Window',
    map: {
        top: '10%',
        left: '60%'
    },
    image: 'pusheen-window.gif',
    description: `
    Pusheen stirs but doesn't wake up. What now?
    `,
    choices: [{
        id: 'harder',
        description: 'Knock harder',
        result: `
            That's not very nice! Pusheen doesn't wake up, but the neighbors complain.
        `,
        friendshipPoints: 0,
        dreams: -10,
    }, {
        id: 'throw-rock',
        description: 'Throw a rock!',
        result: `
            How rude! The window shatters but Pusheen is still fast asleep.
        `,
        friendshipPoints: -30,
        dreams: -20
    }, {
        id: 'sing-song',
        description: 'Serenade Pusheen',
        result: `
            In her dreams, Pusheen hears a far-off voice singing her favorite song. She smiles in her sleep.
        `,
        friendshipPoints: 30,
        dreams: 50
    }]
};

const doughnuts = {
    id: 'doughnuts',
    title: 'Bake Some Doughnuts',
    map: {
        top: '75%',
        left: '50%'
    },
    image: 'pusheen-sleep-donuts.gif',
    description: `
    Pusheen's little nose twitches but she's still snoring. Hmmm, what else can you do?
    `,
    choices: [{
        id: 'shake',
        description: 'Give Pusheen a shake',
        result: `
            Pusheen mumbles to herself. Something about an earthquake. I don't think she liked that.
        `,
        friendshipPoints: -20,
        dreams: 0,
    }, {
        id: 'pizza',
        description: 'Bake pizza with anchovies - what cat can resist?',
        result: `
           Pusheen smiles and drools in her sleep.
        `,
        friendshipPoints: 30,
        dreams: 30
    }, {
        id: 'taunt',
        description: 'Taunt Pusheen by singing "Smelly Cat" to her',
        result: `
            Pusheen is crying in her sleep! What have you done?!
        `,
        friendshipPoints: -40,
        dreams: -40
    }]
};

const coffee = {
    id: 'coffee',
    title: 'Brew Fresh Coffee',
    map: {
        top: '10%',
        left: '1%'
    },
    image: 'coffee.jpeg',
    description: `
        You brew your finest pot of pour-over. Pusheen's eyes flutter. Wonder how else we could nudge her awake?
    `,
    choices: [{
        id: 'talk',
        description: 'Talk to Pusheen about the fun day of laziness you\'ll enjoy together',
        result: 'Pusheen smiles a little and rolls over.',
        friendshipPoints: 20,
        dreams: 30,
    }, {
        id: 'piano',
        description: 'Play the piano',
        result: 'You don\'t know how to play, but how hard can it be? Even if you do have paws and no fingers? Pretty hard.',
        friendshipPoints: -30,
        dreams: -40,
    }, {
        id: 'give-up',
        description: 'Give up. I don\'t think this bad cat will ever wake up!',
        result: 'You gave up on a day of laziness with your friend because it was just too much effort. Congratulations.',
        friendshipPoints: -50,
        dreams: -50,
    }]
};

const quests = [
    knock, 
    doughnuts,
    coffee,

];

export default quests;