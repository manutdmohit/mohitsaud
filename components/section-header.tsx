import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  number: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  number,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 md:mb-16 max-w-2xl', className)}>
      <p className="section-label mb-3">{number}</p>
      <h2 className="font-display text-3xl md:text-4xl tracking-tight text-foreground text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
