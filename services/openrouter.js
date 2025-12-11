import fetch from "node-fetch";

export default async function generateSummary(text) {
    const key = process.env.OPENROUTER_API_KEY;

    if (!key) return "❌ OPENROUTER_API_KEY missing!";

    try {
        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${key}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "google/gemma-2-9b-it:free",
                messages: [
                    { role: "system", content: "Summarize this cleanly." },
                    { role: "user", content: text }
                ]
            })
        });

        const data = await res.json();
        return data?.choices?.[0]?.message?.content || "⚠ No summary generated.";

    } catch (err) {
        console.log("OpenRouter error:", err);
        return "❌ Summary generation failed.";
    }
}
