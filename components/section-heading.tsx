import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-white/62 md:text-lg">{body}</p>
    </div>
  );
}
