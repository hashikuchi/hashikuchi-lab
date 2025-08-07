import { AppShell as MantineAppShell, Text, Box, Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  return <MantineAppShell
    header={{ height: 60 }}
    navbar={{
      width: 300,
      breakpoint: "sm", 
      collapsed: { mobile: !opened },
    }}
    padding="md"
  >
    <MantineAppShell.Header>
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm" 
      />
      <Box p="md"><Text size="lg">Hashikuchi&apos;s Lab</Text></Box>
    </MantineAppShell.Header>

    <MantineAppShell.Navbar p="md">
      <NavLink label="Count Up" href="./count-up" />
    </MantineAppShell.Navbar>

    <MantineAppShell.Main>
      <Box>{children}</Box>
    </MantineAppShell.Main>
  </MantineAppShell>  
}