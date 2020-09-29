(function() {

    ////////////////////////////////////////
    // Happy Little Ipsum
    ////////////////////////////////////////

    // Happy little variables
    var numberOfParagraphs = 4;
    var MAX_PARAGRAPHS = 100;

    var quoteMin = 3;
    var quoteMax = 5;

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

    function copyToClipboardMsg(elem, msgElem) {
        var succeed = copyToClipboard(elem);
        var msg;
        var errorClass;

        if (!succeed) {
            errorClass = "is-error";
            msg = "Copy not supported or blocked."
        } else {
            errorClass = "is-success";
            msg = "Copied!"
        }

        msgElem.classList.add(errorClass);
        msgElem.innerHTML = msg;

        setTimeout(function() {
            msgElem.classList.remove(errorClass);
            msgElem.innerHTML = "";
        }, 2000);
    }

    function copyToClipboard(elem) {
        // create hidden text element, if it doesn't already exist
        var targetId = "_hiddenCopyText_";
        var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
        var origSelectionStart, origSelectionEnd;

        if (isInput) {
            // can just use the original source element for the selection and copy
            target = elem;
            origSelectionStart = elem.selectionStart;
            origSelectionEnd = elem.selectionEnd;
        } else {
            // must use a temporary form element for the selection and copy
            target = document.getElementById(targetId);

            if (!target) {
                var target = document.createElement("textarea");
                target.style.position = "fixed";
                target.style.top = "0";
                target.style.left = "0";
                target.style.height = "0";
                target.style.width = "0";
                target.id = targetId;
                document.body.appendChild(target);
            }

            target.textContent = elem.textContent;
        }

        // select the content
        var currentFocus = document.activeElement;
        target.focus();
        target.setSelectionRange(0, target.value.length);

        // copy the selection
        var succeed;

        try {
            succeed = document.execCommand("copy");
        } catch(e) {
            succeed = false;
        }

        // restore original focus
        if (currentFocus && typeof currentFocus.focus === "function") {
            currentFocus.focus();
        }

        if (isInput) {
            // restore prior selection
            elem.setSelectionRange(origSelectionStart, origSelectionEnd);
        } else {
            // clear temporary content
            target.remove();
        }

        return succeed;
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
    var paragraphValue = document.querySelector(".js-paragraph-value");
    var paragraphMinusButton = document.querySelector(".js-paragraph-minus-button");
    var paragraphPlusButton = document.querySelector(".js-paragraph-plus-button");

    var quoteMinValue = document.querySelector(".js-quote-min-value");
    var quoteMinMinusButton = document.querySelector(".js-quote-min-minus-button");
    var quoteMinPlusButton = document.querySelector(".js-quote-min-plus-button");

    var quoteMaxValue = document.querySelector(".js-quote-max-value");
    var quoteMaxMinusButton = document.querySelector(".js-quote-max-minus-button");
    var quoteMaxPlusButton = document.querySelector(".js-quote-max-plus-button");

    var includeHappyLittleIpsumInput = document.querySelector(".js-include-happy-little-ipsum");
    var includeHTMLInput = document.querySelector(".js-include-html-input");

    var generateButton = document.querySelector(".js-generate-button");
    var copyTextButton = document.querySelector(".js-copy-text-button");
    var copyMessage = document.querySelector('.js-copy-message');
    var renderContainer = document.querySelector(".js-render-container");



    // Helper functions
    function updateHTML(target, value) {
        target.innerHTML = value;
    }



    // Render function
    var renderIpsum = function() {
        var output = "";
        var currentParagraph = [];
        var includeHappyLittleIpsum = includeHappyLittleIpsumInput.checked;
        var includeHTML = includeHTMLInput.checked;

        for (var i = 0; i < numberOfParagraphs; i++) {
            currentParagraph.push("<p>", buildParagraph(quoteMin, quoteMax), "</p>");

            if (i === 0 && includeHappyLittleIpsum) {
                currentParagraph.splice(1, 0, "Happy little ipsum. ");
            }

            if (includeHTML) {
                currentParagraph.splice(1, 0, "&lt;p&gt;");
                currentParagraph.splice(currentParagraph.length - 1, 0, "&lt;\/p&gt;");
            }

            output += currentParagraph.join("");
            currentParagraph = [];
        }

        updateHTML(renderContainer, "");

        renderContainer.innerHTML = output;
    };

    renderIpsum();





    ////////////////////////////////////////
    // Event Listeners
    ////////////////////////////////////////

    // Generate happy little ipsum
    generateButton.addEventListener("click", renderIpsum);

    // Copy text
    copyTextButton.addEventListener("click", function(e) {
        e.preventDefault;

        copyToClipboardMsg(renderContainer, copyMessage);
    });

    // Number of paragraphs
    paragraphMinusButton.addEventListener('click', function(event) {
        if (numberOfParagraphs > 1) {
            numberOfParagraphs--;
            updateHTML(paragraphValue, numberOfParagraphs);
        }
    });

    paragraphPlusButton.addEventListener('click', function(event) {
        if (numberOfParagraphs < MAX_PARAGRAPHS) {
            numberOfParagraphs++;
            updateHTML(paragraphValue, numberOfParagraphs);
        }
    });

    // Min quotes per paragraph
    quoteMinMinusButton.addEventListener('click', function(event) {
        if (quoteMin > 1) {
            quoteMin--;
            updateHTML(quoteMinValue, quoteMin);
        }
    });

    quoteMinPlusButton.addEventListener('click', function(event) {
        if (quoteMin < quoteMax) {
            quoteMin++;
            updateHTML(quoteMinValue, quoteMin);
        }
    });

    // Max quotes per paragraph
    quoteMaxMinusButton.addEventListener('click', function(event) {
        if (quoteMax > quoteMin) {
            quoteMax--;
            updateHTML(quoteMaxValue, quoteMax);
        }
    });

    quoteMaxPlusButton.addEventListener('click', function(event) {
        // Maximum number of quotes per paragraph should not exceed the number of available quotes, otherwise infinite loop
        if (quoteMax < quotes.length) {
            quoteMax++;
            updateHTML(quoteMaxValue, quoteMax);
        }
    });

})();

$('body').background({
  path: '../images/backgrounds/',
  altTag: 'some happy lil mountains for ya',
  fadeInTime:2000,
  TheImages: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg']
});