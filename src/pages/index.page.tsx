import type { NextPage } from "next";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import { Root } from "~/components/page/Root";
import { Layout } from "~/components/ui/Layout";

const RootPage: NextPage = () => {
  return (
    <Layout>
      <LayoutErrorBoundary>
        <Root />
      </LayoutErrorBoundary>
    </Layout>
  );
};

export default RootPage;
