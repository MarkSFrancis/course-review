import React from "react";
import { PageMeta } from "../components/PageMeta";
import { PageContainer } from "../components/Layout/PageContainer";
import { Resources } from '../components/Resources';

export default function Home() {
  return (
    <PageContainer>
      <PageMeta>
        <title>Course Review - Share your learning</title>
      </PageMeta>
      <Resources />
    </PageContainer>
  );
}
