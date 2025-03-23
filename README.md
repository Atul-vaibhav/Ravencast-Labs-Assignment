# 🚀 Crypto Trading Bot (SMA-Based)

This is a **cryptocurrency trading bot** built using **JavaScript (Node.js)**. It fetches **live Bitcoin prices** from the **CoinGecko API**, calculates **Simple Moving Averages (SMA)**, and generates **Buy/Sell signals** based on **crossover strategy**. Trades are **logged into a file (`trades.json`)**.

---

## 📌 Features
✅ Fetches **live Bitcoin price** from CoinGecko API.  
✅ Uses a **circular buffer** for efficient **SMA (5 & 20 periods)** calculation.  
✅ Generates **Buy/Sell signals** based on SMA crossover strategy.  
✅ Logs **trade details (timestamp, type, price) in `trades.json`**.  
✅ Fetches **new prices every minute automatically**.  

---

## 📌 Technologies Used
- **Node.js** (Backend runtime)
- **Axios** (API Requests)
- **Moment.js** (Time management)
- **File System (`fs`)** (Logging trades)
- **Circular Buffer** (Efficient SMA storage)

---

## 📌 Install Dependencies

npm install 

## Running the Project

node index.js

## PROJECT STRUCTURE

crypto-trader/
│── index.js        # Main script (Fetch price, SMA calculation, Trade logic)
│── sma.js          # Circular Buffer implementation
│── trades.json     # Stores trade logs
│── README.md       # Project documentation
│── package.json    # Node.js package metadata

## Example Output

Current Price: $63000
Short-Term SMA: 62980.00
Long-Term SMA: 62850.25
🔼 Buy Signal: Short-Term SMA is above Long-Term SMA.
Trade logged: {"timestamp":"2025-03-23T12:34:56Z","type":"BUY","price":63000} (trades.json)

### **🔹 1. Clone the Repository**
```sh
git clone https://github.com/Atul-vaibhav/Ravencast-Labs-Assignment
cd crypto-trader
