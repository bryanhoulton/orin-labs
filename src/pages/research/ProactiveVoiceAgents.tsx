import "prismjs/components/prism-python";

import { useEffect } from "react";

import Prism from "prismjs";
import { Link } from "react-router-dom";

import CodeBlock from "../../components/CodeBlock";
import { JoinUs } from "../../components/Hiring";

const SECTION_CLASS = "w-full max-w-3xl px-4 sm:px-0";
const PROSE_CLASS =
  "prose prose-base sm:prose-lg text-gray-700 leading-relaxed space-y-4 max-w-none";

export default function ProactiveVoiceAgents() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="flex flex-col w-full items-center mt-6 sm:mt-8 gap-10 sm:gap-12">
      {/* Hero */}
      <div className="bg-primary shadow-sm rounded-xl relative overflow-hidden w-full -mx-4 sm:-mx-8 lg:-mx-16 aspect-[4/3] sm:aspect-video">
        <img
          src="/person.png"
          alt=""
          style={{
            filter: "invert(1) brightness(0.40)",
            mixBlendMode: "screen",
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative px-8 py-12 sm:p-12 lg:p-16 flex flex-col justify-center h-full gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
            Conversationality
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-white/90 text-sm sm:text-base">
            <Link to="/">
              <p className="underline hover:text-white transition-colors">
                Orin Labs
              </p>
            </Link>
            <p>•</p>
            <p>November 2025</p>
          </div>
        </div>
      </div>

      {/* Hook + Key Takeaways */}
      <section className={SECTION_CLASS}>
        <div className={PROSE_CLASS}>
          <p className="text-base sm:text-lg">
            Most voice agents only react. If you stop speaking, they stop
            thinking.
          </p>
          <p className="text-base sm:text-lg">
            We flipped the pipeline so the agent runs on its own, can speak
            first, and pauses cleanly when you talk. It feels natural and stays
            useful even when you’re silent.
          </p>
          <div>
            <p className="font-semibold">Key takeaways</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The agent loop runs continuously, not just on user speech.
              </li>
              <li>
                Two simple tools pace conversation:{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">speak()</code>{" "}
                and{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">wait()</code>.
              </li>
              <li>
                A blocking barge-in handler pauses the agent while you talk.
              </li>
              <li>
                Streaming keeps it responsive: stream STT in, start TTS early on{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">speak</code>{" "}
                actions, cancel on barge-in.
              </li>
              <li>
                Removes brittle silence heuristics; decisions are made from
                context.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Introduction
        </h2>
        <div className={PROSE_CLASS}>
          <p>
            Voice AI has become a standard way to build conversational
            interfaces. The typical architecture is straightforward: user speaks
            → speech-to-text → LLM processes → text-to-speech → system responds.
            This works well when users are actively engaged and responsive.
          </p>
          <p>
            However, this reactive design creates a critical failure mode:{" "}
            <strong>if the user doesn't speak, nothing happens</strong>. In any
            real-world application, users will inevitably:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Take time to think before responding</li>
            <li>Get distracted or multitask</li>
            <li>Intentionally test the system's boundaries</li>
            <li>Fall silent during difficult tasks</li>
          </ul>
          <p>
            We encountered this problem when deploying our AI tutoring system to
            families. Students quickly discovered they could stop lessons
            entirely by simply not speaking. This post describes how we solved
            it by making voice agents inherently proactive—capable of taking
            initiative, handling barge-ins, and maintaining engagement even when
            users are silent.
          </p>
        </div>
      </section>

      {/* Traditional Voice Agent */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Traditional Voice Agent
        </h2>
        <div className={PROSE_CLASS}>
          <p>
            The traditional voice agent is a relatively linear pipeline, shown
            below:
          </p>
          <div className="flex justify-center my-3">
            <img
              src="/voice.png"
              alt="Voice Agent Architecture: User → STT → LLM + Context → TTS → User"
              className="max-w-full h-auto rounded-xl border"
            />
          </div>
          <p>
            Through this simple pipeline of speech-to-text (STT), LLM calls, and
            text-to-speech (TTS), you can get a simple, fast, and effective
            voice agent running.
          </p>
          <p>
            Many optimizations can be made around chunk streaming, context
            engineering, and tool calls. Platforms like Vapi, Livekit, and
            Pipecat make this trivial.
          </p>
          <p>
            <a
              href="https://voiceaiandvoiceagents.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary hover:text-primary-600 transition-colors"
            >
              This guide
            </a>{" "}
            is a very good introduction for the current state of the art for
            voice AI.
          </p>
        </div>
      </section>

      {/* Classic Pipeline + Silence Words */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Classic Pipeline + Silence Words
        </h2>
        <div className={PROSE_CLASS}>
          <p>
            If a user stops speaking, we can usually detect the silence. At
            minimum, we can keep a timer for when the last STT trigger happened.
            Using this timer, we can trigger audio playback of example words to
            re-engage the user, like "Are you there?" or "Hello?"
          </p>
          <p>
            This works well, but doesn't allow for contextual silence timeouts.
            If a student is working on a hard problem, we might want to wait for
            a minute. But if they aren't responding to a simple conversational
            question, we might want to wait 10 seconds.
          </p>
          <CodeBlock
            language="python"
            code={`last_stt_time = now()

def on_user_speech(user, audio_chunks):
    new_words = speech_to_text(audio_chunks)
    last_stt_time = now()
    response = llm.call(context + new_words)
    audio_chunks_out = text_to_speech(response)
    user.play_audio(audio_chunks_out)

while True:
    if now() - last_stt_time > 30:  # seconds
        user.play_audio("Hello?")`}
          />
        </div>
      </section>

      {/* Classic Pipeline + Silence Triggers */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Classic Pipeline + Silence Triggers
        </h2>
        <div className={PROSE_CLASS}>
          <p>
            The only way to make contextual decisions about silence is to use
            the conversation itself. So, we can have an LLM decide what to do:
          </p>
          <CodeBlock
            language="python"
            code={`last_stt_time = now()

def on_user_speech(user, audio_chunks):
    ...

while True:
    if now() - last_stt_time > 30:  # seconds
        llm_decide_what_to_do()`}
          />
          <p>
            Maybe the LLM will decide to play one of the re-engagement audio
            prompts like "Hey, are you still there?", and maybe the agent will
            do nothing. It depends on context.
          </p>
          <p>
            This works better, but key questions remain: how long to wait, what
            choices to offer, and when to do nothing. Shorter timeouts call the
            model more often, increasing errors and cost.
          </p>
        </div>
      </section>

      {/* Flipped Pipeline */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Flipped Pipeline
        </h2>
        <div className={PROSE_CLASS}>
          <p>
            In the above example, we've subtly separated the event loop of the
            agent from the user input. Even without user input, the agent is
            going to run! Let's take this to the extreme and see what happens:
          </p>
          <CodeBlock
            language="python"
            code={`context = new Context()
tools = [speak, ...]

def speak(words):
    audio_chunks_out = text_to_speech(words)
    user.play_audio(audio_chunks_out)

def on_user_speech(user, audio_chunks):
    new_words = speech_to_text(audio_chunks)
    context.add(new_words)

while True:
    resp = llm.call(context, tools)
    context.add(resp)`}
          />
          <p>
            Now we've fully separated the agent from the user. The agent runs
            even if no one is on the call. This has clear advantages:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The agent now decides what to do at every moment, which is closer
              to how humans work.
            </li>
            <li>
              The turn-taking "you speak, I speak" method of the classical
              pipeline is completely gone. Now the agent can speak first, speak
              twice, or even wait for you to complete a task.
            </li>
          </ul>
          <p>
            However, this is incomplete. Calling the model every loop is
            expensive—especially when most loops should do nothing.
          </p>
        </div>
      </section>

      {/* Flipped Pipeline + Wait */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Flipped Pipeline + Wait
        </h2>
        <div className={PROSE_CLASS}>
          <p>To fix this, let's give the agent the ability to wait.</p>
          <CodeBlock
            language="python"
            code={`context = new Context()
tools = [speak, wait, ...]

def speak(words):
    audio_chunks_out = text_to_speech(words)
    user.play_audio(audio_chunks_out)

def wait(seconds):
    sleep(seconds)

def on_user_speech(user, audio_chunks):
    new_words = speech_to_text(audio_chunks)
    context.add(new_words)

while True:
    resp = llm.call(context, tools)
    context.add(resp)`}
          />
          <p>
            Now the agent can wait. With simple prompting, it will speak, wait,
            check in with the user, and even handle tasks while the user speaks.
          </p>
          <p>Once again, there are drawbacks. Notably:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>handling user barge-in</li>
            <li>waiting for users to finish speaking</li>
            <li>ensuring that context is always fresh</li>
          </ul>
          <p>These become challenges.</p>
        </div>
      </section>

      {/* Flipped Pipeline + Wait + Barge-in */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Flipped Pipeline + Wait + Barge-in
        </h2>
        <div className={PROSE_CLASS}>
          <p>
            The cleanest solution to the problems above is to add a blocking
            barge-in handler—so the entire execution of the agent stalls while
            the user speaks.
          </p>
          <p>
            This ensures that the agent always waits for the user to be finished
            before making its next decision—and prevents the agent from speaking
            over the user. The pseudocode for this gets quite complicated, so
            we'll let you figure it out for yourself :)
          </p>
          <p>
            You can use any number of voice activity detection (VAD) systems
            like Silero, Pipecat's Smart-Turn, or Deepgram's Flux (our choice)
            to determine when the user has started and stopped speaking.
          </p>
          <p>
            Once implemented, the voice agent will run independently of the user
            in a clean manner. When the user speaks, the agent will pause and
            wait for them to finish—then continue its loop.
          </p>
        </div>
      </section>

      {/* Limitations and Tradeoffs */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Limitations and Tradeoffs
        </h2>
        <div className={PROSE_CLASS}>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Compute budgets:</strong> An independent loop introduces
              ongoing compute. Mitigate with a{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">wait()</code>
              tool, adaptive sleep, max-steps per loop, and per-user budgets.
            </li>
            <li>
              <strong>Barge-in timing:</strong> VAD thresholds and smoothing can
              cause clipping or false starts. Calibrate, and treat VAD + STT as
              a single source (e.g., Flux) to simplify timing.
            </li>
            <li>
              <strong>Streaming tool calls:</strong> The model may emit
              multiple/partial tool calls. Use an incremental parser, validate
              fragments, buffer safely, and start TTS early only on validated
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                speak()
              </code>{" "}
              calls.
            </li>
            <li>
              <strong>Context freshness and concurrency:</strong> Avoid
              double-acting with an event ledger and idempotency keys; prefer
              atomic writes and single-flight per user.
            </li>
            <li>
              <strong>Observability:</strong> Trace each loop—decision, chosen
              tool, durations, budget usage, and next wake—to make behavior
              debuggable in production.
            </li>
            <li>
              <strong>Fallback behavior:</strong> When budgets are exceeded or
              tools fail, degrade gracefully to the reactive pipeline rather
              than dropping the session.
            </li>
          </ul>
        </div>
      </section>

      {/* Streaming */}
      <section className={SECTION_CLASS}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Streaming</h2>
        <div className={PROSE_CLASS}>
          <p>
            Without optimization, running a proactive voice agent like this can
            be slow. Our first versions would take 5–10s to respond to the user.
          </p>
          <p>
            Latency was worst when the agent was mid-task (for example, using
            other tools) before speaking its response. Streaming fixes this.
          </p>

          <div className="mt-6">
            <p>
              <strong>Speech to text.</strong> Streaming STT is the same as in
              the classic pipeline. We prefer Deepgram's Flux for latency since
              it combines VAD and STT on one socket.
            </p>
          </div>

          <div className="mt-6">
            <p>
              <strong>LLM responses.</strong> Streaming LLM output is trickier.
              In the classic pipeline, any response is spoken—therefore you can
              pass streamed chunks directly to TTS. Here, you need to parse tool
              calls as they stream. If you can spot a{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">speak</code>{" "}
              action early, start TTS right away. Handle the case where the
              model returns multiple tool calls in one response.
            </p>
          </div>

          <div className="mt-6">
            <p>
              <strong>Text to speech.</strong> Once you identify a speak action,
              send chunks into your TTS engine as usual. Cancel output when the
              user interrupts.
            </p>
          </div>

          <p>
            While proactive voice agents add complications to streaming, it is
            very doable.
          </p>
        </div>
      </section>

      <div className={SECTION_CLASS}>
        <JoinUs />
      </div>
    </div>
  );
}
