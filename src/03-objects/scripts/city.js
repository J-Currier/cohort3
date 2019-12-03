


class City {
    constructor(name, latitude, longitude, population, key) {
        this.name = name;
        this.latitude = parseFloat(latitude);
        this.longitude = parseFloat(longitude);
        this.population = parseFloat(population);
        this.key = Number(key);
    }

   show() {
        let myStr = `${this.name} ${this.latitude} ${this.longitude} ${this.population}`;
        return myStr;
    }

    movedIn(popGrowth) {
        this.population = this.population + parseInt(popGrowth);
    }

    movedOut(popDecline) {
        this.population = this.population - parseInt(popDecline);
    }

    howBig() {
        if (this.population > 100000) {
            return 'City'
        }
        if (this.population > 19999 && this.population < 100001) {
            return 'Large Town'
        }
        if (this.population > 999 && this.population < 20000) {
            return 'Town'
        }
        if (this.population > 100 && this.population < 1000) {
            return 'Village'
        }
        if (this.population < 101) {
            return 'Hamlet'
        }
 
    }
}

    
class Community {
    constructor(communityName) {
            this.communityName = communityName;
            this.cityList = [];
            this.counter = 0;
    }

    createNewCity(name, latitude, longitude, population) {
        console.log('createnewcity');

        this.cityList.push(new City(name, latitude, longitude, population, this.counter));
        this.counter ++;
    }

    removeCity(deleteCity) {
        this.cityList = this.cityList.filter((arr) => arr.name != deleteCity);
    }

    getPopulation() {
        let myArr = [];
        this.cityList.forEach((element) => {
            myArr.push(element.population);
            return myArr;
        });
        let populationTotal= myArr.reduce((acc, cur) => acc + cur);
        return populationTotal;
    }

    mostNorthern() {
        let mostNorthLat = Math.max.apply(Math, this.cityList.map(function(param){return param.latitude;}));
        let mostNorthCity = this.cityList.find(function(param){ return param.latitude == mostNorthLat });
        return (mostNorthCity);
    }

    mostSouthern() {
        let mostSouthLat = Math.min.apply(Math, this.cityList.map(function(param){return param.latitude;}));
        let mostSouthCity = this.cityList.find(function(param){ return param.latitude == mostSouthLat; });
        return (mostSouthCity);

    }

    whichSphere(cityName) {
        let cityToCheck = this.cityList.find(function(param){ return param.name == cityName; });
        if (cityToCheck.latitude < 0) {
            return 'Southern Hemisphere'
        }
        if (cityToCheck.latitude >= 0) {
            return 'Northern Hemisphere'
        }
    }

}


export { City, Community }