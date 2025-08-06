import { Box, List } from "@mantine/core";
import { IconBrandAzure, IconBrandGithubCopilot, IconBrandMantine, IconBrandReactNative, IconBrandTypescript, IconRoute, IconTestPipe } from "@tabler/icons-react";

export function Top() {
  return (
    <Box>
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
    </Box>
  );
}