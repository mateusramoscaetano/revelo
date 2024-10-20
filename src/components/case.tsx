import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CaseCard({
  caseNumber,
  description,
}: {
  caseNumber: string;
  description: string;
}) {
  return (
    <Card className="bg-[#101010] text-white w-full max-w-[400px] border-none rounded-none ">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center">
          Case {caseNumber}
          <span className="ml-2 h-0.5 w-[62px] bg-red-500"></span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-300 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
