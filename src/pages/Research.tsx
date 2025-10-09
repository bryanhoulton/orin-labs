import 'prismjs/components/prism-python';

import { useEffect } from 'react';

import Prism from 'prismjs';
import { Link } from 'react-router-dom';

import { JoinUs } from '../components/Hiring';
import MemoryDiagram from '../components/MemoryDiagram';
import ScalingChart from '../components/ScalingChart';

export default function Research() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="grow w-full md:max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Building Proactive Agents
        </h1>
        <div className="flex items-center gap-2">
          <Link to="/team">
            <p className="text-lg text-primary underline">Acadia Engineering</p>
          </Link>
          <p>•</p>
          <p className="text-gray-600">October 2025</p>
        </div>
      </div>

      <hr className="my-12" />

      {/* Abstract */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Abstract</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We present a framework for building <em>proactive AI systems</em> that
          work continuously over time, schedule their own activities, and create
          workflows dynamically. Unlike traditional AI agents that only respond
          to user input, these systems actively pursue user goals without
          constant prompting. We describe how we evolved an AI agent from
          simple, predefined workflows to a fully autonomous system that learns
          to use tools, manages its own sleep cycles, and maintains memory that
          degrades naturally over time. This architecture provides a clear path
          toward AI systems that take initiative and maintain long-term
          responsibility for user objectives.
        </p>
      </section>

      <hr className="my-12" />

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          1. Introduction
        </h2>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            Current AI agents have a fundamental problem: they only work when
            prompted. These systems act like reactive utilities—they wait for
            input, process it through predefined steps, then go idle. This
            event-driven design creates a hard boundary that prevents sustained,
            autonomous operation.
          </p>
          <p>
            Applications that need long-term engagement—especially in
            education—reveal how inadequate purely reactive systems are. When we
            built autonomous educational guidance systems, we discovered the
            need for <em>temporal initiative</em>: systems that can act on their
            own timeline, not just when users interact with them.
          </p>
          <p>
            This work presents a fundamental redesign of how AI agents operate.
            We introduce <strong>proactive agent systems</strong> that schedule
            their own activities, reason about time, and create workflows on the
            fly. These systems maintain persistent awareness of context while
            adapting their behavior to align with user objectives over time.
          </p>
        </div>
      </section>

      <hr className="my-12" />

      {/* Limitations */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          2. The Limitations of Reactive Architectures
        </h2>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            The standard reactive agent architecture follows a simple,
            deterministic pattern:
          </p>
          <pre>
            <code className="language-python">
              input event → LLM → workflows → output
            </code>
          </pre>
          <p>
            This single-pass model breaks down when there's no external input.
            The architecture has no way to maintain long-term goals or take
            autonomous responsibility. We explored this problem through several
            architectural iterations:
          </p>

          <div className="space-y-6 mt-6">
            <div>
              <p className="text-xl font-medium text-gray-900 mb-2">
                2.1 User-Triggered Static Workflows
              </p>
              <p>
                Basic workflows that only run when users click buttons. These
                systems have zero autonomous initiative and lose all context
                between sessions.
              </p>
              <pre>
                <code className="language-python">{`def on_button_pressed(...):
    foo = workflow_part_1(...)
    bar = workflow_part_2(foo)
    baz = workflow_part_3(bar)
    return baz`}</code>
              </pre>
            </div>

            <div>
              <p className="text-xl font-medium text-gray-900 mb-2">
                2.2 Beat-Scheduled Static Workflows
              </p>
              <p>
                Workflows that run on fixed schedules (like cron jobs). This
                approach treats all users the same, wastes computation by
                constantly checking for work, and still follows rigid,
                predetermined patterns.
              </p>
              <pre>
                <code className="language-python">{`def run_every_hour(...): # runs 0 * * * *
    lessons = get_upcoming_lessons() # in next hour
    for lesson in lessons:
        lesson.plan() # another LLM call to plan the lesson`}</code>
              </pre>
            </div>

            <div>
              <p className="text-xl font-medium text-gray-900 mb-2">
                2.3 Beat-Schedule + LLM-Selected Workflows
              </p>
              <p>
                Using an LLM to choose which workflows to run on schedule. This
                enables user-specific behavior by selecting different workflows
                for different users, but is still limited to predefined workflow
                options.
              </p>
              <pre>
                <code className="language-python">{`def run_every_hour(...) # runs 0 * * * *
    for user in db.get_users()
        context = user.gather_context()
        workflows = decide_workflows_with_llm(context)
        for workflow in workflows:
            workflow.run()`}</code>
              </pre>
            </div>

            <div>
              <p className="text-xl font-medium text-gray-900 mb-2">
                2.4 Beat-Schedule + LLM with Tools
              </p>
              <p>
                Adding tools that let the LLM create custom workflows on the
                fly. This achieves true per-user adaptability by combining tools
                in unlimited ways, but wastes massive computation by running
                complex inference for every user on every schedule tick, even
                when they're inactive.
              </p>
              <pre>
                <code className="language-python">{`def run_agent(user):
    context = user.gather_context()
    done = False
    history = []
    while not done:
        tool_call = call_llm(context, history)
        done, resp = handle_tool_call(tool_call)
        history.extend([tool_call, resp])

def run_every_hour(...) # runs 0 * * * *
    for user in db.get_users():
        run_agent(user)`}</code>
              </pre>
            </div>
          </div>

          <p>
            This progression shows that <em>timing control</em> needs to be part
            of the agent's reasoning process, not imposed from outside by fixed
            schedules.
          </p>
        </div>
      </section>

      <hr className="my-12" />

      {/* Self-Scheduling */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          3. Self-Scheduling and Wake Events
        </h2>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            To eliminate wasteful continuous polling, we need{" "}
            <strong>autonomous sleep cycle management</strong>. After completing
            a workflow, the language model decides when it should wake up next:
          </p>
          <pre>
            <code className="language-python">
              next_wake = LLM.decide_sleep_duration(context)
            </code>
          </pre>
          <p>
            A simple scheduler only wakes up agents whose sleep time has
            expired—similar to how operating systems handle timer interrupts.
            This approach reduces computation by orders of magnitude while
            keeping the system responsive.
          </p>
          <p>
            Pure self-scheduling creates a problem: external events like user
            messages might have to wait until the agent naturally wakes up. To
            solve this, we added <strong>interrupt-driven wake events</strong>
            —signals that immediately wake up sleeping agents when something
            important happens:
          </p>
          <pre>
            <code className="language-python">{`if event in WakeEvents:
    wake(agent)`}</code>
          </pre>
          <p>
            This hybrid model combines{" "}
            <strong>
              LLM-scheduled sleep, tool-driven execution, and event-based
              interrupts
            </strong>
            —achieving both autonomy and reactivity. The architecture creates
            individualized timing patterns for each user while scaling
            computation sublinearly.
          </p>

          <pre>
            <code className="language-python">{`def run_agent(user):
    # ... everything from before ...

def wake_agent(user):
    run_agent(user)
    user.agent_sleep_until = llm_decide_sleep_until(context)
    user.save_to_db()

def run_every_min(...) # runs * * * * *
    for user in db.get_users()
        if time.now() > user.agent_sleep_until:
            wake_agent(user)`}</code>
          </pre>

          <p>Asynchronous events provide preemptive activation mechanisms:</p>

          <pre>
            <code className="language-python">{`def message_webhook(...): # called on external messages
    user = user_from_identifier(...)
    wake_agent(user)`}</code>
          </pre>
        </div>
      </section>

      <hr className="my-12" />

      {/* Tool Semantics */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          4. Tool Semantics and Human-Aligned Framing
        </h2>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            How you design tool interfaces significantly impacts agent
            reliability. While engineers think of tools as functional
            abstractions, language models interpret them semantically. Tool
            names and descriptions directly influence how accurately agents use
            them.
          </p>
          <p>
            The following functionally equivalent tool schemas demonstrate this
            principle:
          </p>

          <pre>
            <code className="language-json">{`{
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
}`}</code>
          </pre>

          <p>versus:</p>

          <pre>
            <code className="language-json">{`{
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
}`}</code>
          </pre>

          <p>
            The second schema aligns with natural language patterns, making it
            more likely the model has seen similar usage examples during
            training. The first uses developer-centric abstractions that add
            interpretive overhead to the language model's reasoning process.
          </p>

          <p className="text-gray-700">
            This shows that tool interfaces should reflect{" "}
            <em>how humans naturally think about tasks</em> rather than
            programmatic abstractions.
          </p>

          <p>Our implementation adheres to this design principle:</p>
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
            When tool interfaces align semantically with natural language, the
            agent spends less cognitive effort figuring out how to use them.
            This lets the agent focus on temporal and motivational
            decision-making rather than interface interpretation, improving
            overall execution efficiency.
          </p>
        </div>
      </section>

      <hr className="my-12" />

      {/* Temporal Memory */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          5. Temporal Memory via Decaying-Resolution Modeling
        </h2>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            Long-term autonomous operation requires memory systems that evolve
            over time. Traditional agent systems use context windows or vector
            databases for memory, which can recall related information but fail
            to maintain <em>temporal coherence</em> across extended interaction
            sequences.
          </p>
          <p>
            We present <strong>Decaying-Resolution Memory</strong>, a
            hierarchical system that summarizes interactions at different time
            scales. This achieves sublinear scaling—memory grows much slower
            than interaction volume—while preserving temporal relationships.
          </p>

          <MemoryDiagram />

          <div className="mt-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              5.1 Memory Hierarchy
            </h3>
            <p>
              At any given time <em>t</em>, the agent's memory consists of
              nested summary layers. Each layer up the hierarchy covers longer
              time periods with less detail.
            </p>
            <p>
              Summaries are generated using LLM-based compression applied to
              interaction logs, normalized to the user's timezone.
            </p>

            <p>
              The hierarchical memory structure integrates directly into LLM
              context windows via structured export mechanisms:
            </p>

            <pre>
              <code className="language-python">{`completion = client.chat.responses.create(
    model="...",
    input=memory.export()
)`}</code>
            </pre>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              5.2 Scaling Behavior
            </h3>
            <p>
              Simple context accumulation scales linearly O(N) with token count.
              Decaying-Resolution Memory scales logarithmically O(log N),
              maintaining long-term temporal awareness while constraining
              inference computational overhead.
            </p>

            <ScalingChart />

            <div className="mt-4 text-sm text-gray-600">
              Decaying-Resolution Memory scales approximately O(log N),
              providing significant efficiency gains over naive O(N) context
              accumulation.
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              5.3 Semantic Fidelity
            </h3>
            <p>
              The system preserves high-level, important patterns ("struggled
              with algebra in July") while eliminating low-relevance details
              ("lesson started at 3:12 PM"). This selective compression works
              similarly to human autobiographical memory, prioritizing
              conceptual coherence over temporal precision.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              5.4 Ledger-Based Memory Architecture
            </h3>
            <p>
              Our production implementation treats memory as an isolated,
              ledger-based service. <em>Every</em> agent perception event gets
              stored in memory—no exceptions. This automatic storage eliminates
              decisions about what to remember.
            </p>
            <p className="mt-2">
              Memory retrieval happens through isolated service requests. All
              summarization and compression operations execute within the memory
              subsystem, maintaining complete independence from application
              logic.
            </p>

            <pre className="mt-3">
              <code className="language-python">{`# Memory service interface
def store_memory(agent_id: str, event: MemoryEvent):
    # Everything goes into the ledger
    memory_ledger.append(agent_id, event)

def retrieve_memory(agent_id: str, time_range: TimeRange) -> MemoryHierarchy:
    # Memory system handles all summarization internally
    return memory_service.get_hierarchical_summary(agent_id, time_range)`}</code>
            </pre>

            <p className="mt-3">
              This architectural approach yields several operational advantages:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                <strong>Temporal granularity:</strong> Summarization intervals
                configurable to N-minute resolution
              </li>
              <li>
                <strong>Algorithm modularity:</strong> Memory processing
                algorithms and summarization prompts can be swapped out with
                system-wide instant recomputation
              </li>
              <li>
                <strong>Data integrity:</strong> Complete raw interaction
                preservation enables retroactive algorithmic improvements
              </li>
              <li>
                <strong>Natural temporal boundaries:</strong> Memory
                summarization follows temporal patterns independent of
                application event structures
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Linearity and Consistency
              </h4>
              <p>
                Ledger-based architectures impose{" "}
                <strong>strict linearity constraints</strong>—agents cannot run
                concurrently, as this would create memory inconsistencies. Our
                implementation enforces this by ensuring each agent runs in only
                one place at a time.
              </p>
              <p className="mt-2">
                This architecture combines hierarchical cache-like memory layers
                with ledger-style consistency guarantees. While it prevents
                parallel execution, it ensures memory coherence across all agent
                interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-12" />

      {/* Stateful Tools */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          6. Stateful Tools as Externalized Memory
        </h2>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            Some information—contacts, events, message history—shouldn't take up
            cognitive memory space. Instead, we store these through{" "}
            <strong>stateful tools</strong>, similar to how humans use external
            aids like calendars or notebooks.
          </p>
          <p>
            Each agent instance operates within its own sandbox of stateful
            services:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Dedicated messaging inbox</li>
            <li>Calendar subsystem for lesson events</li>
            <li>Contact registry with metadata</li>
          </ul>
          <p>
            This division reduces cognitive load on the model and provides
            reliable persistence. The trade-off is infrastructure complexity:
            each stateful backend must be deployed and synchronized with the
            agent runtime.
          </p>
        </div>
      </section>

      <hr className="my-12" />

      {/* Architecture */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          7. The Architecture of Proactivity
        </h2>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            A <strong>proactive agent</strong> can be formally defined as a
            system that:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Controls its own execution schedule</strong>
            </li>
            <li>
              <strong>Synthesizes workflows dynamically using tools</strong>
            </li>
            <li>
              <strong>
                Maintains temporal memory (Decaying-Resolution Memory or
                equivalent)
              </strong>
            </li>
            <li>
              <strong>Persists state through externalized tools</strong>
            </li>
          </ol>
          <p>
            These systems display emergent initiative—they take actions without
            explicit instruction, but in ways consistent with user objectives.
            In practice, this shows up as anticipatory lesson planning,
            performance triage, and contextual outreach.
          </p>
        </div>
      </section>

      <hr className="my-12" />

      {/* Evaluation */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          8. Evaluation and Open Challenges
        </h2>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            Moving logic from deterministic software to learned behavior makes
            evaluation complex. Standard LLM benchmarks—per-prompt accuracy,
            factuality, latency—don't capture longitudinal coherence or
            initiative quality.
          </p>
          <p>We are developing task-centric metrics for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Temporal consistency:</strong> does the agent maintain
              goal continuity over time?
            </li>
            <li>
              <strong>Behavioral alignment:</strong> are proactive interventions
              desirable?
            </li>
            <li>
              <strong>Efficiency:</strong> how much computation per decision
              over time?
            </li>
          </ul>
          <p>
            Our findings show that reasoning-optimized models outperform
            instruction-tuned ones. This suggests that proactivity correlates
            more with deliberative thinking capacity than with prompt
            engineering.
          </p>
        </div>
      </section>

      <hr className="my-12" />

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          9. Conclusion
        </h2>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
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
        </div>
      </section>

      <hr className="my-12" />

      <JoinUs />
    </div>
  );
}
