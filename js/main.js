(function() {

    ////////////////////////////////////////
    // Happy Little Ipsum
    ////////////////////////////////////////

    // Happy little variables
    var numberOfParagraphs;
    var quoteMin;
    var quoteMax;

    var quotes = [
        "That'll be our little secret."
        , "In painting, you have unlimited power. You have the ability to move mountains. You can bend rivers. But when I get home, the only thing I have power over, is the garbage."
        , "Remember our Golden Rule: A thin paint sticks to a thick paint."
        , "And that makes it look like birch trees, isn't that sneaky? Heh. Ha. It's gorgeous."
        , "You know me, I gotta put in a big tree."
        , "Here's your bravery test!"
        , "Gotta give him a friend. Like I always say 'everyone needs a friend'."
        , "We don't know where it goes. We don't really care."
        , "Any time ya learn, ya gain."
        , "Any way you want it to be, that's just right."
        , "As my son Steve says, just 'smoosh' it in there. It's not a real word, but people seem to know what it means."
        , "Be sure to use odorless paint-thinner. If it's not odorless, you'll find yourself working alone very, very quick."
        , "Let's just blend this little rascal here, ha! Happy as we can be."
        , "Clouds are very, very free."
        , "Just put a few do-ers in there..."
        , "Decide where your little footy hills live."
        , "Haha, and just beat the devil out of it."
        , "I like to beat the brush."
        , "You can use a brush rack to hit the brush on. Otherwise you will become unpopular real fast."
        , "If you did this with yellow, and you went over it with blue, you would end up with a…with a translucent…green. And it's gorgeous. It is GORGEOUS."
        , "If you did this with blue, and you went over it with yellow, you would end up with a nice green sky. And that's not the thing we are looking for."
        , "Just lightly blend it, one hair and some air."
        , "Tender as a mothers love... And with my mother, that was certainly true."
        , "Let's do a little cabinectomy here."
        , "Oh, you'd be in Agony City by now."
        , "Just scrape in a few indications of sticks and twigs and other little things in there. People will think you spend hours doing this."
        , "Little raccoons and old possums 'n' stuff all live up in here. They've got to have a little place to sit."
        , "Little squirrels 'n' rabbits, and if this was in Florida or Georgia somewhere down there, might be an alligator or two hid back here."
        , "Maybe in our world there lives a happy little tree over there."
        , "Oh, green water... oh that's pretty. Boy, I like that, just alive with algae."
        , "Oh, that would make a nice place to fish. I like fishing, but I'm not a very good fisherman. I always throw the fish back into the water, just put a band-aid on his mouth, tap 'im on the patootie and let him on his way. And maybe some day, if I'm lucky, I'll get to catch him again."
        , "Oooh, if you have never been to Alaska, go there while it is still wild. My favorite uncle asked me if I wanted to go there, Uncle Sam. He said if you don't go, you're going to jail. That is how Uncle Sam asks you."
        , "People look at me like I'm a little strange, when I go around talking to squirrels and rabbits and stuff. That's ok. Thaaaat's just ok."
        , "People might look at you a bit funny, but it's okay. Artists are allowed to be a bit different."
        , "Shwooop. Hehe. You have to make those little noises, or it just doesn't work."
        , "Talk to the tree, make friends with it."
        , "I taught my son to paint mountains like these, and guess what? Now he paints the best darn mountains in the industry."
        , "That's a crooked tree. We'll send him to Washington."
        , "That's where the crows will sit. But we'll have to put an elevator to put them up there because they can't fly, but they don't know that, so they still try."
        , "The only thing worse than yellow snow is green snow."
        , "The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe."
        , "The trees are oh so soft, oh so soft I freakin' love it."
        , "There's nothing wrong with having a tree as a friend."
        , "Trees cover up a multitude of sins."
        , "Try to imagine that you are a tree. How do you want to look out here?"
        , "Water's like me. It's laaazy... Boy, it always looks for the easiest way to do things."
        , "We don't make mistakes, we just have happy accidents."
        , "We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted."
        , "We want happy paintings. Happy paintings. If you want sad things, watch the news."
        , "We're gonna make some big decisions in our little world."
        , "Well, the little clock on the wall says we're just about out of time. God bless you my friend."
        , "From all of us here I'd like to wish you happy painting...and God bless my friend."
        , "When I was teaching my son Steve to paint, I used to tell him, just pretend he was a whisper, and he floated right across the mountain, that easy, gentle, make love to it, caress it."
        , "You can do anything you want to do. This is your world."
        , "I can't go over 30 minutes, because we have a mean ol' director with no sense of humor."
        , "You can put as many or as few as you want in your world."
        , "Even if you've never painted before, this one you can do."
        , "This is the hardest part of this method. If you can do this, you can do anything."
        , "Roll it in a little bright red and lets sign this right in here. Luckily I have a short name so it's easy to sign."
        , "And just go straight in like your going to stab it. And barely touch it...barely touch it."
        , "When we teach people to paint this is the one they fall in love with. It works so well."
    ];



    // Happy little helper functions
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomValueFromArray(array) {
        var index = Math.floor(Math.random() * array.length);
        return array[index];
    }



    // Happily builds out a single paragraph
    var buildParagraph = function(min, max) {
        var numberOfQuotes;
        var currentQuote = "";
        var paragraph = [];

        numberOfQuotes = getRandomIntInclusive(min, max);

        for (var i = 0; i < numberOfQuotes; i++) {
            currentQuote = getRandomValueFromArray(quotes);

            // Ensure that the quote is unique to the paragraph
            if (paragraph.indexOf(currentQuote) === -1) {
                paragraph.push(currentQuote);
            } else {
                // If it's not unique, do the loop again
                i--;
            }
        }

        return paragraph.join(" ");
    };





    ////////////////////////////////////////
    // UI Rendering
    ////////////////////////////////////////

    // Element references
    var paragraphInput = document.querySelector(".js-paragraph-input");
    var paragraphMinusButton = document.querySelector(".js-paragraph-minus-button");
    var paragraphPlusButton = document.querySelector(".js-paragraph-plus-button");

    var quoteMinInput = document.querySelector(".js-quote-min-input");
    var quoteMinMinusButton = document.querySelector(".js-quote-min-minus-button");
    var quoteMinPlusButton = document.querySelector(".js-quote-min-plus-button");

    var quoteMaxInput = document.querySelector(".js-quote-max-input");
    var quoteMaxMinusButton = document.querySelector(".js-quote-max-minus-button");
    var quoteMaxPlusButton = document.querySelector(".js-quote-max-plus-button");

    var generateButton = document.querySelector(".js-generate-button");
    var renderContainer = document.querySelector(".js-render-container");



    // Helper functions
    function clearRenderContainer() {
        renderContainer.innerHTML = "";
    };



    // Render function
    var renderIpsum = function() {
        var output = "";

        clearRenderContainer();
        numberOfParagraphs = parseInt(paragraphInput.value, 10);
        quoteMin = parseInt(quoteMinInput.value, 10);
        quoteMax = parseInt(quoteMaxInput.value, 10);

        for (var i = 0; i < numberOfParagraphs; i++) {
            output += "<p>" + buildParagraph(quoteMin, quoteMax) + "</p>";
        }

        renderContainer.innerHTML = output;
    };

    renderIpsum();





    ////////////////////////////////////////
    // Event Listeners
    ////////////////////////////////////////

    // Generate happy little ipsum
    generateButton.addEventListener("click", renderIpsum);



    // Paragraph inputs
    paragraphInput.addEventListener('blur', function(event) {
        // If paragraph input value is less than the minimum allowed value
        if (parseInt(paragraphInput.value, 10) < 1) {

            // Set paragraph input value equal to the minimum allowed value
            paragraphInput.value = 1;
        }

        // If paragraph input value is greater than the allowed maximum value
        if (parseInt(paragraphInput.value, 10) > 100) {

            // Set paragraph input value equal to the maximum allowed value
            paragraphInput.value = 100;
        }
    });

    paragraphMinusButton.addEventListener('click', function(event) {
        // If paragraph input value is greater than the minimum allowed value
        if (parseInt(paragraphInput.value, 10) > 1) {

            // Reduce paragraph input value by 1
            paragraphInput.value--;
        }
    });

    paragraphPlusButton.addEventListener('click', function(event) {
        // If paragraph input value is less than the maximum allowed value
        if (parseInt(paragraphInput.value, 10) < 100) {

            // Increase paragraph input value by 1
            paragraphInput.value++;
        }
    });



    // Min inputs
    quoteMinInput.addEventListener('blur', function(event) {
        // If min quotes input value is less than minimum allowed value
        if (parseInt(quoteMinInput.value, 10) < 1) {

            // Set min quotes input value equal to the minimum allowed value
            quoteMinInput.value = 1;
        }

        // If min quotes input value is greater than max quotes input value
        if (parseInt(quoteMinInput.value, 10) > parseInt(quoteMaxInput.value, 10)) {

            // Set min quotes input value equal to max quotes input value
            quoteMinInput.value = quoteMaxInput.value;
        }
    });

    quoteMinMinusButton.addEventListener('click', function(event) {
        // If min quotes input value is greater than the minimum allowed value
        if (parseInt(quoteMinInput.value, 10) > 1) {

            // Reduce min quotes input value by 1
            quoteMinInput.value--;
        }
    });

    quoteMinPlusButton.addEventListener('click', function(event) {
        // If min quotes input value is less than max quotes input value
        if (parseInt(quoteMinInput.value, 10) < parseInt(quoteMaxInput.value, 10)) {

            // Increase min quotes input value by 1
            quoteMinInput.value++;
        }
    });



    // Max inputs
    quoteMaxInput.addEventListener('blur', function(event) {
        // If max quotes input value is less than min quotes input value
        if (parseInt(quoteMaxInput.value, 10) < parseInt(quoteMinInput.value, 10)) {

            // Set max quotes input value equal to min quotes input value
            quoteMaxInput.value = quoteMinInput.value;
        }

        // If max quotes input value is greater than the number of available quotes
        if (parseInt(quoteMaxInput.value, 10) > quotes.length) {

            // Set max quotes input value equal to the number of available quotes
            quoteMaxInput.value = quotes.length;

            // This ensures that there will be no duplicate quotes within a single paragraph
        }
    });

    quoteMaxMinusButton.addEventListener('click', function(event) {
        // If max quotes input value is greater than min quotes input value
        if (parseInt(quoteMaxInput.value, 10) > parseInt(quoteMinInput.value, 10)) {

            // Reduce max quotes input value by 1
            quoteMaxInput.value--;
        }
    });

    quoteMaxPlusButton.addEventListener('click', function(event) {
        // If max quotes input value is less than the number of available quotes
        if (parseInt(quoteMaxInput.value, 10) < quotes.length) {

            // Increase max quotes input value by 1
            quoteMaxInput.value++;
        }
    });

})();
