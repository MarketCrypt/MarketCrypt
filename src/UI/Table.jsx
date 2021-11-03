import React from 'react';

export default function Table(props) {
    const cryptoData = props.cryptoData;

    const displayTable = [];
    for(let i = 0; i < cryptoData.length; i++){
        displayTable.push(
            <tr key={i}>
                <td>{cryptoData[i].id}</td>
                <td>{cryptoData[i].name}</td>
                <td>{cryptoData[i].symbol}</td>
                <td>{cryptoData[i].price}</td>
                <td>{cryptoData[i].cmc_rank}</td>
                <td>{cryptoData[i].max_supply}</td>
                <td>{cryptoData[i].circulating_supply}</td>
                <td>{cryptoData[i].total_supply}</td>
            </tr>
        )
    }

    // crypto data is already sent in ranked order

    return (
        <div style={{width:"device-width", height:"600px", overflow:"scroll" }}>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>CMC Rank</th>
                        <th>Max Supply</th>
                        <th>Circulating Supply</th>
                        <th>Total Supply</th>
                    </tr>
                    {displayTable}
                </tbody>
            </table>
        </div>
    )
    
}