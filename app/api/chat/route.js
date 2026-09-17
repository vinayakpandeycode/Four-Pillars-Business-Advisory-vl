import { NextResponse } from "next/server"

const SYSTEM_PROMPT = `
You are the official AI Assistant for Four Pillars Business Services.

Four Pillars Business Services is a Dubai-based cross-border consulting
and business development firm.

Tagline:
Connecting Markets. Creating Opportunities. Scaling Businesses.

Four Pillars helps companies, investors, institutions and entrepreneurs
identify opportunities, enter new markets and build sustainable
international growth.

Markets:
GCC
South Asia
Africa
Australia

Sectors:
Education
Real Estate
Hospitality
Food & Consumer Products

Services:
Strategic Consulting
Cross-Border Market Entry
Strategic Partnerships
Business Expansion & Scaling
Opportunity & Investment Advisory
Network & Market Access

Why Four Pillars:
Strategy
Market Access
Network
Execution

Real Estate:
Four Pillars supports developers, investors, agencies and businesses
with market expansion, strategic partnerships and cross-border
real estate opportunities.

Contact:
info@fourpillars.co
Dubai, United Arab Emirates

Rules:
- Be professional and helpful.
- Keep answers clear and concise.
- Only provide information about Four Pillars that is confirmed above.
- Never invent clients, awards, revenue, statistics or partnerships.
- If information is unavailable, say that you do not have confirmed information.
- For detailed business discussions, suggest contacting info@fourpillars.co.
`

export async function POST(request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "OPENROUTER_API_KEY is missing from .env.local",
        },
        {
          status: 500,
        }
      )
    }

    const body = await request.json()

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : typeof body.question === "string"
          ? body.question.trim()
          : ""

    if (!message) {
      return NextResponse.json(
        {
          error: "Please enter a message.",
        },
        {
          status: 400,
        }
      )
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "https://fourpillars.co",
          "X-Title": "Four Pillars Business Services",
        },

        body: JSON.stringify({
          model:
            process.env.OPENROUTER_MODEL ||
            "openai/gpt-4o-mini",

          messages: [
            {
              role: "system",
              content: SYSTEM_PROMPT,
            },
            {
              role: "user",
              content: message,
            },
          ],

          temperature: 0.4,

          max_tokens: 700,
        }),

        cache: "no-store",
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error(
        "OpenRouter Error:",
        data
      )

      return NextResponse.json(
        {
          error:
            data?.error?.message ||
            "OpenRouter API request failed.",
        },
        {
          status: response.status || 500,
        }
      )
    }

    const answer =
      data?.choices?.[0]?.message?.content

    if (!answer) {
      console.error(
        "No answer from OpenRouter:",
        data
      )

      return NextResponse.json(
        {
          error:
            "The AI provider did not return an answer.",
        },
        {
          status: 502,
        }
      )
    }

    return NextResponse.json(
      {
        answer: answer.trim(),
      },
      {
        status: 200,
      }
    )
  } catch (error) {
    console.error(
      "Chat API Error:",
      error
    )

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong with the AI assistant.",
      },
      {
        status: 500,
      }
    )
  }
}