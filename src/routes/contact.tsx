import { Head, Title, Meta } from "solid-start";
import Form from "~/components/contact/Form";

const contact = () => {
  return (
    <>
      <Head>
        <Title>Contact Us | FinanceFlow</Title>
        <Meta charset="utf-8" />
        <Meta name="description" content="Contact page of Finance Flow" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main class="pt-32 sm:mx-40 mx-4">
        <Form />
      </main>
    </>
  );
};

export default contact;
