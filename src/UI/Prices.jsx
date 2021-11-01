import axios from 'axios'
import React, { Component }  from 'react';


class Prices extends Component {
    state = {
        cryptos: []
    }

    // componentDidMount() {
    //    this.fetchData();
    // }

    // async fetchData() {
    //     let qs = `?start=1&limit=5000&convert=USD`
    //     try {
    //         let res = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest' + qs, {
    //             headers: { 
    //                 'CMC_PRO_API_KEY': 'e631f17e-ce07-4c1e-bc28-05a06d783d11',
    //                 'Access-Control-Allow-Origin': '*'
    //              }
    //         });
    //         console.log(res)
    //         this.setState({
    //             cryptos: res.data.slice(0, 50)
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }
    render() {
        return (
            <div>asdf</div>
        )
    }
}
export default Prices