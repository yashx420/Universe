import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MarkdownMessageProps {
  content: string;
}

export function MarkdownMessage({ content }: MarkdownMessageProps) {
  const [copiedCodeBlock, setCopiedCodeBlock] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeBlock(index);
    setTimeout(() => setCopiedCodeBlock(null), 2000);
  };

  let codeBlockIndex = 0;

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:mt-4 prose-headings:mb-2 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-a:text-blue-500 prose-a:underline hover:prose-a:text-blue-600">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";
            const code = String(children).replace(/\n$/, "");

            if (inline) {
              return (
                <code className="bg-muted text-foreground px-1.5 py-0.5 rounded text-xs font-mono" {...props}>
                  {children}
                </code>
              );
            }

            const currentBlockIndex = codeBlockIndex++;
            return (
              <div className="relative my-4">
                <div className="flex items-center justify-between bg-muted/50 px-4 py-2 rounded-t-md border border-border">
                  <span className="text-xs font-mono text-muted-foreground">{language || "code"}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(code, currentBlockIndex)}
                    className="h-6 w-6 p-0"
                  >
                    {copiedCodeBlock === currentBlockIndex ? (
                      <Check className="h-3.5 w-3.5" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
                <pre className="bg-muted/30 border border-t-0 border-border px-4 py-3 rounded-b-md overflow-x-auto">
                  <code className="text-xs font-mono text-foreground">{code}</code>
                </pre>
              </div>
            );
          },
          p: ({ children }) => (
            <p className="text-foreground leading-relaxed mb-3">{children}</p>
          ),
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold text-foreground mt-4 mb-2">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold text-foreground mt-4 mb-2">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-bold text-foreground mt-3 mb-1">{children}</h3>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1 mb-3 text-foreground">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1 mb-3 text-foreground">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-foreground">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 py-1 my-3 italic text-muted-foreground bg-primary/5 rounded-r">
              {children}
            </blockquote>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline"
            >
              {children}
            </a>
          ),
          table: ({ children }) => (
            <table className="border-collapse border border-border w-full my-4 text-sm">
              {children}
            </table>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody>{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-border">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="border border-border px-3 py-2 text-left font-semibold">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-3 py-2">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
