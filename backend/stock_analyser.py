import yfinance as yf
import time

# List of stocks to analyze
tickers = ["AAPL", "MSFT", "GOOGL", "TSLA", "AMZN", "TCS.NS", "RELIANCE.NS", "MARUTI.NS", "PIIND.NS", "LT.NS", "NH.NS"]

# Criteria thresholds
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

        # Collect data for each stock
        data = {
            "Ticker": ticker_symbol,
            "Company": info.get("longName", "N/A"),
            "Sales Growth (5Y)%": info.get("revenueGrowth", 0) * 100 if info.get("revenueGrowth") else 0,
            "EPS Growth (Q)%": info.get("earningsQuarterlyGrowth", 0) * 100 if info.get("earningsQuarterlyGrowth") else 0,
            "Operating Margin%": info.get("operatingMargins", 0) * 100 if info.get("operatingMargins") else 0,
            "ROE%": info.get("returnOnEquity", 0) * 100 if info.get("returnOnEquity") else 0,
            "ROCE% (proxy)": info.get("returnOnAssets", 0) * 100 if info.get("returnOnAssets") else 0,
            "Debt to Equity": info.get("debtToEquity", 0),
            "P/E Ratio": info.get("trailingPE", 0)
        }

        # Check if stock passes all criteria
        passes = (
            data["Sales Growth (5Y)%"] > criteria["Sales Growth (5Y)"] and
            data["EPS Growth (Q)%"] > criteria["EPS Growth (5Y)"] and
            data["Operating Margin%"] > criteria["Operating Margin"] and
            data["ROE%"] > criteria["ROE"] and
            data["ROCE% (proxy)"] > criteria["ROCE"] and
            data["Debt to Equity"] < criteria["Debt to Equity"] and
            data["P/E Ratio"] < criteria["P/E Ratio"]
        )

        # Add recommendation based on analysis
        data["Recommendation"] = "BUY" if passes else "NOT A BUY"
        return data

    except Exception as e:
        return {"Ticker": ticker_symbol, "Error": str(e)}

def analyze_all_stocks():
    results = []
    for ticker in tickers:
        result = analyze_stock(ticker)
        results.append(result)
        # Delay to avoid rate-limiting
        time.sleep(2)  # Sleep for 2 seconds between requests
    return results

# Example usage
if __name__ == "__main__":
    stock_analysis = analyze_all_stocks()
    for stock in stock_analysis:
        print(stock)
