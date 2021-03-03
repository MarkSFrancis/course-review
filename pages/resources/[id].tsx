import { PageMeta } from "../../components/PageMeta";
import { PageContainer } from "../../components/Layout/PageContainer";
import { Resource } from "../../components/Resources";
import { useRouter } from "next/router";

export default function ResourcePage() {
  const router = useRouter();
  const { id } = router.query as { id: string };

  return (
    <PageContainer>
      <PageMeta />
      <Resource id={id} />
    </PageContainer>
  );
}
