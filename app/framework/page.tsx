import Link from "next/link";
import BaseLayout from "../components/BaseLayout";

type BulletPoint = {
  title: string;
  content: string;
};

function BulletSection({ title, content }: BulletPoint) {
  return (
    <tr>
      <td className="w-[30px] align-top">•</td>
      <td>
        <strong>{title}</strong> {content}
      </td>
    </tr>
  );
}

export default function FrameworkPage() {
  const keyConcepts: BulletPoint[] = [
    {
      title: "Character Definition:",
      content: "Provide a persona—like a wise caretaker or whimsical unicorn—and set objectives and constraints. The AI references these when deciding what tasks to do and how to do them.",
    },
    {
      title: "Tool Connectivity (Skills):",
      content: "Link your AI to external tools—be it a blockchain, Slack, or a custom API. Each skill can be toggled, so your AI uses only what you approve.",
    },
    {
      title: "Activity Generation:",
      content: "An advanced Activity can write new Python code to define more Activities—an approach reminiscent of BabyAGI's iterative loops, but extended by your AI's personality and memory logs.",
    },
    {
      title: "Memory Evolution:",
      content: "The system logs outcomes, merges short-term notes with a long-term database, and references them for reflection—allowing your AI to \"remember\" what's effective or gently learn from mistakes.",
    },
  ];

  const exploreCode: BulletPoint[] = [
    {
      title: "",
      content: "Read or refine existing Activities, from daily reflections to creative code generation tasks.",
    },
    {
      title: "",
      content: "Contribute new modules—like a weather-checking Activity or an advanced knowledge-graph navigator—that your AI can weave into its routine.",
    },
    {
      title: "",
      content: "Experiment with the memory and state modules, perhaps introducing your own data structures or embeddings to push the boundaries of what an autonomous AI can recall and reason about.",
    },
  ];

  return (
    <BaseLayout>
      <section className="p-8 max-w-[1000px] mx-auto">
        <h1 className="text-4xl mb-4">The Pippin Framework</h1>
        <p className="mb-6">
          Our framework is a robust extension built upon the foundational experiences of{" "}
          <a
            href="https://github.com/yoheinakajima/babyagi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5A8C5B] hover:underline"
          >
            BabyAGI
          </a>{" "}
          (20k+ Github Stars, 70+ academic citations). It empowers developers and creators to harness advanced AI capabilities in a modular way, helping them build a digital "being" that can reflect on tasks, generate new activities, and seamlessly integrate external tools. Below, we present a white paper, outlining the project's vision, usage scenarios, and future horizons.
        </p>

        <h2 className="text-2xl mt-8 mb-4">White Paper</h2>
        <p className="mb-4">
          <strong>"When code meets careful wonder, new forms of intelligence quietly bloom."</strong>
          <br />
          This project has grown from a simple concept into an expansive platform for exploring how AI can autonomously evolve. While it inherits the iterative loops of BabyAGI, it extends them with memory, dynamic skill management, and a deeper philosophical approach—akin to Pippin's gentle worldview—where new capabilities sprout organically as needed.
        </p>
        <p className="mb-6">Below is an overview describing the framework's usage, approach, and experimental spirit:</p>

        <div className="table-bullets">
          <table className="w-full border-separate border-spacing-y-2.5">
            <tbody>
              {keyConcepts.map((point, index) => (
                <BulletSection key={index} {...point} />
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl mt-8 mb-4">Key Concepts & Approach</h2>
        <p className="mb-6">By uniting these philosophical and technical perspectives, the framework offers:</p>
        <div className="table-bullets">
          <table className="w-full border-separate border-spacing-y-2.5">
            <tbody>
              {keyConcepts.map((point, index) => (
                <BulletSection key={index} {...point} />
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 mb-8">
          We view this synergy of mindful philosophy and robust code as a path toward more meaningful AI interactions—ones that spark curiosity as much as they solve tasks.
        </p>

        <h2 className="text-2xl mb-4">Explore the Code</h2>
        <p className="mb-6">The open-source repository for this framework is not yet public but will be soon. You'll be able to:</p>
        <div className="table-bullets">
          <table className="w-full border-separate border-spacing-y-2.5">
            <tbody>
              {exploreCode.map((point, index) => (
                <BulletSection key={index} {...point} />
              ))}
            </tbody>
          </table>
        </div>
        <p className="my-6">
          We invite all who share in the sense of gentle wonder—and a taste for coding adventures—to join us once the repository is live. Together, we can shape a new kind of AI being, where each small step reflects both thoughtful design and open-ended exploration.
        </p>

        <div className="relative inline-block">
          <button
            className="inline-flex items-center gap-2 bg-[#ccc] text-[#666] px-5 py-2.5 rounded-full font-medium cursor-not-allowed mb-4"
            disabled
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Repository
          </button>
          <div className="absolute -top-2 -right-2 bg-[#5A8C5B] text-white text-[10px] py-0.5 px-2 rounded-full">
            Coming Soon!
          </div>
        </div>
        <p className="italic my-2">
          The framework is still in active development, and we look forward to releasing it soon.
        </p>
      </section>
    </BaseLayout>
  );
} 