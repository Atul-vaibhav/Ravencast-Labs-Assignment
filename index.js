const axios = require("axios");
const fs = require("fs");
const moment = require("moment");
const CircularBuffer = require("./sma");

const shortTermSMA = new CircularBuffer(5);
const longTermSMA = new CircularBuffer(20);

// Function to log trades into a file
function logTrade(type, price) {
    const trade = {
        timestamp: moment().format(),
        type: type,
        price: price,
    };

    fs.appendFileSync("trades.json", JSON.stringify(trade) + "\n", "utf8");
}

// Function to fetch prices and simulate trading
async function simulateTrading() {
    try {
        const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
        const price = response.data.bitcoin.usd;
        console.log(`Current Price: $${price}`);

        shortTermSMA.add(price);
        longTermSMA.add(price);

        const shortSMA = shortTermSMA.getAverage();
        const longSMA = longTermSMA.getAverage();

        console.log(`Short-Term SMA: ${shortSMA.toFixed(2)}`);
        console.log(`Long-Term SMA: ${longSMA.toFixed(2)}`);

        if (shortSMA > longSMA) {
            console.log("🔼 Buy Signal: Short-Term SMA is above Long-Term SMA.");
            logTrade("BUY", price);
        } else if (shortSMA < longSMA) {
            console.log("🔽 Sell Signal: Short-Term SMA is below Long-Term SMA.");
            logTrade("SELL", price);
        } else {
            console.log("No Trade Signal.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Fetch price every minute
setInterval(simulateTrading, 60000);
