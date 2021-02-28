import { PageMeta } from "../../components/AppPage";
import { PageContainer } from '../../components/Layout/PageContainer';
import { FancyHeading } from "../../components/Typography";

export default function Tag() {
  return (
    <PageContainer>
      <PageMeta />
      <FancyHeading size="lg">Tag View</FancyHeading>
    </PageContainer>
  );
}
