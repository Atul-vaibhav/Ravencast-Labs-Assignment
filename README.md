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

## 📌 Installation & Setup

### **🔹 1. Clone the Repository**
```sh
git clone <your-repository-url>
cd crypto-trader
