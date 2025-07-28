import { Text, AppShell, Box, Burger, List } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandAzure, IconBrandGithubCopilot, IconBrandMantine, IconBrandReactNative, IconBrandTypescript, IconRoute, IconTestPipe } from "@tabler/icons-react";

export function Top() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm", 
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm" 
        />
        <Box p="md"><Text size="lg">Hashikuchi&apos;s Lab</Text></Box>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        <Box>ここは hashikuchi の実験室です。</Box>
        <Box>この実験室は主に以下の言語やツールによって開発されています。
          <List>
            <List.Item icon={<IconBrandTypescript />}>TypeScript</List.Item>
            <List.Item icon={<IconBrandReactNative />} >React</List.Item>
            <List.Item icon={<IconRoute />}>React Router</List.Item>
            <List.Item icon={<IconBrandMantine/>}>Mantine</List.Item>
            <List.Item icon={<IconTestPipe/>}>Playwright</List.Item>
            <List.Item icon={<IconBrandAzure/>}>Azure Container Apps</List.Item>
            <List.Item icon={<IconBrandGithubCopilot />}>GitHub Copilot</List.Item>
          </List>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}