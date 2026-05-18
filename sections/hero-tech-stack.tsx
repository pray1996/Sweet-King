import { TechIcon } from "@/components/tech-icon";
import { cn } from "@/lib/utils";

function WeChatIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="size-8" fill="currentColor">
      <path d="M12.7 7.2C7.6 7.2 3.5 10.5 3.5 14.6c0 2.4 1.4 4.6 3.7 6l-.8 2.7 3.2-1.6c1 .3 2 .4 3.1.4h.5a7.1 7.1 0 0 1-.3-2c0-4 3.9-7.2 8.8-7.4-.9-3.2-4.6-5.5-9-5.5Zm-3.3 5.3a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Zm6.6 0a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Z" />
      <path d="M28.5 20.2c0-3.4-3.4-6.2-7.5-6.2s-7.5 2.8-7.5 6.2 3.4 6.2 7.5 6.2c.9 0 1.7-.1 2.5-.4l2.7 1.4-.7-2.3c1.8-1.1 3-2.9 3-4.9Zm-10-1a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm5.4 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-8" fill="currentColor">
      <path d="M12 .8a11.2 11.2 0 0 0-3.5 21.8c.56.1.77-.24.77-.54v-2c-3.13.68-3.79-1.34-3.79-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.99 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.65 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.28-5.14 5.56.41.35.77 1.04.77 2.1v3.12c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="size-8" fill="currentColor">
      <rect x="4" y="7" width="24" height="18" rx="4" opacity="0.96" />
      <path
        d="m8 12 8 6 8-6"
        fill="none"
        stroke="var(--background)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="size-8" fill="currentColor">
      <rect x="7" y="3.5" width="18" height="25" rx="4.5" />
      <rect x="12" y="6.5" width="8" height="1.7" rx="0.85" fill="var(--background)" opacity="0.9" />
      <circle cx="16" cy="24" r="1.7" fill="var(--background)" opacity="0.9" />
    </svg>
  );
}

export function HeroTechStack({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between gap-2",
        className,
      )}
    >
      <TechIcon label="WeChat" detail="wx16645784579">
        <WeChatIcon />
      </TechIcon>

      <TechIcon label="GitHub" href="https://github.com/pray1996">
        <GitHubIcon />
      </TechIcon>

      <TechIcon label="Email" href="mailto:175441164@163.com">
        <EmailIcon />
      </TechIcon>

      <TechIcon label="Phone" href="tel:16645784579">
        <PhoneIcon />
      </TechIcon>
    </div>
  );
}
