import { AppShell, Box, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

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
        <Box p="md">Hashikuchi&apos;s Lab</Box>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}