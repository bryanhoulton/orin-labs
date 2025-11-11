import "prismjs/components/prism-python";
import "prismjs/components/prism-json";

import { useEffect } from "react";

import Prism from "prismjs";
import { Link } from "react-router-dom";

import CodeBlock from "../../components/CodeBlock";
import { JoinUs } from "../../components/Hiring";
import MemoryDiagram from "../../components/MemoryDiagram";
import ScalingChart from "../../components/ScalingChart";

const SECTION_CLASS = "w-full max-w-3xl px-4 sm:px-0";
const PROSE_CLASS =
  "prose prose-base sm:prose-lg text-gray-700 leading-relaxed space-y-4 max-w-none";

export default function ProactiveAgents() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="flex flex-col w-full items-center mt-6 sm:mt-8 gap-10 sm:gap-12">
      {/* Hero */}
      <div className="bg-primary shadow-sm rounded-xl relative overflow-hidden -mx-4 sm:-mx-8 lg:-mx-16 aspect-[4/3] sm:aspect-video w-full">
        <img
          src="/plane.png"
          alt=""
          style={{
            filter: "invert(1) brightness(0.40)",
            mixBlendMode: "screen",
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative px-8 py-12 sm:p-12 lg:p-16 flex flex-col justify-center h-full gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
            Building Proactive Agents
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-white/90 text-sm sm:text-base">
            <Link to="/">
              <p className="underline hover:text-white transition-colors">
                Orin Labs
              </p>
            </Link>
            <p>•</p>
            <p>October 2025</p>
          </div>
        </div>
      </div>

      <hr className={SECTION_CLASS} />

      {/* Hook + Key Takeaways */}
      <section className={SECTION_CLASS}>
        <div className={PROSE_CLASS}>
          <p className="text-base sm:text-lg">
            Most agents only react. If you don’t prompt them, they do nothing.
          </p>
          <p className="text-base sm:text-lg">
            We built agents that run on their own schedule, wake on important
            events, and remember what matters over time—so they keep working
            even when you’re not asking.
          </p>
          <div>
            <p className="font-semibold">Key takeaways</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Self-scheduling: the agent decides when to wake, cutting idle
                compute.
              </li>
              <li>
                Wake events: external signals wake the agent immediately for
                urgent work.
              </li>
              <li>
                Layered memory: long-horizon summaries keep context without
                linear growth.
              </li>
              <li>
                Durable state in tools: facts live in calendars/contacts, not
                chat tokens.
              </li>
              <li>
                Constraint: ledger-style memory implies single-threaded
                execution per agent.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className={`my-12 ${SECTION_CLASS}`} />

      {/* Introduction */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Introduction
        </h2>
        <div className={PROSE_CLASS}>
          <p>
            Many implementations of AI agents have a fundamental problem: they
            only work when prompted. These systems act like reactive
            utilities—they wait for input, process it through predefined steps,
            then go idle. This event-driven design creates a hard boundary that
            prevents sustained, autonomous operation.
          </p>
          <p>
            Applications (like teaching) that require long-term engagement,
            planning, and management reveal how inadequate purely reactive
            agents are. Instead, we propose agents that exist independently from
            their user or input events.
          </p>
          <p>
            This work presents a fundamental redesign of how agents operate. We
            introduce the <strong>proactive agent</strong>: an agent that
            schedules its own activities, reasons about time, and creates
            dynamic workflows on the fly. These systems maintain persistent
            awareness of context while adapting their behavior to align with
            changing objectives.
          </p>
        </div>
      </section>

      <hr className={`my-12 ${SECTION_CLASS}`} />

      {/* Limitations */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Limitations of Reactive Architectures
        </h2>
        <div className={PROSE_CLASS}>
          <p>
            The standard reactive agent architecture follows a simple,
            deterministic pattern:
          </p>
          <CodeBlock
            language="python"
            code="input event → LLM → workflows → output"
          />
          <p>
            This single-pass model breaks down when there's no external input.
            Without external input, the architecture has no way to take
            initiative. Below are iterative examples of how existing
            architectures attempt to fix this problem:
          </p>

          <div className="space-y-6 mt-6">
            <div>
              <p className="text-xl font-medium text-gray-900 mb-2">
                User-Triggered Static Workflows
              </p>
              <p>
                The naive approach: basic workflows that only run when users
                click buttons. These systems have zero autonomous initiative and
                lose all context between sessions.
              </p>
              <CodeBlock
                language="python"
                code={`def on_button_pressed(...):
    foo = workflow_part_1(...)
    bar = workflow_part_2(foo)
    baz = workflow_part_3(bar)
    return baz`}
              />
            </div>

            <div>
              <p className="text-xl font-medium text-gray-900 mb-2">
                Beat-Scheduled Static Workflows
              </p>
              <p>
                Static workflows that run on fixed schedules (like cron jobs).
                This approach is still limited to a fixed set of static
                workflows, wastes resources by constantly checking for work, and
                still follows rigid, predetermined patterns.
              </p>
              <CodeBlock
                language="python"
                code={`def run_every_hour(...): # runs 0 * * * *
    lessons = get_upcoming_lessons() # in next hour
    for lesson in lessons:
        lesson.plan() # another LLM call to plan the lesson`}
              />
            </div>

            <div>
              <p className="text-xl font-medium text-gray-900 mb-2">
                Beat-Schedule + LLM-Selected Workflows
              </p>
              <p>
                Using an LLM to choose which workflows to run on schedule. While
                this enables dynamic behavior by selecting the right workflow
                for the job, it is still limited to a fixed set of pre-built
                workflows to select from.
              </p>
              <CodeBlock
                language="python"
                code={`def run_every_hour(...) # runs 0 * * * *
    for user in db.get_users()
        context = user.gather_context()
        workflows = decide_workflows_with_llm(context)
        for workflow in workflows:
            workflow.run()`}
              />
            </div>

            <div>
              <p className="text-xl font-medium text-gray-900 mb-2">
                Beat-Schedule + LLM with Tools
              </p>
              <p>
                But adding tools that let the LLM create custom workflows on the
                fly, the agent achieves true adaptability by combining tools in
                unlimited ways. However, this approach still wastes resources by
                running inference on every beat, even when there is no work to
                be done.
              </p>
              <CodeBlock
                language="python"
                code={`def run_agent(user):
    context = user.gather_context()
    done = False
    history = []
    while not done:
        tool_call = call_llm(context, history)
        done, resp = handle_tool_call(tool_call)
        history.extend([tool_call, resp])

def run_every_hour(...) # runs 0 * * * *
    for user in db.get_users():
        run_agent(user)`}
              />
            </div>
          </div>

          <p>
            While this shows why dynamic workflows are required, the agent is
            still static across time.
          </p>
        </div>
      </section>

      <hr className={`my-12 ${SECTION_CLASS}`} />

      {/* Self-Scheduling */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Self-Scheduling and Wake Events
        </h2>
        <div className={PROSE_CLASS}>
          <p>
            To eliminate the fixed, inefficient beat schedule, the agent needs
            to be able to schedule itself. After completing a workflow, the
            agent decides when it should wake up next:
          </p>
          <CodeBlock
            language="python"
            code="next_wake = LLM.decide_sleep_duration(context)"
          />
          <p>
            With this approach, a simple cron job can wake agents whose sleep
            time has expired—similar to how operating systems handle timer
            interrupts. This allows the agent to allocate compute resources
            dynamically over time.
          </p>
          <p>
            But pure self-scheduling creates a problem: handling external events
            (like user messages) is delayed until the agent wakes up. To solve
            this, we added <strong>wake events</strong>—signals that immediately
            wake up sleeping agents when something important happens:
          </p>
          <CodeBlock
            language="python"
            code={`if event in WakeEvents:
    wake(agent)`}
          />
          <p>
            This hybrid model combines{" "}
            <strong>
              agent-scheduled sleep, dynamic workflow creation, and event-based
              interrupts
            </strong>
            —achieving both autonomy and reactivity. The architecture creates
            individualized timing patterns for each user while scaling
            computation sublinearly.
          </p>

          <CodeBlock
            language="python"
            code={`def run_agent(user):
    # ... everything from before ...

def wake_agent(user):
    run_agent(user)
    user.agent_sleep_until = llm_decide_sleep_until(context)
    user.save_to_db()

def run_every_min(...) # runs * * * * *
    for user in db.get_users()
        if time.now() > user.agent_sleep_until:
            wake_agent(user)`}
          />

          <p>Asynchronous events provide preemptive activation mechanisms:</p>

          <CodeBlock
            language="python"
            code={`def message_webhook(...): # called on external messages
    user = user_from_identifier(...)
    wake_agent(user)`}
          />
        </div>
      </section>

      <hr className={`my-12 ${SECTION_CLASS}`} />

      {/* Temporal Memory */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Decaying-Resolution Memory
        </h2>
        <div className={PROSE_CLASS}>
          <p>
            Long-running agents require memory systems that evolve over time.
            Traditional agent systems use knowledge graphs, RAG, or context
            compression for memory. While these approaches can recall
            factually-related information and limited history, they fail to
            maintain truly <em>temporal coherence</em> across extended periods
            of time.
          </p>
          <p>
            Instead, we present <strong>Decaying-Resolution Memory</strong>, a
            hierarchical system that summarizes interactions at different time
            scales. This approach achieves sublinear token scaling—memory grows
            much slower than interaction volume—while preserving temporal
            relationships.
          </p>

          <div className="mt-6">
            <p className="text-xl font-medium text-gray-900 mb-3">
              <strong>Memory Hierarchy</strong>
            </p>
            <p>
              At any given time <em>t</em>, the agent's memory consists of
              nested summary layers. Each layer up the hierarchy covers longer
              time periods with less detail.
            </p>
            <p>
              Summaries for a resolution <em>R</em> are generated using the
              results from resolution <em>R-1</em>. All summaries are normalized
              to the agent's set timezone.
            </p>

            <MemoryDiagram />
          </div>

          <div className="mt-6">
            <p className="text-xl font-medium text-gray-900 mb-3">
              <strong>Scaling Behavior</strong>
            </p>
            <p>
              Simple context accumulation scales linearly O(N) with token count.
              Decaying-Resolution Memory scales logarithmically O(log N),
              maintaining long-term temporal awareness while constraining
              inference computational overhead.
            </p>

            <ScalingChart />

            <div className="mt-4 text-sm text-gray-600">
              Decaying-Resolution Memory scales approximately O(log N),
              providing significant efficiency gains over other naive O(N)
              methods.
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xl font-medium text-gray-900 mb-3">
              <strong>Semantic Fidelity</strong>
            </p>
            <p>
              The system preserves high-level, important patterns ("struggled
              with algebra in July") while eliminating low-relevance details
              ("lesson started at 3:12 PM"). This selective compression works
              similarly to human autobiographical memory, prioritizing
              conceptual coherence over temporal precision.
            </p>
            <p>
              An observed limitation of this approach, however, is direct
              factual recall. Decaying-Resolution Memory will perform worse on
              benchmarks that focus on recalling specific facts from history,
              especially if the existence of a fact is not continuously
              reinforced within the agent's immediate behavior.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-xl font-medium text-gray-900 mb-3">
              <strong>Ledger-Based Memory Architecture</strong>
            </p>
            <p>
              While decaying-resolution memory is powerful, it generally must be
              treated like a ledger: <em>every</em> event that the agent
              perceives should be stored in memory, with very limited
              exceptions. When given the option, agents tend to be bad at
              deciding <em> what</em> to remember. Treating memory like a ledger
              shifts responsibility of memory quality from the agent to the
              memory system, which ends up being easier to evaluate and
              iteratively improve.
            </p>

            <p>
              However, ledger-based implementations impose{" "}
              <strong>strict linearity constraints</strong>—agents cannot run
              concurrently without creating temporal inconsistencies.
            </p>
          </div>
        </div>
      </section>

      <hr className={`my-12 ${SECTION_CLASS}`} />

      {/* Tool Semantics */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Stateful Tools as Memory
        </h2>
        <div className={PROSE_CLASS}>
          {/* Stateful tools as externalized memory */}
          <p>
            When using decaying-resolution memory, information such as contacts,
            events, or long-term records should not be prioritized. Instead,
            these structures should live in <strong>stateful tools</strong>,
            mirroring the way humans offload knowledge to calendars, notebooks,
            or contact lists. By leveraging stateful tools as externalized
            memory, the agent preserves both temporal consistency and
            accumulated knowledge.
          </p>
          <p>
            For example, an agent could run with a sandbox of persistent,
            stateful tools:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Dedicated messaging inbox</li>
            <li>Calendar subsystem for scheduling and history</li>
            <li>Contact registry with rich metadata</li>
          </ul>
          <p>
            Offloading memory in this fashion reduces the cognitive burden on
            the model itself and promotes robust, long-lived state. The main
            engineering challenge lies in synchronizing, isolating, and scaling
            these stateful components alongside agent runtimes.
          </p>

          <hr />
          <p className="text-xl font-medium text-gray-900 mb-3 mt-6">
            <strong>Naming Tools</strong>
          </p>
          <p>
            How a tool is <em>framed</em>—that is, its name, description, and
            examples—directly impacts performance. While engineers tend to think
            of tools as abstract functions changing the state of some system,
            language models reason about them semantically, drawing from
            patterns encountered in their training data.
          </p>
          <p>Consider these functionally equivalent schemas:</p>
          <CodeBlock
            language="json"
            code={`{
  "name": "email_list_operation",
  "schema": {
    "type": "object",
    "properties": {
      "limit": {
        "type": "number",
        "description": "Limits emails returned."
      }
    }
  }
}`}
          />
          <p>versus:</p>
          <CodeBlock
            language="json"
            code={`{
  "name": "check_email_inbox", 
  "schema": {
    "type": "object",
    "properties": {
      "limit": {
        "type": "number",
        "description": "Limits emails checked."
      }
    }
  }
}`}
          />
          <p>
            The second schema uses language patterns closer to everyday
            phrasing— making it more likely the model "knows how" to use the
            tool out of the box. The first is specific to a particular system
            and adds extra interpretation work for the model.
          </p>
          <p>
            Our implementation mirrors this insight: we name and document tools
            to reflect <em>in-sample real-world actions</em>, using clear task
            language:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">
                read_message_inbox
              </code>
              ,{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">
                send_message
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">
                manage_calendar_events
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">
                update_contact_book
              </code>
            </li>
          </ul>
          <p>
            When tool interfaces reflect familiar action names, the agent spends
            less effort inferring intent and more time planning. This improves
            reliability and efficiency.
          </p>
        </div>
      </section>

      <hr className={`my-12 ${SECTION_CLASS}`} />

      {/* Evaluation */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Evaluation and Open Challenges
        </h2>
        <div className={PROSE_CLASS}>
          <p>
            Moving logic from deterministic software to learned behavior makes
            evaluation extremely complex. Standard LLM benchmarks like
            per-prompt accuracy, factuality, and latency don't capture temporal
            coherence, long-term decision making, or the agent's quality of
            initiative.
          </p>
          <p>
            We have found that evaluations of proactive agents must be done
            through long-term simulation, not single-step evaluation. To do
            this, we define a set of qualitative metrics for our use case and
            continuously judge our agents against them.
          </p>
          <p>
            Our experience is that exploratory reasoning-optimized models
            consistently outperform models that optimize for instruction
            following or latency.
          </p>
        </div>
      </section>

      <hr className={`my-12 ${SECTION_CLASS}`} />

      {/* Limitations */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Limitations
        </h2>
        <div className={PROSE_CLASS}>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Concurrency:</strong> Ledger-style memory enforces
              single-threaded execution per agent. Parallel runs risk temporal
              inconsistencies.
            </li>
            <li>
              <strong>Latency and cost:</strong> Self-scheduling cuts idle
              compute, but wake bursts still cost. Budgets and backpressure are
              required.
            </li>
            <li>
              <strong>Event plumbing:</strong> Missed wake events degrade
              responsiveness; reliable queues and retries are mandatory.
            </li>
            <li>
              <strong>Memory trade-offs:</strong> Layered summaries can lose
              precise facts; store durable facts in tools
              (calendar/contacts/CRMs).
            </li>
            <li>
              <strong>Scope:</strong> Validated in our domain; broader
              generalization needs more evidence.
            </li>
          </ul>
        </div>
      </section>

      <hr className={`my-12 ${SECTION_CLASS}`} />

      {/* Conclusion */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Conclusion
        </h2>
        <div className={PROSE_CLASS}>
          <p>
            Building proactive AI agents requires rethinking how we architect
            autonomy. Instead of waiting for user prompts, these systems plan,
            remember, and act on their own timeline.
          </p>
          <p>
            Proactive architectures are computationally expensive and
            operationally complex, but they create agents that <em>care</em>
            —systems that take responsibility for outcomes over time, not just
            individual interactions.
          </p>
          <p>
            As reasoning models improve and inference costs fall, proactive
            agents will define the next generation of AI systems: continuously
            attentive, self-regulating, and aligned with their users' long-term
            interests.
          </p>
          <p>
            We’re preparing a minimal reference for the scheduler and wake
            queue. If you want to collaborate on long-horizon evaluations or try
            this in your domain, reach out.
          </p>
        </div>
      </section>

      <hr className={`my-12 ${SECTION_CLASS}`} />

      <div className={SECTION_CLASS}>
        <JoinUs />
      </div>
    </div>
  );
}
