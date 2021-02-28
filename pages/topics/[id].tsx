import { PageMeta } from "../../components/PageMeta";
import { PageContainer } from '../../components/Layout/PageContainer';
import { FancyHeading } from "../../components/Typography";

export default function Topic() {
  return (
    <PageContainer>
      <PageMeta />
      <FancyHeading>Topic View</FancyHeading>
    </PageContainer>
  );
}
