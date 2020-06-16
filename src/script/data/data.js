class Data{
    static searchMenu(keyword, filter){
        return fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`, {method: "GET"})
        .then (response => response.json())
        .then(responseJSON =>{
            if (responseJSON.meals){
                let data2;
                let complete = [];
                for (let j = 0; j < responseJSON.meals.length ; j++){
                    if (filter === 'None')
                        return Promise.resolve(responseJSON.meals);
                    else if (responseJSON.meals[j].strArea === filter){
                        data2 = responseJSON.meals[j];
                        complete.push(data2)
                    }
                }
                if (complete.length)
                    return Promise.resolve(complete);
                else
                    return Promise.reject(`${keyword} is not found`);
            }
            else
                return Promise.reject(`${keyword} is not found`)
        })
    }
    static ourPickMenu(){
        return fetch(`https://www.themealdb.com/api/json/v1/1/random.php`, {method: "GET"})
        .then (response => {
            return response.json();
        })
        .then (responseJSON=> {
            return Promise.resolve(responseJSON.meals);
        })
        .catch ( error => {
            return Promise.reject(`check your connection`);
        })
    }
    static searchId(id){
        return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, {method: "GET"})
        .then (response => {
            return response.json();
        })
        .then (responseJSON=> {
            return Promise.resolve(responseJSON.meals);
        })
        .catch ( error => {
            return Promise.reject(`${keyword} is not found`);
        })
    }
}
export default Data;