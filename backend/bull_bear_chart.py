import matplotlib.pyplot as plt
import numpy as np

# Data
companies = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'META', 'BRK.B', 'JNJ', 'WMT', 'V']
bullish_months = [34, 32, 36, 34, 31, 36, 36, 34, 39, 34]
bearish_months = [27, 28, 25, 27, 30, 25, 25, 27, 22, 27]

x = np.arange(len(companies))
width = 0.35

# Plot
fig, ax = plt.subplots(figsize=(12, 6))
bars1 = ax.bar(x - width/2, bullish_months, width, label='Bullish Months', color='green')
bars2 = ax.bar(x + width/2, bearish_months, width, label='Bearish Months', color='red')

# Labels & Titles
ax.set_xlabel('Company')
ax.set_ylabel('Number of Months')
ax.set_title('Bullish vs Bearish Months Over the Past 5 Years')
ax.set_xticks(x)
ax.set_xticklabels(companies)
ax.legend()

plt.xticks(rotation=45)
plt.tight_layout()
plt.show()
