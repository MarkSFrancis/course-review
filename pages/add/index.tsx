import { AddResource } from "../../components/Resources/AddResource";
import { PageMeta } from "../../components/PageMeta";
import { PageContainer } from "design-system";
import { SignedInGuard } from "../../components/Auth";

export default function AddPage() {
  return (
    <PageContainer>
      <SignedInGuard>
        <PageMeta title="Add a resource" />
        <AddResource />
      </SignedInGuard>
    </PageContainer>
  );
}
