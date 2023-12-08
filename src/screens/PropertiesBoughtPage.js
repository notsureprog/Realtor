import React from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

function PropertiesBoughtPage({ route }) {
    const [locationKey, setLocationKey] = React.useState('Detroit_MI')  //route.params.locationKey
    const [minPrice, setMinPrice] = React.useState(0) //route.params.minPrice
    const [type, setType] = React.useState('all') //route.params.type
    const [page, setPage] = React.useState('1') //route.params.page
    const [minBath, setMinBath] = React.useState('1')
    const [maxPrice, setMaxPrice] = React.useState('1000000')
    const [maxBed, setMaxBed] = React.useState('3')
    const [maxBath, setMaxBath] = React.useState('3')
    const [minBed, setMinBed] = React.useState('1')
    const [sort, setSort] = React.useState('sold-date')
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    const GetPropertiesBought = async () => {
        try {
            const options = {
                method: 'GET',
                url: `https://realtor26.p.rapidapi.com/properties/sold`,
                params: {
                    locationKey: locationKey,
                    minPrice: minPrice,
                    type: type,
                    page: page,
                    minBath: minBath,
                    maxPrice: maxPrice,
                    maxBed: maxBed,
                    maxBath: maxBath,
                    minBed: minBed,
                    sort: sort
                },
                headers: {
                    'X-RapidAPI-Key': '0bb5f9893amsh49695b337aa5c24p11e78ejsna5208126dbd6',
                    'X-RapidAPI-Host': 'realtor26.p.rapidapi.com'
                }
            }
            const result = await axios(options)
            console.log(result.data)
            setData(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        GetPropertiesBought()
    }, [locationKey, minPrice, type, page, minBath, maxPrice, maxBath, maxBed, minBed, sort])
    return (
        <View>
            {data !== null && !loading &&
                <View>
                    <Text>Hello World {minBed}</Text>
                </View>
            }
        </View>
    )
}

export default PropertiesBoughtPage
