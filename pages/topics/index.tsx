import { PageMeta } from "../../components/AppPage";
import { PageContainer } from '../../components/Layout/PageContainer';
import { FancyHeading } from "../../components/Typography";

export default function Topics() {
  return (
    <PageContainer>
      <PageMeta title="Topics" />
      <FancyHeading>Topics</FancyHeading>
    </PageContainer>
  );
}
