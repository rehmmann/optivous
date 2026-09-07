"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MarketingBudgetsCase from "./MarketingBudgetsCase";
import MarketingFunnelCase from "./MarketingFunnelCase";
import HelpCareAICase from "./HelpCareAICase";
import ElateStaffingCase from "./ElateStaffingCase";
import VentionCase from "./VentionCase";

function CaseStudyContent() {
  const searchParams = useSearchParams();
  const caseType = searchParams.get("case");

  if (caseType === "marketing-budgets") {
    return <MarketingBudgetsCase />;
  }

  if (caseType === "marketing-funnel") {
    return <MarketingFunnelCase />;
  }

  if (caseType === "helpcare-ai") {
    return <HelpCareAICase />;
  }

  if (caseType === "elate-staffing") {
    return <ElateStaffingCase />;
  }

  if (caseType === "vention") {
    return <VentionCase />;
  }

  return null;
}

export default function CaseStudyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaseStudyContent />
    </Suspense>
  );
}
