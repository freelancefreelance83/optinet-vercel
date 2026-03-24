import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("LOVABLE_API_KEY");
const RECIPIENT_EMAIL = "freelancefreelance83@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message } = await req.json();

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0A2342;">Nouveau message de contact - OptiNet</h2>
        <hr style="border: 1px solid #1F7A8C;" />
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <h3 style="color: #0A2342;">Message :</h3>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 8px;">${message}</p>
        <hr style="border: 1px solid #eee;" />
        <p style="color: #999; font-size: 12px;">Ce message a été envoyé depuis le formulaire de contact du site OptiNet.</p>
      </div>
    `;

    const res = await fetch("https://api.lovable.dev/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        to: [RECIPIENT_EMAIL],
        subject: `Nouveau contact OptiNet: ${name}`,
        html: emailHtml,
        from: "OptiNet <noreply@lovable.dev>",
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Email send failed:", errorText);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
