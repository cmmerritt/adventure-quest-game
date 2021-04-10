HTML
    -pages
        1) portal: enter name
            -input form
        2) map page
            -map image, radio button group
        3) quest page (display controlled by JS)
            -sections/divs: title, image, story text, radio buttons for choices
        4) results page
            -sections/divs: result type (overslept/woke up), image, result text
            -play again button?

CSS
    1) map page - format map image and radio buttons/image
    2) quest page - image, divs, radio buttons
    3) results page - text, image
    4) spruce up the portal if time

JavaScript
    1) initial states
        -sleepy points - get to 100 and you wake up, get to 0 and you sleep all day
        -sweet dreams - get more for good choices, fewer for bad
        -name
    2) functions
        -findById
        -increment/decrement:
            when does this happen? --when you make a decision on the quests page (event listener)
            -sleepy points
            -sweet dreams
        -take form data and convert to object
        -function to get quest ID from URL?
        1) portal page
        2) map page
            -use static data first 
            -then loop through metadata to find matching titles to display as list elements
        3) quest page
        4) results page
    3) forms
        1) portal page
            -input form: collect name
            -button: store name in LS, take user to map page
        2) map page
            -radio buttons: take user to quest page
        3) quest page
            -radio buttons: what choice was made?
                -quest is completed 
                -increment/decrement:
                    -sleepy points
                    -sweet dreams
                --> store all this info in LS
                -if sleepy points <= 0 then take to bad results page
                -if sleepy points >= 100 then take to good results page
                -else redirect to map