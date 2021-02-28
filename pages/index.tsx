import React from "react";
import { PageMeta } from "../components/AppPage";
import { PageContainer } from "../components/Layout/PageContainer";
import { RecentlyAdded } from "../components/RecentlyAdded";

export default function Home() {
  return (
    <PageContainer>
      <PageMeta>
        <title>Course Review - Share your learning</title>
      </PageMeta>
      <RecentlyAdded />
    </PageContainer>
  );
}
