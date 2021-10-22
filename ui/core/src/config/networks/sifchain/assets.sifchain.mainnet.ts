import { IAsset, Network } from "../../../entities";

const assets: {
  assets: (Omit<IAsset, "homeNetwork" | "network"> & {
    network: "sifchain";
    homeNetwork: string;
  })[];
} = {
  assets: [
    {
      symbol: "rowan",
      decimals: 18,
      name: "Rowan",
      imageUrl: "./images/siflogo.png",
      network: "sifchain",
      displaySymbol: "rowan",
      homeNetwork: "sifchain",
    },
    {
      decimals: 6,
      imageUrl:
        "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707",
      name: "Tether USDT",
      network: "sifchain",
      symbol: "cusdt",
      displaySymbol: "usdt",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
      name: "Ethereum",
      network: "sifchain",
      symbol: "ceth",
      displaySymbol: "eth",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/677/thumb/basic-attention-token.png?1547034427",
      name: "Basic Attention Token",
      network: "sifchain",
      symbol: "cbat",
      displaySymbol: "bat",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/681/thumb/JelZ58cv_400x400.png?1601449653",
      name: "Aragon",
      network: "sifchain",
      symbol: "cant",
      displaySymbol: "ant",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/736/thumb/bancor.png?1547034477",
      name: "Bancor Network Token",
      network: "sifchain",
      symbol: "cbnt",
      displaySymbol: "bnt",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/863/thumb/0x.png?1547034672",
      name: "0x",
      network: "sifchain",
      symbol: "czrx",
      displaySymbol: "zrx",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png?1547034700",
      name: "Chainlink",
      network: "sifchain",
      symbol: "clink",
      displaySymbol: "link",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/878/thumb/decentraland-mana.png?1550108745",
      name: "Decentraland",
      network: "sifchain",
      symbol: "cmana",
      displaySymbol: "mana",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/913/thumb/LRC.png?1572852344",
      name: "Loopring",
      network: "sifchain",
      symbol: "clrc",
      displaySymbol: "lrc",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/1102/thumb/enjin-coin-logo.png?1547035078",
      name: "Enjin Coin",
      network: "sifchain",
      symbol: "cenj",
      displaySymbol: "enj",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3406/thumb/SNX.png?1598631139",
      name: "Synthetix Network Token",
      network: "sifchain",
      symbol: "csnx",
      displaySymbol: "snx",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3449/thumb/TUSD.png?1559172762",
      name: "TrueUSD",
      network: "sifchain",
      symbol: "ctusd",
      displaySymbol: "tusd",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3687/thumb/ocean-protocol-logo.jpg?1547038686",
      name: "Ocean Protocol",
      network: "sifchain",
      symbol: "cocean",
      hasDarkIcon: true,
      displaySymbol: "ocean",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/4001/thumb/Fantom.png?1558015016",
      name: "Fantom",
      network: "sifchain",
      symbol: "cftm",
      displaySymbol: "ftm",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/5013/thumb/sUSD.png?1562212426",
      name: "sUSD",
      network: "sifchain",
      symbol: "csusd",
      displaySymbol: "susd",
      homeNetwork: "ethereum",
    },
    {
      decimals: 6,
      imageUrl:
        "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389",
      name: "USD Coin",
      network: "sifchain",
      symbol: "cusdc",
      displaySymbol: "usdc",
      homeNetwork: "ethereum",
    },
    {
      decimals: 8,
      imageUrl:
        "https://assets.coingecko.com/coins/images/7310/thumb/cypto.png?1547043960",
      name: "Crypto com Coin",
      network: "sifchain",
      symbol: "ccro",
      displaySymbol: "CRO (ERC-20)",
      homeNetwork: "ethereum",
      decommissioned: true,
      decommissionReason:
        "Crypto.org's ERC-20 token has been decommissioned on Sifchain in favor of the Cosmos CRO token. Please export all CRO (ERC-20) off of Sifchain.",
    },
    {
      decimals: 8,
      imageUrl:
        "https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png?1548822744",
      name: "Wrapped Bitcoin",
      network: "sifchain",
      symbol: "cwbtc",
      displaySymbol: "wbtc",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/9368/thumb/swipe.png?1566792311",
      name: "Swipe",
      network: "sifchain",
      symbol: "csxp",
      displaySymbol: "sxp",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/9545/thumb/band-protocol.png?1568730326",
      name: "Band Protocol",
      network: "sifchain",
      symbol: "cband",
      displaySymbol: "Band",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/9956/thumb/dai-multi-collateral-mcd.png?1574218774",
      name: "Dai Stablecoin",
      network: "sifchain",
      symbol: "cdai",
      displaySymbol: "dai",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/10775/thumb/COMP.png?1592625425",
      name: "Compound",
      network: "sifchain",
      symbol: "ccomp",
      displaySymbol: "comp",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/10951/thumb/UMA.png?1586307916",
      name: "UMA",
      network: "sifchain",
      symbol: "cuma",
      displaySymbol: "uma",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/11683/thumb/Balancer.png?1592792958",
      name: "Balancer",
      network: "sifchain",
      symbol: "cbal",
      displaySymbol: "bal",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png?1598325330",
      name: "yearn finance",
      network: "sifchain",
      symbol: "cyfi",
      displaySymbol: "yfi",
      homeNetwork: "ethereum",
    },
    {
      decimals: 6,
      imageUrl:
        "https://assets.coingecko.com/coins/images/11970/thumb/serum-logo.png?1597121577",
      name: "Serum",
      network: "sifchain",
      symbol: "csrm",
      displaySymbol: "srm",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/11976/thumb/Cream.png?1596593418",
      name: "Cream",
      network: "sifchain",
      symbol: "ccream",
      displaySymbol: "cream",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12129/thumb/sandbox_logo.jpg?1597397942",
      name: "SAND",
      network: "sifchain",
      symbol: "csand",
      displaySymbol: "sand",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12271/thumb/512x512_Logo_no_chop.png?1606986688",
      name: "Sushi",
      network: "sifchain",
      symbol: "csushi",
      displaySymbol: "sushi",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12440/thumb/esd_logo_circle.png?1603676421",
      name: "Empty Set Dollar",
      network: "sifchain",
      symbol: "cesd",
      displaySymbol: "esd",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png?1600306604",
      name: "Uniswap",
      network: "sifchain",
      symbol: "cuni",
      displaySymbol: "uni",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png?1601374110",
      name: "Aave",
      network: "sifchain",
      symbol: "caave",
      displaySymbol: "aave",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12811/thumb/barnbridge.jpg?1602728853",
      name: "BarnBridge",
      network: "sifchain",
      symbol: "cbond",
      displaySymbol: "bond",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13238/thumb/WFIL-Icon.png?1606630561",
      name: "Wrapped Filecoin",
      network: "sifchain",
      symbol: "cwfil",
      displaySymbol: "wfil",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13397/thumb/Graph_Token.png?1608145566",
      name: "The Graph",
      network: "sifchain",
      symbol: "cgrt",
      displaySymbol: "grt",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13454/thumb/lon_logo.png?1608701720",
      name: "Tokenlon",
      network: "sifchain",
      symbol: "clon",
      displaySymbol: "lon",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png?1608803028",
      name: "1inch",
      network: "sifchain",
      symbol: "c1inch",
      displaySymbol: "1inch",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13677/thumb/BrMhBTr8_400x400.jpg?1610723303",
      name: "THORChain ERC20",
      network: "sifchain",
      symbol: "crune",
      displaySymbol: "rune",
      homeNetwork: "ethereum",
    },
    {
      decimals: 6,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13767/thumb/Secret_S_Black_Coingecko.png?1611667298",
      name: "Secret ERC20",
      network: "sifchain",
      symbol: "cwscrt",
      displaySymbol: "wscrt",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3334/small/iotex-logo.png?1547037941",
      name: "IoTeX",
      network: "sifchain",
      symbol: "ciotx",
      displaySymbol: "iotx",
      homeNetwork: "ethereum",
    },
    {
      imageUrl:
        "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
      name: "Reef Finance",
      symbol: "creef",
      network: "sifchain",
      decimals: 18,
      displaySymbol: "reef",
      homeNetwork: "ethereum",
    },
    {
      imageUrl:
        "https://assets.coingecko.com/coins/images/4932/thumb/_QPpjoUi_400x400.jpg?1566430520",
      name: "COCOS BCX",
      symbol: "ccocos",
      network: "sifchain",
      decimals: 18,
      displaySymbol: "cocos",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3373/small/IuNzUb5b_400x400.jpg?1589526336",
      name: "Keep Network",
      network: "sifchain",
      symbol: "ckeep",
      displaySymbol: "keep",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3296/small/op.jpg?1547037878",
      name: "Origin Protocol",
      network: "sifchain",
      symbol: "cogn",
      displaySymbol: "ogn",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12782/small/logocircle.png?1611944557",
      name: "DAOfi",
      network: "sifchain",
      hasDarkIcon: true,
      symbol: "cdaofi",
      displaySymbol: "daofi",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12509/small/linear.jpg?1606884470",
      name: "Linear",
      network: "sifchain",
      symbol: "clina",
      displaySymbol: "lina",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/9351/small/12ships.png?1566485390",
      name: "12Ships",
      network: "sifchain",
      symbol: "ctshp",
      displaySymbol: "tshp",
      homeNetwork: "ethereum",
      hasDarkIcon: true,
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13803/small/b20.png?1611996305",
      name: "B.20",
      network: "sifchain",
      symbol: "cb20",
      displaySymbol: "b20",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3328/small/Akropolis.png?1547037929",
      name: "Akropolis",
      network: "sifchain",
      symbol: "cakro",
      displaySymbol: "akro",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12623/small/RFUEL_SQR.png?1602481093",
      name: "Rio Fuel Token",
      network: "sifchain",
      symbol: "crfuel",
      displaySymbol: "rfuel",
      homeNetwork: "ethereum",
      hasDarkIcon: true,
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12843/small/image.png?1611212077",
      name: "Rally",
      network: "sifchain",
      symbol: "crly",
      displaySymbol: "rly",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl: "https://etherscan.io/token/images/convergence_32.png",
      name: "Convergence",
      network: "sifchain",
      symbol: "cconv",
      displaySymbol: "conv",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl: "https://etherscan.io/token/images/render_32.png",
      name: "Render Token",
      network: "sifchain",
      symbol: "crndr",
      displaySymbol: "rndr",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl: "https://etherscan.io/token/images/paidnetwork_32.png",
      name: "PAID Network",
      network: "sifchain",
      symbol: "cpaid",
      displaySymbol: "paid",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/14460/small/Tidal-mono.png?1616233894",
      name: "Tidal",
      network: "sifchain",
      symbol: "ctidal",
      displaySymbol: "tidal",
      homeNetwork: "ethereum",
      hasDarkIcon: true,
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/11939/small/SHIBLOGO.png?1600752116",
      name: "SHIBA INU",
      network: "sifchain",
      symbol: "cshib",
      displaySymbol: "shib",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl: "https://etherscan.io/token/images/dogekiller_32.png",
      name: "DOGE KILLER",
      network: "sifchain",
      symbol: "cleash",
      displaySymbol: "leash",
      homeNetwork: "ethereum",
    },
    {
      symbol: "uatom",
      decimals: 6,
      name: "Atom",
      network: "sifchain",
      label: "Atom",
      imageUrl:
        "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960",
      displaySymbol: "atom",
      homeNetwork: "cosmoshub",
    },
    {
      symbol: "uakt",
      decimals: 6,
      name: "Akash Token",
      network: "sifchain",
      label: "AKT",
      imageUrl:
        "https://assets.coingecko.com/coins/images/12785/small/akash-logo.png?1615447676",
      displaySymbol: "akt",
      homeNetwork: "akash",
    },
    {
      symbol: "udvpn",
      decimals: 6,
      name: "Sentinel",
      network: "sifchain",
      label: "Sentinel",
      imageUrl:
        "https://assets.coingecko.com/coins/images/14879/small/Sentinel_512X512.png?1622174499",
      displaySymbol: "dvpn",
      homeNetwork: "sentinel",
    },
    {
      symbol: "uiris",
      decimals: 6,
      name: "IRIS",
      network: "sifchain",
      label: "IRIS",
      imageUrl:
        "https://assets.coingecko.com/coins/images/5135/small/IRIS.png?1557999365",
      displaySymbol: "iris",
      homeNetwork: "iris",
    },
    {
      symbol: "basecro",
      displaySymbol: "cro",
      decimals: 8,
      name: "CRO",
      network: "sifchain",
      label: "CRO",
      imageUrl:
        "https://assets.coingecko.com/coins/images/7310/small/cypto.png?1547043960",
      homeNetwork: "crypto-org",
    },
    {
      symbol: "uxprt",
      displaySymbol: "xprt",
      decimals: 6,
      name: "xprt",
      network: "sifchain",
      label: "xprt",
      imageUrl: "https://persistence.one/favicon.png",
      homeNetwork: "persistence",
    },
    {
      symbol: "uregen",
      displaySymbol: "regen",
      decimals: 6,
      name: "regen",
      network: "sifchain",
      label: "regen",
      imageUrl:
        "https://assets.coingecko.com/coins/images/16733/small/REGEN.png?1624861317",
      homeNetwork: "regen",
    },
    {
      symbol: "uosmo",
      displaySymbol: "osmo",
      decimals: 6,
      name: "osmo",
      network: "sifchain",
      label: "osmo",
      imageUrl:
        "https://assets.coingecko.com/coins/images/16724/small/osmosis.jpeg?1624849879",
      homeNetwork: "osmosis",
    },
    {
      address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12681/small/UST.png?1601612407",
      name: "Terra USD",
      label: "Terra USD",
      network: "sifchain",
      displaySymbol: "UST (ERC-20}",
      symbol: "cust",
      homeNetwork: "ethereum",
    },
    {
      address: "0x853d955acef822db058eb8505911ed77f175b99e",
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13422/small/frax_logo.png?1608476506",
      name: "Frax",
      label: "Frax",
      network: "sifchain",
      displaySymbol: "FRAX",
      hasDarkIcon: true,
      symbol: "cfrax",
      homeNetwork: "ethereum",
    },
    {
      address: "0xc52c326331e9ce41f04484d3b5e5648158028804",
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/14830/small/7xjpHaG.png?1618564961",
      name: "Unizen",
      label: "Unizen",
      network: "sifchain",
      displaySymbol: "ZCX",
      symbol: "czcx",
      homeNetwork: "ethereum",
    },
    {
      address: "0x217ddead61a42369a266f1fb754eb5d3ebadc88a",
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/15482/small/donkey_logo.jpg?1621012824",
      name: "Don-key",
      label: "Don-key",
      displaySymbol: "DON",
      symbol: "cdon",
      network: "sifchain",
      homeNetwork: "ethereum",
    },
    {
      address: "0x9e32b13ce7f2e80a01932b42553652e053d6ed8e",
      imageUrl:
        "https://assets.coingecko.com/coins/images/15595/small/metis.PNG?1621298076",
      name: "Metis Token",
      label: "Metis Token",
      displaySymbol: "Metis",
      symbol: "cmetis",
      decimals: 18,
      network: "sifchain",
      homeNetwork: "ethereum",
    },
    {
      address: "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
      imageUrl:
        "https://assets.coingecko.com/coins/images/13423/small/frax_share.png?1608478989",
      name: "Frax Share",
      label: "Frax Share",
      displaySymbol: "FXS",
      symbol: "cfxs",
      hasDarkIcon: true,
      decimals: 18,
      network: "sifchain",
      homeNetwork: "ethereum",
    },
    {
      address: "0xEF53462838000184F35f7D991452e5f25110b207",
      imageUrl:
        "https://assets.coingecko.com/coins/images/15632/small/knit.jpg?1621396114",
      name: "Knit Finance",
      label: "Knit Finance",
      displaySymbol: "KFT",
      symbol: "ckft",
      decimals: 18,
      network: "sifchain",
      homeNetwork: "ethereum",
    },
    {
      address: "0xb9ef770b6a5e12e45983c5d80545258aa38f3b78",
      imageUrl:
        "https://assets.coingecko.com/coins/images/4934/small/0_Black-svg.png?1600757954",
      name: "0chain",
      label: "0chain",
      displaySymbol: "ZCN",
      symbol: "czcn",
      hasDarkIcon: true,
      decimals: 10,
      network: "sifchain",
      homeNetwork: "ethereum",
    },
    {
      address: "0xFa14Fa6958401314851A17d6C5360cA29f74B57B",
      imageUrl:
        "https://assets.coingecko.com/coins/images/14750/small/SAITO.png?1626857406",
      name: "SAITO",
      label: "SAITO",
      displaySymbol: "SAITO",
      symbol: "csaito",
      decimals: 18,
      network: "sifchain",
      homeNetwork: "ethereum",
    },
    {
      address: "0x9695e0114e12c0d3a3636fab5a18e6b737529023",
      imageUrl:
        "https://assets.coingecko.com/coins/images/15368/small/SgqhfWz4_400x400_%281%29.jpg?1620666919",
      name: "DFYN Token",
      label: "DFYN Token",
      displaySymbol: "DFYN",
      symbol: "cdfyn",
      decimals: 18,
      network: "sifchain",
      homeNetwork: "ethereum",
    },
    {
      address: "0x20a8cec5fffea65be7122bcab2ffe32ed4ebf03a",
      imageUrl:
        "https://assets.coingecko.com/coins/images/17321/small/asset_icon_dnxc_200.png?1627292452",
      name: "DinoX Coin",
      label: "DinoX Coin",
      displaySymbol: "DNXC",
      symbol: "cdnxc",
      decimals: 18,
      network: "sifchain",
      homeNetwork: "ethereum",
    },
    {
      address: "0xbbc2ae13b23d715c30720f079fcd9b4a74093505",
      imageUrl:
        "https://assets.coingecko.com/coins/images/14238/small/ethernity_logo.png?1615189750",
      name: "@EthernityChain $ERN Token",
      label: "@EthernityChain $ERN Token",
      displaySymbol: "ERN",
      symbol: "cern",
      decimals: 18,
      network: "sifchain",
      homeNetwork: "ethereum",
    },
    {
      address: "0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa",
      imageUrl:
        "https://assets.coingecko.com/coins/images/12648/small/polkastarter.png?1609813702",
      name: "PolkastarterToken",
      label: "PolkastarterToken",
      displaySymbol: "POLS",
      symbol: "cpols",
      decimals: 18,
      network: "sifchain",
      homeNetwork: "ethereum",
    },
    {
      address: "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b",
      imageUrl:
        "https://assets.coingecko.com/coins/images/13029/small/axie_infinity_logo.png?1604471082",
      name: "Axie Infinity Shard",
      label: "Axie Infinity Shard",
      displaySymbol: "AXS",
      symbol: "caxs",
      decimals: 18,
      network: "sifchain",
      homeNetwork: "ethereum",
    },
    {
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      imageUrl:
        "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912",
      name: "Matic Token",
      label: "Matic Token",
      displaySymbol: "MATIC",
      symbol: "cmatic",
      decimals: 18,
      network: "sifchain",
      homeNetwork: "ethereum",
    },
    {
      address: "0x2e9d63788249371f1dfc918a52f8d799f4a38c94",
      imageUrl:
        "https://assets.coingecko.com/coins/images/17495/small/tokemak-avatar-200px-black.png?1628131614",
      name: "Tokemak",
      label: "Tokemak",
      displaySymbol: "TOKE",
      symbol: "ctoke",
      network: "sifchain",
      homeNetwork: "ethereum",
      decimals: 18,
    },
    {
      symbol: "uluna",
      displaySymbol: "luna",
      decimals: 6,
      name: "luna",
      network: "sifchain",
      label: "luna",
      imageUrl:
        "https://assets.coingecko.com/coins/images/8284/small/luna1557227471663.png?1567147072",
      homeNetwork: "terra",
    },
    {
      symbol: "uusd",
      displaySymbol: "TerraUSD",
      decimals: 6,
      name: "TerraUSD",
      network: "sifchain",
      label: "TerraUSD",
      imageUrl:
        "https://assets.coingecko.com/coins/images/12681/small/UST.png?1601612407",
      homeNetwork: "terra",
    },
    {
      address: "0x05079687d35b93538cbd59fe5596380cae9054a9",
      imageUrl:
        "https://assets.coingecko.com/coins/images/5041/large/logo_-_2021-01-10T210801.390.png?1610284134",
      name: "BitSong",
      displaySymbol: "BTSG",
      symbol: "cbtsg",
      network: "sifchain",
      homeNetwork: "ethereum",
      decimals: 18,
    },
    {
      address: "0x6c28aef8977c9b773996d0e8376d2ee379446f2f",
      imageUrl:
        "https://assets.coingecko.com/coins/images/13970/small/1_pOU6pBMEmiL-ZJVb0CYRjQ.png?1613386659",
      name: "QuickSwap",
      displaySymbol: "QUICK",
      symbol: "cquick",
      network: "sifchain",
      homeNetwork: "ethereum",
      decimals: 18,
    },
    {
      address: "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
      imageUrl:
        "https://assets.coingecko.com/coins/images/13573/small/Lido_DAO.png?1609873644",
      name: "Lido DAO",
      displaySymbol: "LDO",
      symbol: "cldo",
      network: "sifchain",
      homeNetwork: "ethereum",
      decimals: 18,
    },
    {
      address: "0xe76c6c83af64e4c60245d8c7de953df673a7a33d",
      imageUrl:
        "https://assets.coingecko.com/coins/images/16840/small/railgun.jpeg?1625322775",
      name: "Railgun",
      symbol: "crail",
      displaySymbol: "RAIL",
      network: "sifchain",
      homeNetwork: "ethereum",
      decimals: 18,
    },
    {
      address: "0x57b946008913b82e4df85f501cbaed910e58d26c",
      imageUrl:
        "https://assets.coingecko.com/coins/images/8903/small/POND_200x200.png?1622515451",
      name: "Marlin",
      displaySymbol: "POND",
      symbol: "cpond",
      network: "sifchain",
      homeNetwork: "ethereum",
      decimals: 18,
    },
    {
      address: "0x2701E1D67219a49F5691C92468Fe8D8ADc03e609",
      imageUrl:
        "https://assets.coingecko.com/coins/images/17103/small/DINO.png?1626244014",
      name: "DinoSwap",
      displaySymbol: "DINO",
      symbol: "cdino",
      network: "sifchain",
      homeNetwork: "ethereum",
      decimals: 18,
    },
    {
      address: "0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b",
      imageUrl:
        "https://assets.coingecko.com/coins/images/16801/small/ufo_logo.jpg?1630078847",
      name: "UFO Gaming",
      displaySymbol: "UFO",
      symbol: "cufo",
      network: "sifchain",
      homeNetwork: "ethereum",
      decimals: 18,
    },
    {
      symbol: "ujuno",
      displaySymbol: "juno",
      decimals: 6,
      name: "juno",
      network: "sifchain",
      label: "juno",
      imageUrl: "https://junoscan.com/icons/safari-pinned-tab.svg",
      homeNetwork: "juno",
    },
    {
      symbol: "uixo",
      displaySymbol: "ixo",
      decimals: 6,
      name: "ixo",
      network: "sifchain",
      label: "ixo",
      imageUrl: "https://dhj8dql1kzq2v.cloudfront.net/white/ixo.png",
      homeNetwork: "ixo",
    },
    {
      symbol: "uband",
      displaySymbol: "band",
      decimals: 6,
      name: "band",
      network: "sifchain",
      label: "band",
      imageUrl:
        "https://assets.coingecko.com/coins/images/9545/small/Band_token_blue_violet_token.png?1625881431",
      homeNetwork: "band",
    },
    {
      symbol: "nanolike",
      displaySymbol: "like",
      decimals: 9,
      name: "likecoin",
      network: "sifchain",
      homeNetwork: "likecoin",
      label: "like",
      imageUrl:
        "https://assets.coingecko.com/coins/images/10212/small/likecoin.png?1576640519",
    },
    {
      address: "0xd01cb3d113a864763dd3977fe1e725860013b0ed",
      symbol: "cratom",
      displaySymbol: "ratom",
      lowercasePrefixLength: 1,
      decimals: 18,
      name: "ratom",
      network: "sifchain",
      label: "ratom",
      imageUrl:
        "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960",
      homeNetwork: "ethereum",
    },
  ],
};

export default assets;
