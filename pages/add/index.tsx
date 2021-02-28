import { AddResource } from "../../components/AddResource";
import { PageMeta } from "../../components/PageMeta";
import { PageContainer } from "../../components/Layout/PageContainer";
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
