import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team behind SAIFbio.",
};

export default function TeamPage() {
  return (
    <div>
      <PageHeader
        title="Our team"
        intro="SAIFbio is led by the partners of SAIF Ventures, who bring decades of experience building companies, funding founders, and tracking the risks of advanced technology."
      />

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.slug} className="text-center">
                <CardContent>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
                  />
                  <h2 className="font-semibold">{member.name}</h2>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="mt-4 text-left text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
