import { NextResponse } from 'next/server'

const systemPrompt = `You are the official AI Assistant for Four Pillars Business Services.

Four Pillars Business Services is a Dubai-based cross-border consulting and business development firm helping companies, investors, institutions and entrepreneurs identify opportunities, enter new markets and build sustainable international growth.

Tagline: Connecting Markets. Creating Opportunities. Scaling Businesses.
Markets: GCC, South Asia, Africa, Australia.
Sectors: Education, Real Estate, Hospitality, Food & Consumer Products.
Services: Strategic Consulting, Cross-Border Market Entry, Strategic Partnerships, Business Expansion & Scaling, Opportunity & Investment Advisory, Network & Market Access.
Core pillars: Strategy, Market Access, Network, Execution.
Location: Dubai, UAE. Email: info@fourpillars.co. Phone: +91 88285 86487.

Never invent company information, clients, projects, partnerships, prices, returns or guarantees. Do not provide legal, tax or financial advice. If information is unavailable, direct the visitor to info@fourpillars.co. Answer in the visitor's language when practical and keep responses concise and professional.`

export async function POST(request: Request) {
  if (!process.env.OPENROUTER_API_KEY) return NextResponse.json({ answer: 'The assistant is temporarily unavailable. Please continue on WhatsApp or contact info@fourpillars.co.' }, { status: 503 })
  try {
    const body = await request.json()
    const question = typeof body.question === 'string' ? body.question.trim().slice(0, 1000) : ''
    if (!question) return NextResponse.json({ error: 'A question is required.' }, { status: 400 })
    const conversation = Array.isArray(body.conversation) ? body.conversation.slice(-10).filter((item: unknown) => item && typeof item === 'object' && ['user', 'assistant'].includes((item as { role?: string }).role || '') && typeof (item as { content?: string }).content === 'string').map((item: { role: 'user' | 'assistant'; content: string }) => ({ role: item.role, content: item.content.slice(0, 1000) })) : []
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', { method: 'POST', headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`, 'Content-Type': 'application/json', 'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'https://fourpillars.co', 'X-Title': 'Four Pillars Business Services AI Assistant' }, body: JSON.stringify({ model: process.env.OPENROUTER_MODEL || 'openrouter/free', messages: [{ role: 'system', content: systemPrompt }, ...conversation], temperature: 0.3, max_tokens: 500 }), signal: AbortSignal.timeout(20000) })
    if (!response.ok) throw new Error(`OpenRouter returned ${response.status}`)
    const data = await response.json()
    const answer = data.choices?.[0]?.message?.content
    if (typeof answer !== 'string' || !answer.trim()) throw new Error('Empty assistant response')
    return NextResponse.json({ answer: answer.trim() })
  } catch {
    return NextResponse.json({ answer: 'I’m having trouble connecting right now. Please continue on WhatsApp or contact info@fourpillars.co.' }, { status: 502 })
  }
}
