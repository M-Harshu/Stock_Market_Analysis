import yfinance as yf

tickers = ["AAPL", "MSFT", "GOOGL", "TSLA", "AMZN", "TCS.NS", "RELIANCE.NS"]

criteria = {
    "Sales Growth (5Y)": 10,
    "EPS Growth (5Y)": 10,
    "Operating Margin": 12,
    "ROE": 15,
    "ROCE": 15,
    "Debt to Equity": 100,
    "P/E Ratio": 50
}

def analyze_stock(ticker_symbol):
    try:
        ticker = yf.Ticker(ticker_symbol)
        info = ticker.info

        data = {
            "Ticker": ticker_symbol,
            "Company": info.get("longName", "N/A"),
            "Sales Growth (5Y)%": info.get("revenueGrowth", 0) * 100,
            "EPS Growth (Q)%": info.get("earningsQuarterlyGrowth", 0) * 100,
            "Operating Margin%": info.get("operatingMargins", 0) * 100,
            "ROE%": info.get("returnOnEquity", 0) * 100,
            "ROCE% (proxy)": info.get("returnOnAssets", 0) * 100,
            "Debt to Equity": info.get("debtToEquity", 0),
            "P/E Ratio": info.get("trailingPE", 0)
        }

        passes = (
            data["Sales Growth (5Y)%"] > criteria["Sales Growth (5Y)"] and
            data["EPS Growth (Q)%"] > criteria["EPS Growth (5Y)"] and
            data["Operating Margin%"] > criteria["Operating Margin"] and
            data["ROE%"] > criteria["ROE"] and
            data["ROCE% (proxy)"] > criteria["ROCE"] and
            data["Debt to Equity"] < criteria["Debt to Equity"] and
            data["P/E Ratio"] < criteria["P/E Ratio"]
        )

        data["Recommendation"] = "BUY ✅" if passes else "NOT A BUY ❌"
        return data

    except Exception as e:
        return {"Ticker": ticker_symbol, "Error": str(e)}

def analyze_all_stocks():
    return [analyze_stock(ticker) for ticker in tickers]
