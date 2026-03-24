import { useState } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import DotNetworkIcon from "@/components/DotNetworkIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Erreur", description: "Veuillez remplir tous les champs obligatoires.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contacts").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      message: form.message.trim(),
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Erreur", description: "Une erreur est survenue. Veuillez réessayer.", variant: "destructive" });
      return;
    }
    toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-20 md:py-28 relative">
        <div className="absolute bottom-10 left-10 opacity-5">
          <DotNetworkIcon className="w-48 h-48" />
        </div>
        <div className="container relative z-10">
          <SectionTitle
            title="Contactez-nous"
            subtitle="Nous sommes à votre écoute. Remplissez le formulaire et nous vous répondrons rapidement."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nom *</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Votre nom" maxLength={100} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="votre@email.com" maxLength={255} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Téléphone</label>
                <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+33 6 12 34 56 78" maxLength={20} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Décrivez votre besoin..." rows={5} maxLength={1000} />
              </div>
              <Button type="submit" disabled={submitting} className="w-full bg-gradient-primary text-primary-foreground py-6 text-base font-semibold">
                {submitting ? "Envoi en cours..." : "Envoyer"}
                <Send className="ml-2" size={18} />
              </Button>
            </form>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Nos coordonnées</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, text: "Maristes 2, Dakar, Sénégal" },
                    { icon: Phone, text: "+221 76 945 75 49" },
                    { icon: Mail, text: "freelancefreelance83@gmail.com" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-secondary" size={18} />
                      </div>
                      <p className="text-muted-foreground text-sm pt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-card border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.5!2d-17.4677!3d14.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172e0804eb90b%3A0x9b5fb2e9b2e9b2e9!2sMaristes%202%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1700000000000"
                  width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Localisation OptiNet - Dakar"
                />
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">Audit gratuit</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Contactez-nous pour bénéficier d'un audit gratuit de votre infrastructure réseau.
                  Nos experts analyseront vos besoins et vous proposeront des solutions adaptées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
