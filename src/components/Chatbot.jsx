import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import { HiX } from 'react-icons/hi';
import remarkGfm from "remark-gfm";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [wakingUp, setWakingUp] = useState(false);
  const [showBotMessage, setShowBotMessage] = useState(true);

  const chatbotUrl = "https://portfolio-ai-sssistant.onrender.com/ask";

  const sendMessage = async () => {
    if (!question.trim() || loading) return;

    const userQuestion = question.trim();

    // Add user message immediately
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userQuestion,
      },
    ]);

    setQuestion("");
    setLoading(true);
    setWakingUp(true);

    try {
      const response = await fetch(chatbotUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume_id: "resume1",
          question: userQuestion,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      const answer =
        typeof data === "string"
          ? data
          : data.answer ||
          data.response ||
          data.result ||
          "I couldn't found the information in the portfolio or resume.";

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: answer,
        },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "The AI assistant is taking a little longer to wake up. Please try again in a few seconds.",
        },
      ]);
    } finally {
      setLoading(false);
      setWakingUp(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <div
          className="fixed right-5 bottom-5 sm:right-6 sm:bottom-6 z-[9999]">

          {/* AI Assistant Message */}
          {showBotMessage && (
            <div
              className="absolute right-0 bottom-[75px] sm:bottom-[82px] w-[280px] sm:w-[320px] rounded-2xl border border-purple-500/40 bg-[#151522] p-4 pr-10 shadow-2xl">
              <button
                type="button"
                onClick={() => setShowBotMessage(false)}
                aria-label="Close message"
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-white transition-all duration-200 hover:text-red-500">
                <HiX className="h-4 w-4" />
              </button>

              <p className="text-sm leading-6 text-white">
                You can interact with my AI Assistant to know more about me!
              </p>

              <div
                className="absolute -bottom-2 right-7 h-4 w-4 rotate-45 border-r border-b border-purple-500/40 bg-[#151522]" />
            </div>
          )}

          {/* Floating Bot Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open AI chatbot"
            title="Chat with AI"
            className=" relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-purple-500 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-110 hover:bg-purple-600 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500/30">
            <FaRobot className="h-7 w-7 sm:h-8 sm:w-8" />
            <span className=" absolute right-0 top-0 h-4 w-4 rounded-full border-2 border-[#0B0B14] bg-green-400" />
          </button>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex h-[100dvh] w-full flex-col overflow-hidden bg-[#0B0B14] shadow-2xl sm:inset-auto sm:right-6 sm:bottom-6 sm:h-[650px] sm:w-[420px] sm:rounded-2xl sm:ring-1 sm:ring-purple-500/30">
          <div
            className="flex h-16 shrink-0 items-center justify-between border-b border-purple-500/20 bg-[#10101C] px-4 text-white">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/15 ring-1 ring-purple-500/30">
                <FaRobot className="h-6 w-6 text-purple-400" />
              </div>

              <div>
                <h2 className="text-base font-semibold text-white">Santhosh Reddy's</h2>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-xs text-white">AI Assistant</span>
                </div>
              </div>
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-all duration-300 hover:text-red-500">
              <HiX className="h-5 w-5" />
            </button>
          </div>

          <div
            className="min-h-0 flex-1 overflow-y-auto bg-[#0B0B14] p-4">
            {messages.length === 0 && (
              <div className="flex h-full items-center justify-center">
                <div className="max-w-[320px] text-center">
                  <div
                    className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10 ring-1 ring-purple-500/30">
                    <FaRobot
                      className=" h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Welcome! 👋
                  </h3>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    I’m Santhosh Reddy’s AI Assistant.
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white">
                    Ask me anything about his skills, projects, experience or education background.
                  </p>
                  <p className="mt-3 text-xs leading-5 text-white/60">
                    The AI assistant may take a few seconds to
                    wake up when it hasn't been used recently.
                  </p>

                  {/* Suggested Questions */}
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setQuestion("Tell me about his skills?")
                      }
                      className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1.5 text-[10px] text-white transition-all hover:bg-purple-500 hover:border-purple-500">
                      Tell me about his skills?
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setQuestion(
                          "Tell me about his projects?"
                        )
                      }
                      className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1.5 text-[10px] text-white transition-all hover:bg-blue-500 hover:border-blue-500">
                      Tell me about his projects?
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setQuestion(
                          "Tell me about his work experience?"
                        )
                      }
                      className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1.5 text-[10px] text-white transition-all hover:bg-purple-500 hover:border-purple-500">
                      Tell me about his work experience?
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-6
                      ${message.role === "user" ? `max-w-[82%] rounded-br-sm bg-blue-500 text-white shadow-md shadow-blue-500/10` : `max-w-[96%] rounded-bl-sm bg-purple-500 text-white shadow-md shadow-purple-500/10`}`}>
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({ children }) => (
                          <h1
                            className="mb-4 text-xl font-bold text-white">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2
                            className="mb-4 text-lg font-bold text-white">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3
                            className="mt-4 mb-2 text-base font-semibold text-white">
                            {children}
                          </h3>
                        ),
                        p: ({ children }) => (
                          <p
                            className="mb-2 leading-6 text-white">
                            {children}
                          </p>
                        ),
                        ul: ({ children }) => (
                          <ul
                            className="mb-3 ml-5 list-disc space-y-1 text-white">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol
                            className="mb-3 ml-5 list-decimal space-y-1 text-white">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li
                            className="leading-6 text-white">
                            {children}
                          </li>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-bold text-white">
                            {children}
                          </strong>
                        ),
                        em: ({ children }) => (
                          <em className="text-white">
                            {children}
                          </em>
                        ),
                        code: ({ children }) => (
                          <code
                            className="rounded bg-black/20 px-1.5 py-0.5 text-white text-xs">
                            {children}
                          </code>
                        ),
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline underline-offset-2 hover:opacity-80">
                            {children}
                          </a>
                        ),
                        hr: () => (
                          <hr
                            className="my-4 border-white/30" />
                        ),
                        table: ({ children }) => (
                          <div className="my-4 w-full overflow-hidden rounded-xl border border-white/15">
                            <table className="w-full table-fixed border-collapse text-[10px] sm:text-xs">
                              {children}
                            </table>
                          </div>
                        ),
                        thead: ({ children }) => (
                          <thead className="bg-white/10">
                            {children}
                          </thead>
                        ),
                        tbody: ({ children }) => (
                          <tbody className="divide-y divide-white/10">
                            {children}
                          </tbody>
                        ),
                        tr: ({ children }) => (
                          <tr className="hover:bg-white/5">
                            {children}
                          </tr>
                        ),
                        th: ({ children }) => (
                          <th className="break-words px-2 py-2 text-left font-semibold text-purple-100">
                            {children}
                          </th>
                        ),
                        td: ({ children }) => (
                          <td className="break-words px-2 py-2 align-top leading-4 text-white/90">
                            {children}
                          </td>
                        ),
                      }}>
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div
                    className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-md">
                    <div className="flex items-center gap-3">

                      {/* Loading dots */}
                      <div className="flex gap-1">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-purple-500" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-orange-500"
                          style={{
                            animationDelay: "150ms",
                          }} />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500"
                          style={{
                            animationDelay: "300ms",
                          }} />
                      </div>

                      <div>
                        <p className="font-medium text-black text-xs">
                          {wakingUp ? "AI assistant is Thinking..." : "Wait few seconds..."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className="shrink-0 border-t border-purple-500/20 bg-[#10101C] p-3">
            <div
              className="flex items-end gap-2 rounded-xl bg-[#0B0B14] p-2 ring-1 ring-purple-500/20 transition-all duration-300 focus-within:ring-purple-500/50">

              {/* Textarea */}
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                rows={1}
                placeholder="Ask about Santhosh Reddy..."
                className="min-h-[40px] max-h-[100px] flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white placeholder:text-white/40 outline-none disabled:cursor-not-allowed disabled:opacity-50" />

              {/* Send Button */}
              <button
                type="button"
                onClick={sendMessage}
                disabled={!question.trim() || loading}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100">
                <FaPaperPlane className="h-5 w-5" />
              </button>
            </div>

            {/* Footer */}
            <p className="mt-2 text-center text-[10px] text-white/40">
              AI Assistant gives the information from the portfolio or resume.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
