
export default async function fetchCars(filters) {
    const { manufact, year, model, limit, fuel } = filters
    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufact}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'cbf5ddf951msh9422edd536de84ap192a6djsn313ea21692f1',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    })
    const data = await res.json()
    return data
}

