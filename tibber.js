

async function getData() {
  const data = JSON.stringify({
    query: `{
        viewer {
            homes {
            currentSubscription{
                priceInfo{
                tomorrow {
                    total
                    level
                }
                }
            }
            }
        }
        }`,
  });

  const response = await fetch(
    'https://api.tibber.com/v1-beta/gql',
    {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        Authorization: 'Bearer **********YOUR_TOKEN_HERE**********',
        'User-Agent': 'Node',
      },
    }
  );

  const body = await response.json();
  const priceData = body.data.viewer.homes[0].currentSubscription.priceInfo.tomorrow;

  for ( var i = 0; i < priceData.length; i++) {
	var obj = priceData[i].total;
    prices.push(obj);
  }

  return prices;

}


prices = await getData();

global.set("TibberPrices", prices);

