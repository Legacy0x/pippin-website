import BaseLayout from "../components/BaseLayout";

export default function TokenPage() {
  return (
    <BaseLayout>
      <section className="p-8 max-w-[1000px] mx-auto">
        <h1 className="text-4xl mb-4">$PIPPIN token</h1>
        <p className="mb-6">
          Welcome to the inspiration behind our ecosystem—the $PIPPIN Token. Inspired by a simple SVG design, our token serves as the lifeblood that connects our community and fuels our projects.
        </p>
        
        <h2 className="text-2xl mb-4">Backstory</h2>
        <p className="mb-6">
          The genesis of our token is a tale of creativity and community. It all began with AI-generated SVGs, where a whimsical unicorn image sparked an unexpected phenomenon. Named "Pippin" by ChatGPT, this image became the face of a new meme coin on Solana. This initial spark led to the creation of Yohei's first Solana wallet, the acquisition of tokens on the market, and ultimately the decision to develop Pippin into an AI influencer. Leveraging Yohei's experience with BabyAGI—the first popular open-source autonomous agent with task-planning capability, boasting 20k GitHub stars and over 70 academic citations— a thriving community formed on Telegram and X, centered around Pippin the unicorn, and the upcoming autonomous being framework that will power our favorite AI unicorn.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl mb-4">How to Purchase Token</h2>
          <div>
            <p className="mb-4">
              Ready to join the Pippin community? Here's how you can purchase $PIPPIN tokens:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Most popular wallet is <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="text-[#5A8C5B] hover:underline">Phantom</a> for Solana. Search for Pippin or use the token address: Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump. Purchase Solana on <a href="https://coinbase.com/" target="_blank" rel="noopener noreferrer" className="text-[#5A8C5B] hover:underline">Coinbase</a> to send to your Phantom wallet to exchange for Pippin.</li>
              <li>Alternatively, purchase with a credit card into an existing wallet using <a href="https://swipelux.com/" target="_blank" rel="noopener noreferrer" className="text-[#5A8C5B] hover:underline">Swipelux</a> (a portfolio company of @untappedvc).</li>
              <li>Also available on exchanges like MEXC, LBank, Bitmart, XT Exchange, SuperEx, HIBT, Moonshot, CoinEx, Poloniex, BingX, and more.</li>
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
            <p className="leading-tight mb-6">$PIPPIN is available on various exchanges. Choose your preferred platform to start trading.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <a href="https://www.swipelux.com/token-page?id=PIPPIN" target="_blank" rel="noopener noreferrer" className="btn">Swipelux</a>
              <a href="https://www.mexc.com/price/PIPPIN" target="_blank" rel="noopener noreferrer" className="btn">MEXC</a>
              <a href="https://www.lbank.com/trade/pippin_usdt" target="_blank" rel="noopener noreferrer" className="btn">LBank</a>
              <a href="https://www.bitmart.com/trade/en-US?symbol=PIPPIN_USDT" target="_blank" rel="noopener noreferrer" className="btn">BitMart</a>
              <a href="https://www.xt.com/en/trade/pippin_usdt" target="_blank" rel="noopener noreferrer" className="btn">XT</a>
              <a href="https://www.superex.com/trade/PIPPIN_USDT" target="_blank" rel="noopener noreferrer" className="btn">SuperEx</a>
              <a href="https://hibt.com/trade/PIPPIN-USDT" target="_blank" rel="noopener noreferrer" className="btn">HIBT</a>
              <a href="https://moonshot.money/HTafLrVzGLSsxpXNsgiYVzVL" target="_blank" rel="noopener noreferrer" className="btn">Moonshot</a>
              <a href="https://www.coinex.com/en/exchange/pippin-usdt" target="_blank" rel="noopener noreferrer" className="btn">CoinEx</a>
              <a href="https://poloniex.com/trade/PIPPIN_USDT" target="_blank" rel="noopener noreferrer" className="btn">Poloniex</a>
              <a href="https://bingx.com/en/prices/bx_pippin/" target="_blank" rel="noopener noreferrer" className="btn">BingX</a>
              <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=PippinKBQAvMC1vUNq6uaQcvGLVfiBtVURUpXEits&fixed=in" target="_blank" rel="noopener noreferrer" className="btn">Raydium</a>
              <a href="https://jup.ag/swap/SOL-PIPPIN" target="_blank" rel="noopener noreferrer" className="btn">Jupiter</a>
              <a href="https://birdeye.so/token/PippinKBQAvMC1vUNq6uaQcvGLVfiBtVURUpXEits?chain=solana" target="_blank" rel="noopener noreferrer" className="btn">Birdeye</a>
              <div className="btn bg-opacity-50 cursor-default align-center">More Exchanges Coming Soon!</div>
            </div>
          </div>
        </section>
      </section>
    </BaseLayout>
  );
} 