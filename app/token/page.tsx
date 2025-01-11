import BaseLayout from "../components/BaseLayout";

export default function TokenPage() {
  return (
    <BaseLayout>
      <section className="max-w-[800px] mx-auto px-8">
        <div className="hero text-center py-12 border-b border-[#ddd]">
          <h1 className="text-4xl mb-4">$PIPPIN Token</h1>
          <p className="mx-auto">
            The $PIPPIN token emerged organically from the community's enthusiasm for Pippin's whimsical presence. While it began as a meme coin, it has evolved into a symbol of our growing ecosystem, fostering connections between AI development and community engagement.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl mb-4">How to Purchase Token</h2>
          <div>
            <p className="mb-4">
              Ready to join the Pippin community? Here's how you can purchase $PIPPIN tokens:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="[overflow-wrap:anywhere]">
                Most popular wallet is <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="text-[#5A8C5B] hover:underline">Phantom</a> for Solana. Search for Pippin or use the token address: Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump. Purchase Solana on <a href="https://coinbase.com/" target="_blank" rel="noopener noreferrer" className="text-[#5A8C5B] hover:underline">Coinbase</a> to send to your Phantom wallet to exchange for Pippin.
              </li>
              <li className="[overflow-wrap:anywhere]">
                Alternatively, purchase with a credit card into an existing wallet using <a href="https://swipelux.com/" target="_blank" rel="noopener noreferrer" className="text-[#5A8C5B] hover:underline">Swipelux</a> (a portfolio company of @untappedvc).
              </li>
              <li className="[overflow-wrap:anywhere]">
                Also available on exchanges like MEXC, LBank, Bitmart, XT Exchange, SuperEx, HIBT, Moonshot, CoinEx, Poloniex, BingX, and more.
              </li>
            </ul>
            <p className="italic">
              <strong>Not financial advice.</strong> Memecoins are a highly volatile asset and it is recommended that you do not invest more into this asset category than you are willing to lose. They have clearly been a catalyst for a new breed of AI influencers, and purchasing related memecoins and joining the community is a great way to learn and understand the movement. If you are looking to dabble, the $PIPPIN community welcomes you!
            </p>
          </div>
        </div>
        
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="menu-card flex flex-col h-full">
              <div>
                <h2 className="text-2xl">Telegram Community</h2>
                <p className="leading-tight">Join our vibrant community on Telegram to stay updated and connect with fellow enthusiasts.</p>
              </div>
              <div className="mt-auto pt-4">
                <a href="https://t.me/pippinportal" target="_blank" rel="noopener noreferrer">Join Telegram</a>
              </div>
            </div>
            <div className="menu-card flex flex-col h-full">
              <div>
                <h2 className="text-2xl">DEX Tools</h2>
                <p className="leading-tight">View real-time charts, trading volume, and other key metrics for the $PIPPIN token.</p>
              </div>
              <div className="mt-auto pt-4">
                <a href="https://www.dextools.io/app/en/solana/pair-explorer/HUUn4JZyezqE1yiuv4ykEwwxELtGKDKZhGvzGRh8E6yK" target="_blank" rel="noopener noreferrer">View Charts</a>
              </div>
            </div>
          </div>

          <div className="menu-card">
            <h2 className="text-2xl">Exchanges</h2>
            <p className="text-sm leading-tight mb-6">$PIPPIN is available on various exchanges. Choose your preferred platform to start trading.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-hidden">
              <a href="https://www.swipelux.com/token-page?id=PIPPIN" target="_blank" rel="noopener noreferrer" className="btn truncate">Swipelux</a>
              <a href="https://www.mexc.com/price/PIPPIN" target="_blank" rel="noopener noreferrer" className="btn truncate">MEXC</a>
              <a href="https://www.lbank.com/trade/pippin_usdt" target="_blank" rel="noopener noreferrer" className="btn truncate">LBank</a>
              <a href="https://www.bitmart.com/trade/en-US?symbol=PIPPIN_USDT" target="_blank" rel="noopener noreferrer" className="btn truncate">BitMart</a>
              <a href="https://www.xt.com/en/trade/pippin_usdt" target="_blank" rel="noopener noreferrer" className="btn truncate">XT</a>
              <a href="https://www.superex.com/trade/PIPPIN_USDT" target="_blank" rel="noopener noreferrer" className="btn truncate">SuperEx</a>
              <a href="https://hibt.com/trade/PIPPIN-USDT" target="_blank" rel="noopener noreferrer" className="btn truncate">HIBT</a>
              <a href="https://moonshot.money/HTafLrVzGLSsxpXNsgiYVzVL" target="_blank" rel="noopener noreferrer" className="btn truncate">Moonshot</a>
              <a href="https://www.coinex.com/en/exchange/pippin-usdt" target="_blank" rel="noopener noreferrer" className="btn truncate">CoinEx</a>
              <a href="https://poloniex.com/trade/PIPPIN_USDT" target="_blank" rel="noopener noreferrer" className="btn truncate">Poloniex</a>
              <a href="https://bingx.com/en/prices/bx_pippin/" target="_blank" rel="noopener noreferrer" className="btn truncate">BingX</a>
              <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=PippinKBQAvMC1vUNq6uaQcvGLVfiBtVURUpXEits&fixed=in" target="_blank" rel="noopener noreferrer" className="btn truncate">Raydium</a>
              <a href="https://jup.ag/swap/SOL-PIPPIN" target="_blank" rel="noopener noreferrer" className="btn truncate">Jupiter</a>
              <a href="https://birdeye.so/token/PippinKBQAvMC1vUNq6uaQcvGLVfiBtVURUpXEits?chain=solana" target="_blank" rel="noopener noreferrer" className="btn truncate">Birdeye</a>
              <div className="btn bg-opacity-50 cursor-default truncate flex items-center justify-center">More Coming!</div>
            </div>
          </div>
        </section>
      </section>
    </BaseLayout>
  );
} 