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
        <p className="mt-6 mb-8">
          We invite all who share in the sense of gentle wonder—and a taste for coding adventures—to join us once the repository is live. Together, we can shape a new kind of AI being, where each small step reflects both thoughtful design and open-ended exploration.
        </p>

        <button
          className="inline-block bg-[#ccc] text-[#666] px-5 py-2.5 rounded-full font-medium cursor-not-allowed mb-4"
          disabled
        >
          View on GitHub (Soon)
        </button>
        <p className="italic">
          The framework is still in active development, and we look forward to releasing it soon. Stay tuned for updates and public launch details!
        </p>
      </section>
    </BaseLayout>
  );
} 