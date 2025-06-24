import PageContainer from "@/components/layout/page-container";

export default function ParetoAnalyticsViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer className="min-h-screen w-full" scrollable={true}>
      <div className="flex flex-1 flex-col space-y-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            {children}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}