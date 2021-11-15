# homey_tibber_homeyscripts
Scripts for collecting an handling price data from Tibber.


## tibber.js

Reads tomorrows price data from https://api.tibber.com and saves a price array in a global variable. 

Requires a Tibber token to run, replace `**********YOUR_TOKEN_HERE**********` with your personal token 

Read more about the Tibber API and register for a token at https://developer.tibber.com.

### Usage:
Install the [HomeyScript app](https://homey.app/en-us/app/com.athom.homeyscript/HomeyScript/) in Homey.

Open the HomeyScript tab on [my.homey.app](https://my.homey.app) and create a new script, paste the contents of tibber.js into the new script and save.

Use the THEN-flowcard `HomeyScript/Run <script>` to run the script from a flow once a day, preferrably shortly before midnight. 
![image](https://user-images.githubusercontent.com/88024769/141843960-b62beabf-7eaf-4d1c-a102-55e14d02dd2f.png)

After being run the global variable `TibberPrices` contains the prices for the next day. 
  
The global variable can be used in another script using for example `const prices = global.get('TibberPrices');`


### Get todays prices instead
Replace `tomorrow` on line 8 and 32 with `today`
