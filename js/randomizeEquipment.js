//JSON

items = {"items": [
    "potion", "family ornament", "holy symbol", "bible", "favourite book", "wallet", "bag of gold", "shard", "piece of paper", "notes", "scrolls", "journal", "hunting trophy", "mobile phone", "set of playing cards",
    "laptop", "pencil", "feather and ink", "charger", "keys", "screws", "handkerchief", "business card", "photo with SO", "family photo", "necklace", "ring", "mobile console"
]
};

function randomizeEquipment(array) {
    let char_age = document.getElementById("age");
    let char_weapon = document.getElementById("weapon");
    let char_inventory = document.getElementById("inventory");
    let char_armor = document.getElementById("armor");

    // WEAPON RANDOMIZER

    if (char_age.value <= 10) {
        char_weapon.value = "unarmed";
    } else {
        let weapon = Math.floor(Math.random() * 12) + 1;
        switch (weapon) {
            case 1:
                char_weapon.value = "shortsword";
                break;
            case 2:
                char_weapon.value = "sword";
                break;
            case 3:
                char_weapon.value = "two-hander";
                break;
            case 4:
                char_weapon.value = "rapier";
                break;
            case 5:
                char_weapon.value = "dagger";
                break;
            case 6:
                char_weapon.value = "magic_staff";
                break;
            case 7:
                char_weapon.value = "bow";
                break;
            case 8:
                char_weapon.value = "crossbow";
                break;
            case 9:
                char_weapon.value = "pistol";
                break;
            case 10:
                char_weapon.value = "rifle";
                break;
            case 11:
                char_weapon.value = "shotgun";
                break;
            default:
                char_weapon.value = "unarmed";
        };
    };

    // INVENTORY RANDOMIZER

    let amount = Math.floor(Math.random() * 5) + 1;
    let picked = [];
    for (let i=0; i < amount + 1; i++) {
        let item = array["items"][Math.floor(Math.random()*array["items"].length)];
        if (!picked.includes(item)) {
            picked.push(item); /* If array picked doesn't have the item, it will add it to it. If it has it already, the circle continues */
        } else {
            continue;
        };
    };
    for (let i = 0; i < picked.length; i++) {
        if (i == 0) {
            char_inventory.value = picked[i];
        } else {
            char_inventory.value += `, ${picked[i]}`;
        };
    };

    // ARMOR RANDOMIZER
    
    if (char_age.value <= 10) {
        char_armor.value = "unarmed";
    } else {
        let armor = Math.floor(Math.random() * 5) + 1;
        switch (armor) {
            case 1:
                char_armor.value = "chainmail";
                break;
            case 2:
                char_armor.value = "leather_armor";
                break;
            case 3:
                char_armor.value = "steel_armor";
                break;
            case 4:
                char_armor.value = "vest";
                break;
            default:
                char_armor.value = "none";
        };
    };

}