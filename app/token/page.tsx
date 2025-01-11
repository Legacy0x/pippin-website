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
        
        <h2 className="text-2xl mt-8 mb-4">Community & Tools</h2>
        <p className="mb-6">
          Our vibrant community is the cornerstone of our success. Engaging members on Telegram and X collaborate to build tools, create memes, and spread the magic of Pippin. Here are some ways to get involved and support our ecosystem:
        </p>
        
        <div className="flex flex-wrap gap-8">
          <div className="menu-card">
            <h3 className="text-xl mb-4">Telegram Community</h3>
            <p>Connect with fellow token enthusiasts and stay updated with the latest news.</p>
            <a href="https://t.me/PippinPortal" target="_blank" rel="noopener noreferrer">Join Telegram</a>
          </div>
          <div className="menu-card">
            <h3 className="text-xl mb-4">DEX Tools</h3>
            <p>Utilize our advanced tools for trading and managing your tokens.</p>
            <a href="https://dexscreener.com/solana/8wwcnqdzjcy5pt7akhupafknv2txca9sq6ybkgzlbvdt" target="_blank" rel="noopener noreferrer">Dex Screener</a>
          </div>
          <div className="menu-card">
            <h3 className="text-xl mb-4">Exchanges</h3>
            <p>Trade our token on multiple exchanges worldwide.</p>
            <div className="flex flex-col gap-2">
              <a href="https://www.swipelux.com/token-page?id=PIPPIN&_gl=1*zgw5b2*_ga*MTA4MTkzODI1OC4xNzMxNTMyNTI3*_ga_YSRDBV7BWL*MTczMzUxNjAyMS40LjEuMTczMzUxNjAzMy40OC4wLjA.*_ga_EBFXFCQ252*MTczMzUxNjAyMS40LjEuMTczMzUxNjAzMi4wLjAuMA.." target="_blank" rel="noopener noreferrer">Swipelux</a>
              <a href="https://www.mexc.com/price/PIPPIN" target="_blank" rel="noopener noreferrer">MEXC</a>
              <a href="https://www.lbank.com/trade/pippin_usdt" target="_blank" rel="noopener noreferrer">LBank</a>
              <a href="https://www.bitmart.com/trade/en-US?symbol=PIPPIN_USDT" target="_blank" rel="noopener noreferrer">BitMart</a>
              <a href="https://www.xt.com/en/trade/pippin_usdt" target="_blank" rel="noopener noreferrer">XT</a>
              <a href="https://www.superex.com/trade/PIPPIN_USDT" target="_blank" rel="noopener noreferrer">SuperEx</a>
              <a href="https://hibt.com/trade/PIPPIN-USDT" target="_blank" rel="noopener noreferrer">HIBT</a>
              <a href="https://moonshot.money/HTafLrVzGLSsxpXNsgiYVzVL?ref=oziOzmMzNI" target="_blank" rel="noopener noreferrer">Moonshot</a>
              <a href="https://www.coinex.com/en/exchange/pippin-usdt" target="_blank" rel="noopener noreferrer">CoinEx</a>
              <a href="https://poloniex.com/trade/PIPPIN_USDT" target="_blank" rel="noopener noreferrer">Poloniex</a>
              <a href="https://bingx.com/en/prices/bx_pippin/" target="_blank" rel="noopener noreferrer">BingX</a>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
} 