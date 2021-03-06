import React, { Component } from 'react';
import { Cards, Charts, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api'
import coronaImage from './images/image.png'

class App extends Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        console.log("fetchedData", fetchedData);
        this.setState({ data: fetchedData});
    }

    handleCountyChange = async (country) => {
        
        //fetch the data
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        //set the data
        this.setState({ data: fetchedData, country: country});
    }

    render() {
        const { data, country } = this.state;
        console.log("data", data);
        return (
            <div className={styles.container}>
                <img src={coronaImage} className={styles.image} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountyChange={this.handleCountyChange}/>
                <Charts data={data} country={country}/>
            </div>
        )
    }
}


export default App;