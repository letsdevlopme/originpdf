"use client";

type EzoicAdPlaceholderProps = {
  id: number;
};

export default function EzoicAdPlaceholder({ id }: EzoicAdPlaceholderProps) {
  return <div id={`ezoic-pub-ad-placeholder-${id}`} />;
}
