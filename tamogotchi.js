const tamagochi = {
    name:'egg',
    meal: 0,
    energy:2,
    mood:4,
    getStatus() {
    if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
    return `${this.name} Умер:(`  
    }
    let mealStatus = '';
    let energyStatus = '';
    let moodStatus = '';
    if (this.meal < 3) {
        mealStatus = 'Я голоден'
    } else {
        mealStatus = 'Я не голоден'
    }; 
    if (this.energy < 3) {
        energyStatus = 'Я хочу спать'
    } else {
        energyStatus = 'Я не хочу спать'
    };
    if (this.mood < 3) {
        moodStatus = 'Мне скучно'
    } else {
        moodStatus = 'Мне весело'
    };
    return `Имя: ${this.name}, Еда: ${mealStatus} (${this.meal}),
    Энергия: ${energyStatus} (${this.energy}), Настроение: ${moodStatus} (${this.mood})`
    },
    setName: function(names) {
    return this.name = names
    },
    eat: function() {
    if (this.meal < 5) {
    this.meal++;
    this.mood--;  
    } else {
    this.mood--
    }
    return this.getStatus()
    }, 
    sleep: function () {
    if (this.energy < 5) {
    this.energy++;
    this.meal--;
    } else {
    this.meal--
    }
    return this.getStatus()
    },
    play: function() {
    if (this.mood < 5) {
    this.mood++;
    this.energy--;
    } else {
    this.energy--;
    }
    return this.getStatus()
    },
}
console.log(tamagochi.getStatus());
console.log(tamagochi.setName('Jamic'));
console.log(tamagochi.eat());
console.log(tamagochi.sleep());
console.log(tamagochi.play()); 