import Link from "next/link";
import { Github, LineChart, Sparkles, BookOpenCheck, BrainCircuit, Cog } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const highlightCards = [
  {
    icon: Sparkles,
    title: "Purpose-Built DSL",
    description:
      "MQL4 is a domain-specific language crafted for the MetaTrader 4 platform, enabling algorithmic trading with direct access to market data, order execution, and technical indicators."
  },
  {
    icon: Cog,
    title: "Event-Driven Runtime",
    description:
      "Expert Advisors respond to market ticks and chart events, while scripts and custom indicators share the same runtime. Understanding these entry points unlocks robust automation."
  },
  {
    icon: LineChart,
    title: "Strategy Friendly",
    description:
      "Build and test strategies with built-in optimization, historical data access, and native indicator composition that minimizes boilerplate trading logic."
  }
];

const lifecycle = [
  {
    name: "OnInit",
    detail: "Runs once when an Expert Advisor, script, or indicator is loaded. Ideal for variable initialization, parameter validation, and resource allocation."
  },
  {
    name: "OnTick",
    detail: "Executed on every market tick. Primary loop for trading logic, signal detection, and risk management decisions."
  },
  {
    name: "OnDeinit",
    detail: "Triggered when the program is removed or the chart closes. Use it to release resources, close files, or deregister events."
  }
];

const resources = [
  {
    title: "MetaTrader 4 Documentation",
    link: "https://docs.mql4.com/",
    blurb: "Official language reference, standard library, and platform API docs maintained by MetaQuotes."
  },
  {
    title: "MQL4 Community Forum",
    link: "https://www.mql5.com/en/forum",
    blurb: "Active community covering strategy design, indicator sharing, and troubleshooting tips."
  },
  {
    title: "Strategy Tester Walkthrough",
    link: "https://www.mql5.com/en/articles/1443",
    blurb: "Practical guide for validating Expert Advisors with historical simulations and optimization runs."
  }
];

const faqItems = [
  {
    value: "performance",
    question: "How performant is MQL4 for high-frequency trading?",
    answer:
      "MQL4 executes inside the MetaTrader terminal and is suitable for retail-level automation. For sub-millisecond latency or co-located execution, traders often graduate to native C++/Java gateways, but for most discretionary-to-automated strategies, MQL4 latency is acceptable."
  },
  {
    value: "differences",
    question: "What is the difference between MQL4 and MQL5?",
    answer:
      "MQL5 introduces a more expressive language with object-oriented paradigms, multi-threaded strategy tester, and support for additional order types. MQL4 remains widely used due to broker support and the extensive ecosystem of indicators and Expert Advisors."
  },
  {
    value: "learning",
    question: "How long does it take to learn MQL4?",
    answer:
      "If you already know C-style syntax (C/C++/C#), you can become productive within a week. The bigger learning curve is the MetaTrader event model and risk-adjusted strategy design."
  }
];

const codeSample = `//+------------------------------------------------------------------+
//| Simple Moving Average Cross Expert Advisor                      |
//+------------------------------------------------------------------+
#property strict
input int FastMAPeriod = 20;
input int SlowMAPeriod = 50;
input double RiskPerTrade = 0.02;

double fastMA, slowMA;

int OnInit()
{
  Print("SMA expert initialized");
  return(INIT_SUCCEEDED);
}

void OnTick()
{
  fastMA = iMA(_Symbol, _Period, FastMAPeriod, 0, MODE_SMA, PRICE_CLOSE, 0);
  slowMA = iMA(_Symbol, _Period, SlowMAPeriod, 0, MODE_SMA, PRICE_CLOSE, 0);

  if (fastMA > slowMA && PositionsTotal() == 0)
  {
    double lotSize = NormalizeDouble(AccountBalance() * RiskPerTrade / 1000.0, 2);
    OrderSend(_Symbol, OP_BUY, lotSize, Ask, 5, 0, 0, "SMA Long", 0, 0, clrDodgerBlue);
  }
  else if (fastMA < slowMA)
  {
    for (int i = OrdersTotal() - 1; i >= 0; i--)
    {
      if (OrderSelect(i, SELECT_BY_POS, MODE_TRADES) && OrderType() == OP_BUY && OrderSymbol() == _Symbol)
      {
        OrderClose(OrderTicket(), OrderLots(), Bid, 5, clrFireBrick);
      }
    }
  }
}

void OnDeinit(const int reason)
{
  Print("SMA expert removed, reason: ", reason);
}
`;

export const revalidate = 3600;

export default function HomePage() {
  return (
    <main className="relative">
      <section className="hero-gradient border-b border-slate-800/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <span className="badge">MetaTrader 4 · Expert Advisors · Scripts</span>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
              Everything you need to master <span className="gradient-text">MQL4</span>
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              MQL4 powers Expert Advisors, indicators, and scripts on the MetaTrader 4 platform. Explore its syntax, runtime model, and strategy design patterns crafted for retail algorithmic traders.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <div className="card flex items-center gap-3 bg-slate-900/80 px-4 py-3">
                <BrainCircuit className="h-5 w-5 text-brand" />
                <div>
                  <p className="font-semibold">DSL for Traders</p>
                  <p className="text-xs text-slate-400">C-inspired syntax. Trading-native primitives.</p>
                </div>
              </div>
              <div className="card flex items-center gap-3 bg-slate-900/80 px-4 py-3">
                <BookOpenCheck className="h-5 w-5 text-brand" />
                <div>
                  <p className="font-semibold">Rich Standard Library</p>
                  <p className="text-xs text-slate-400">Indicators, risk helpers, math utilities.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="card relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-8 py-10">
              <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.15),_transparent_60%)] blur-3xl" />
              <div className="relative space-y-5">
                <span className="badge w-max bg-brand/10 text-brand">MetaEditor Workflow</span>
                <h3 className="text-2xl font-semibold text-slate-100">Compile • Attach • Optimize</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/20 text-brand">1</span>
                    Write Expert Advisors, indicators, and scripts in MetaEditor, leveraging templates and built-in snippets.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/20 text-brand">2</span>
                    Press <code>F7</code> to compile, then attach the resulting <code>.ex4</code> file to any chart in MetaTrader 4.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/20 text-brand">3</span>
                    Iterate quickly by observing the terminal journal, enabling strategy tester traces, and profiling hotspots.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {highlightCards.map((card) => (
              <div key={card.title} className="card h-full">
                <card.icon className="h-8 w-8 text-brand" />
                <h3 className="mt-4 text-xl font-semibold text-slate-100">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">Language Essentials</h2>
            <p className="mt-4 text-sm text-slate-300">
              MQL4 resembles ANSI C with trading-specific extensions. Data types include numeric primitives,
              strings, arrays, and structures. You compile code in MetaEditor and load it into MetaTrader 4 charts.
            </p>
            <table className="table mt-6">
              <thead>
                <tr>
                  <th>Construct</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>Expert Advisor</code></td>
                  <td>Automates strategy execution and reacts to market events via <code>OnTick</code>.</td>
                </tr>
                <tr>
                  <td><code>Indicator</code></td>
                  <td>Draws data on charts using <code>OnCalculate</code> for custom analytics.</td>
                </tr>
                <tr>
                  <td><code>Script</code></td>
                  <td>Runs once for utilities like batch order placement or chart management.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="md:w-1/2">
            <pre>
              <code>{codeSample}</code>
            </pre>
            <p className="mt-4 text-xs text-slate-500">
              Tip: Always normalize lot sizes, add stop loss/take profit, and use <code>OrderSendAsync</code> when appropriate to
              avoid blocking ticks during network latency.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">Runtime Lifecycle</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {lifecycle.map((item) => (
              <div key={item.name} className="card h-full">
                <span className="text-sm font-semibold uppercase tracking-wide text-brand">{item.name}</span>
                <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-center">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">Build smarter Expert Advisors</h2>
              <p className="text-sm text-slate-300">
                Combine signals from custom indicators, price action, and risk overlays. Backtest strategies with multiple
                data sets and optimize parameters using MT4's strategy tester.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/20 text-brand">1</span>
                  Modularize entry, exit, and risk logic for clarity and reusability.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/20 text-brand">2</span>
                  Use global variables or buffers to share state between indicator and EA components.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/20 text-brand">3</span>
                  Protect capital with equity stops, drawdown alerts, and trailing risk adjustments.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="card space-y-6">
                <h3 className="text-xl font-semibold text-slate-100">Tooling Stack</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800/70 bg-slate-950/80 p-4">
                    <h4 className="text-sm font-semibold text-brand">MetaEditor</h4>
                    <p className="mt-2 text-xs text-slate-400">Syntax-aware IDE with compiler, profiler, and debugger.</p>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-950/80 p-4">
                    <h4 className="text-sm font-semibold text-brand">Strategy Tester</h4>
                    <p className="mt-2 text-xs text-slate-400">Optimize inputs and replay historical data with ticks or control points.</p>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-950/80 p-4">
                    <h4 className="text-sm font-semibold text-brand">MQL4 Market</h4>
                    <p className="mt-2 text-xs text-slate-400">Discover plug-and-play indicators, scripts, and Expert Advisors.</p>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-950/80 p-4">
                    <h4 className="text-sm font-semibold text-brand">Journal + Logs</h4>
                    <p className="mt-2 text-xs text-slate-400">Inspect execution flow and diagnose trade lifecycle events.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">Frequently Asked Questions</h2>
            <p className="text-sm text-slate-300">
              Quick answers based on years of building and maintaining Expert Advisors for retail FX desks.
            </p>
          </div>
          <div className="md:w-1/2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item) => (
                <AccordionItem key={item.value} value={item.value} className="border border-slate-800/70 bg-slate-950/70 px-4">
                  <AccordionTrigger className="text-left text-sm text-slate-200 hover:text-brand">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm text-slate-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">Go deeper</h2>
          <p className="mt-3 text-sm text-slate-300">
            Curated learning path to take you from your first compiled script to deploying resilient automated strategies.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <div key={resource.title} className="card h-full space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">{resource.title}</h3>
                <p className="text-sm text-slate-400">{resource.blurb}</p>
                <Link href={resource.link} target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold">
                  Explore resource
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800/70 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-200">Built for algorithmic traders</p>
            <p className="text-xs text-slate-500">Stay curious, test relentlessly, iterate fast.</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <Link href="https://www.mql5.com/en/articles" target="_blank" className="flex items-center gap-2">
              <BookOpenCheck className="h-4 w-4" />
              Articles
            </Link>
            <Link href="https://github.com/topics/mql4" target="_blank" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              Open-source repos
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
