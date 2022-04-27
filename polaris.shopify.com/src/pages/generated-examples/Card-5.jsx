import { AppProvider, Card,Stack,ButtonGroup,Button } from "@shopify/polaris";
import translations from '@shopify/polaris/locales/en.json';

function Example() {
  return (
    <AppProvider i18n={translations}>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@shopify/polaris@latest/build/esm/styles.css"
      />
      <div
        style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
  }}
      >
        <Card title="Secure your account with 2-step authentication">
  <Card.Section>
    <Stack spacing="loose" vertical>
      <p>
        Two-step authentication adds an extra layer of security when logging in
        to your account. A special code will be required each time you log in,
        ensuring only you can access your account.
      </p>
      <Stack distribution="trailing">
        <ButtonGroup>
          <Button>Enable two-step authentication</Button>
          <Button plain>Learn more</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  </Card.Section>
</Card>
      </div>
    </AppProvider>
  );
}

export default Example;
    