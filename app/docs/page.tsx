import { getApiDocs } from "@/app/libs/swagger";

import ReactSwagger from "./react-swagger";

export default async function IndexPage() {
  const spec = await getApiDocs();
  return (
    <section className="container">
      {/* <ReactSwagger spec={spec} /> */}
      asdsadsa
    </section>
  );
}
