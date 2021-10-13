// SCRIPT

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function randomizeAppereance() {
    let char_height = document.getElementById("height");
    let char_age = document.getElementById("age");
    let char_weight = document.getElementById("weight");
    let char_muscles = document.getElementById("muscles");
    let char_hairlength = document.getElementById("hairlength");
    let char_haircolor = document.getElementById("haircolor");
    let char_clothes = document.getElementById("clothes");
    let char_eyecolor = document.getElementById("eyecolor");


    // HEIGHT RANDOMIZER
    if (char_age.value <= 10) {
        random_height = parseInt(Math.random() * (140 - 50) + 50);
        char_height.value = random_height;
    } else if (char_age.value > 10 && char_age.value <= 18) {
        random_height = parseInt(Math.random() * (180 - 140) + 140);
        char_height.value = random_height;
    } else if (char_age.value > 18) {
        random_height = parseInt(Math.random() * (200 - 155) + 155);
        char_height.value = random_height;
    };

    // WEIGHT RANDOMIZER
    if (char_age.value <= 12) {
        random_weight = parseInt(Math.random() * (40 - 10) + 10);
        char_weight.value = random_weight;
    } else if (char_age.value > 10 && char_age.value <= 18) {
        random_weight = parseInt(Math.random() * (50 - 30) + 30);
        char_weight.value = random_weight;
    } else if (char_age.value > 18) {
        random_weight = parseInt(Math.random() * (200 - 50) + 50);
        char_weight.value = random_weight;
    };

    // MUSCULAR RANDOMIZER
    if (char_age.value <= 12) {
        char_muscles.value = "no";
    } else {
        let muscles = parseInt(Math.random() * (2 - 0) + 0);
        if (muscles == 1) {
            char_muscles.value = "yes";
        } else {
            char_muscles.value = "no";
        };
    };

    //HAIRLENGTH RANDOMIZER
    let length = Math.floor(Math.random() * 4) + 1;
    switch (length) {
        case 1:
            char_hairlength.value = "short";
            break;
        case 2:
            char_hairlength.value = "medium";
            break;
        case 3:
            char_hairlength.value = "long";
            break;
        default:
            char_hairlength.value = "bald";
    };

    //HAIRCOLOR RANDOMIZER
    char_haircolor.value = getRandomColor();

    //HAIRCOLOR RANDOMIZER
    char_eyecolor.value = getRandomColor();

    //CLOTHING RANDOMIZER
    let clothes = Math.floor(Math.random() * 12) + 1;
    switch (clothes) {
        case 1:
            char_clothes.value = "medieval_commoner";
            break;
        case 2:
            char_clothes.value = "medieval_knight";
            break;
        case 3:
            char_clothes.value = "medieval_noble";
            break;
        case 4:
            char_clothes.value = "steampunk";
            break;
        case 5:
            char_clothes.value = "goth";
            break;
        case 6:
            char_clothes.value = "punk";
            break;
        case 7:
            char_clothes.value = "casual";
            break;
        case 8:
            char_clothes.value = "business";
            break;
        case 9:
            char_clothes.value = "grunge";
            break;
        case 10:
            char_clothes.value = "elegant";
            break;
        case 11:
            char_clothes.value = "native";
            break;
        default:
            char_clothes.value = "exotic";
    };


}